import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const AdminGenericPage = ({ title, description, children }) => {
  const { isDark } = useTheme();

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className={`text-3xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
          {title}
        </h1>
        <p className={`text-sm mt-1 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
          {description}
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`p-8 rounded-2xl border-2 ${
          isDark
            ? 'border-gold-600 border-opacity-40 bg-luxury-800'
            : 'border-luxury-200 bg-white shadow-lg'
        }`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AdminGenericPage;
