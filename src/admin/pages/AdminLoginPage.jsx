import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { adminLogin } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (adminLogin(username, password)) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-luxury-950 via-luxury-900 to-luxury-950' : 'bg-gradient-to-br from-luxury-900 to-gold-800'} flex items-center justify-center px-4 py-12`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md ${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40' : 'bg-white'} rounded-2xl shadow-2xl p-8 md:p-10`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className={`text-5xl font-serif font-bold mb-2 ${isDark ? 'text-gold-400' : 'text-gold-600'}`}
          >
            A
          </motion.div>
          <h1 className={`text-3xl font-serif font-bold mb-2 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
            Admin Portal
          </h1>
          <p className={`text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            Manage your luxury store
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl border-2 ${isDark ? 'bg-red-500 bg-opacity-10 border-red-500 border-opacity-40 text-red-300' : 'bg-red-50 border-red-200 text-red-600'} flex items-start gap-3`}
          >
            <FiAlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-luxury-200' : 'text-luxury-900'}`}>
              Username
            </label>
            <div className={`relative flex items-center px-4 py-3 rounded-xl border-2 transition-all ${isDark ? 'border-gold-600 border-opacity-40 bg-luxury-700 focus-within:border-gold-400 focus-within:border-opacity-100' : 'border-luxury-200 bg-luxury-50 focus-within:border-gold-500'}`}>
              <FiMail className={`mr-3 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className={`flex-1 outline-none bg-transparent text-sm ${isDark ? 'text-white placeholder-luxury-400' : 'text-luxury-900 placeholder-luxury-500'}`}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-luxury-200' : 'text-luxury-900'}`}>
              Password
            </label>
            <div className={`relative flex items-center px-4 py-3 rounded-xl border-2 transition-all ${isDark ? 'border-gold-600 border-opacity-40 bg-luxury-700 focus-within:border-gold-400 focus-within:border-opacity-100' : 'border-luxury-200 bg-luxury-50 focus-within:border-gold-500'}`}>
              <FiLock className={`mr-3 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin@123"
                className={`flex-1 outline-none bg-transparent text-sm ${isDark ? 'text-white placeholder-luxury-400' : 'text-luxury-900 placeholder-luxury-500'}`}
              />
            </div>
          </div>

          {/* Demo Credentials Info */}
          <div className={`p-4 rounded-xl ${isDark ? 'bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30' : 'bg-blue-50 border border-blue-200'}`}>
            <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>Demo Credentials:</p>
            <p className={`text-xs ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
              Username: <span className="font-mono font-bold">admin</span><br />
              Password: <span className="font-mono font-bold">admin@123</span>
            </p>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white transition-all ${isDark ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700' : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700'} disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </span>
            ) : (
              'Login to Admin Panel'
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className={`my-6 flex items-center gap-3 ${isDark ? 'text-luxury-500' : 'text-luxury-400'}`}>
          <div className="flex-1 h-px bg-current"></div>
          <span className="text-xs">OR</span>
          <div className="flex-1 h-px bg-current"></div>
        </div>

        {/* Back to Store */}
        <button
          onClick={() => navigate('/')}
          className={`w-full py-3 rounded-xl font-semibold transition-all border-2 ${isDark ? 'border-gold-600 border-opacity-40 text-gold-300 hover:border-opacity-70 hover:bg-gold-600 hover:bg-opacity-10' : 'border-gold-600 text-gold-600 hover:bg-gold-50'}`}
        >
          Back to Store
        </button>

        {/* Footer */}
        <p className={`text-center text-xs mt-6 ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>
          © 2026 Luxury Admin. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
