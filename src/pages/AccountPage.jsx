import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../admin/context/AdminAuthContext';
import Button from '../components/Common/Button';
import toast from 'react-hot-toast';

export default function AccountPage() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { adminLogin } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Check if it's admin credentials
      if (email === 'admin@gmail.com' && password === 'admin@123') {
        const success = adminLogin(email, password);
        if (success) {
          toast.success('Admin login successful!');
          // Small delay to ensure state updates
          setTimeout(() => {
            navigate('/admin/dashboard');
          }, 100);
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${isDark ? 'bg-gradient-to-b from-luxury-950 via-luxury-900 to-luxury-950 min-h-screen' : 'bg-white'}`}>
      <div className="container-custom py-8 md:py-12">
        <h1 className={`text-3xl md:text-4xl font-serif mb-8 md:mb-12 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Account</h1>

        <div className="max-w-md mx-auto w-full px-4 md:px-0">
          <div className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40 shadow-2xl shadow-gold-500/10' : 'bg-white shadow-lg'}`}>
            <h2 className={`text-2xl font-serif mb-6 md:mb-8 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Sign In</h2>
            
            {error && (
              <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-red-600 bg-opacity-20 border border-red-600 border-opacity-40 text-red-300' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                {error}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`} 
              />
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full text-base md:text-lg" 
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <p className={`text-center mt-4 text-xs ${isDark ? 'text-luxury-400' : 'text-luxury-500'}`}>
              Demo Admin Credentials:<br/>
              <span className={isDark ? 'text-gold-400' : 'text-gold-600'}>admin@gmail.com</span> / <span className={isDark ? 'text-gold-400' : 'text-gold-600'}>admin@123</span>
            </p>

            <p className={`text-center mt-6 text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
              Don't have an account? <span className={isDark ? 'text-gold-400 font-semibold cursor-pointer hover:text-gold-300' : 'text-gold-600 font-semibold cursor-pointer hover:text-gold-700'}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
