import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/Common/Button';

export default function NotFoundPage() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'bg-luxury-900 min-h-screen' : 'bg-white'}`}>
      <div className="container-custom py-24 text-center">
        <h1 className={`text-6xl font-serif mb-4 ${isDark ? 'text-white' : 'text-luxury-900'}`}>404</h1>
        <p className={`text-2xl mb-8 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>Page Not Found</p>
        <p className={`mb-8 ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
