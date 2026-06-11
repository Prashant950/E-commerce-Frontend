import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiMenu, 
  FiLogOut, 
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiImage,
  FiStar,
  FiBarChart2,
  FiCreditCard,
  FiRotateCcw,
  FiBell,
  FiTag,
  FiSun,
  FiMoon,
  FiChevronDown
} from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useAdminAuth } from '../context/AdminAuthContext';

const navItems = [
  { name: 'Dashboard', icon: FiGrid, path: '/admin/dashboard' },
  { name: 'Products', icon: FiPackage, path: '/admin/products' },
  { name: 'Categories', icon: FiTag, path: '/admin/categories' },
  { name: 'Orders', icon: FiShoppingCart, path: '/admin/orders' },
  { name: 'Users', icon: FiUsers, path: '/admin/users' },
  { name: 'Banners', icon: FiImage, path: '/admin/banners' },
  { name: 'Reviews', icon: FiStar, path: '/admin/reviews' },
  { name: 'Inventory', icon: FiPackage, path: '/admin/inventory' },
  { name: 'Analytics', icon: FiBarChart2, path: '/admin/analytics' },
  { name: 'Payments', icon: FiCreditCard, path: '/admin/payments' },
  { name: 'Returns', icon: FiRotateCcw, path: '/admin/returns' },
  { name: 'Notifications', icon: FiBell, path: '/admin/notifications' },
];

export default function AdminLayout() {
  const { isDark, toggleTheme } = useTheme();
  const { adminLogout, adminUser } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const handleLogout = () => {
    setIsProfileDropdown(false);
    adminLogout();
    navigate('/admin/login');
  };

  return (
    <div className={`flex h-screen ${isDark ? 'bg-luxury-900' : 'bg-white'}`}>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`fixed md:static md:w-64 w-64 h-screen ${isDark ? 'bg-gradient-to-b from-luxury-800 to-luxury-900 border-r border-gold-600 border-opacity-30' : 'bg-white border-r border-luxury-200'} shadow-lg z-40 overflow-y-auto ${
          !isSidebarOpen ? '-translate-x-full md:translate-x-0' : ''
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gold-600 border-opacity-30">
          <div className="flex items-center gap-3">
            <div className={`text-3xl font-serif font-bold ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>A</div>
            <div>
              <h1 className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                Luxury Admin
              </h1>
              <p className={`text-xs ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>
                Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-gold-600 bg-opacity-20 border border-gold-600 border-opacity-40 text-gold-300'
                        : 'bg-gold-50 border border-gold-200 text-gold-600'
                      : isDark
                      ? 'text-luxury-300 hover:bg-luxury-700 hover:text-gold-300'
                      : 'text-luxury-700 hover:bg-luxury-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-semibold text-sm">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-gold-400"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar - Premium */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-gold-600 border-opacity-30 bg-gradient-to-r from-luxury-800 via-luxury-800 to-luxury-700 shadow-xl shadow-gold-500/5' : 'border-luxury-200 bg-gradient-to-r from-white to-luxury-50 shadow-lg'}`}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${isDark ? 'hover:bg-luxury-700' : 'hover:bg-luxury-50'}`}
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          <h2 className={`text-2xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            {navItems.find(item => item.path === location.pathname)?.name || 'Admin Panel'}
          </h2>

          {/* Right Section: Theme & Profile */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${isDark ? 'bg-gold-600 bg-opacity-20 text-gold-300 hover:bg-opacity-40' : 'bg-gold-50 text-gold-600 hover:bg-gold-100'}`}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Profile Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProfileDropdown(!isProfileDropdown)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${isDark ? 'bg-gold-600 bg-opacity-20 hover:bg-opacity-40' : 'bg-gold-50 hover:bg-gold-100'}`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-sm">
                  {adminUser?.name?.charAt(0)?.toUpperCase() || 'A'}
                </div>
                <FiChevronDown size={16} className={`transition-transform ${isProfileDropdown ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProfileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute right-0 mt-2 w-48 rounded-lg shadow-2xl z-50 ${isDark ? 'bg-luxury-800 border border-gold-600 border-opacity-40' : 'bg-white border border-luxury-200'}`}
                  >
                    <div className={`px-4 py-3 border-b ${isDark ? 'border-gold-600 border-opacity-20' : 'border-luxury-200'}`}>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                        {adminUser?.name || 'Admin User'}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>
                        {adminUser?.username || 'admin@gmail.com'}
                      </p>
                    </div>

                    <button
                      onClick={toggleTheme}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all ${isDark ? 'text-luxury-300 hover:bg-luxury-700' : 'text-luxury-700 hover:bg-luxury-50'} border-b ${isDark ? 'border-gold-600 border-opacity-20' : 'border-luxury-200'}`}
                    >
                      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>

                    <button
                      onClick={handleLogout}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all text-red-400 hover:text-red-300 ${isDark ? 'hover:bg-red-600 hover:bg-opacity-10' : 'hover:bg-red-50'}`}
                    >
                      <FiLogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </div>
  );
}
