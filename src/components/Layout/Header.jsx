import React, { useState } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch, FiMoon, FiSun } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItems = useCartStore((state) => state.items);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className={`${isDark ? 'bg-luxury-900 border-luxury-800' : 'bg-white border-luxury-200'} border-b shadow-lg sticky top-0 z-50 transition-colors duration-300`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`text-3xl font-serif font-bold ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>Ⅼ</div>
            <span className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-luxury-900'}`}>Luxury</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 ${isDark ? 'text-luxury-100' : 'text-luxury-900'}`}>
            <Link to="/" className={`font-medium hover:text-gold-500 transition ${isDark ? 'hover:text-gold-400' : ''}`}>Home</Link>
            <Link to="/collections" className={`font-medium hover:text-gold-500 transition ${isDark ? 'hover:text-gold-400' : ''}`}>Collections</Link>
            <Link to="/about" className={`font-medium hover:text-gold-500 transition ${isDark ? 'hover:text-gold-400' : ''}`}>About</Link>
            <Link to="/contact" className={`font-medium hover:text-gold-500 transition ${isDark ? 'hover:text-gold-400' : ''}`}>Contact</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <form onSubmit={handleSearch} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`bg-transparent outline-none w-32 text-sm ${isDark ? 'text-white placeholder-luxury-400' : 'text-luxury-900 placeholder-luxury-500'}`}
                />
                <button type="submit" className={`${isDark ? 'text-gold-400 hover:text-gold-300' : 'text-gold-600 hover:text-gold-700'} transition`}>
                  <FiSearch size={18} />
                </button>
              </form>
            </div>

            {/* Search Button - Mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`lg:hidden ${isDark ? 'text-gold-400 hover:text-gold-300' : 'text-gold-600 hover:text-gold-700'}`}
            >
              <FiSearch size={24} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${isDark ? 'bg-luxury-800 text-gold-400 hover:bg-luxury-700' : 'bg-luxury-50 text-gold-600 hover:bg-luxury-100'}`}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* User Account */}
            <Link to="/account" className={`${isDark ? 'text-luxury-100 hover:text-gold-400' : 'text-luxury-900 hover:text-gold-600'}`}>
              <FiUser size={24} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className={`relative ${isDark ? 'text-luxury-100 hover:text-gold-400' : 'text-luxury-900 hover:text-gold-600'}`}>
              <FiShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${isDark ? 'text-luxury-100' : 'text-luxury-900'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Search */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className={`pb-4 px-4 ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}>
            <div className={`flex items-center gap-2 px-4 py-3 rounded-lg ${isDark ? 'bg-luxury-900' : 'bg-white'} border ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 outline-none bg-transparent ${isDark ? 'text-white placeholder-luxury-400' : 'text-luxury-900 placeholder-luxury-500'}`}
              />
              <button type="submit" className={`${isDark ? 'text-gold-400' : 'text-gold-600'}`}>
                <FiSearch size={20} />
              </button>
            </div>
          </form>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 border-t ${isDark ? 'border-luxury-800' : 'border-luxury-200'}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-4 font-medium border-b ${isDark ? 'text-luxury-100 hover:bg-luxury-800 border-luxury-800' : 'text-luxury-900 hover:bg-luxury-50 border-luxury-200'}`}>Home</Link>
            <Link to="/collections" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-4 font-medium border-b ${isDark ? 'text-luxury-100 hover:bg-luxury-800 border-luxury-800' : 'text-luxury-900 hover:bg-luxury-50 border-luxury-200'}`}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-4 font-medium border-b ${isDark ? 'text-luxury-100 hover:bg-luxury-800 border-luxury-800' : 'text-luxury-900 hover:bg-luxury-50 border-luxury-200'}`}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block py-4 px-4 font-medium ${isDark ? 'text-luxury-100 hover:bg-luxury-800' : 'text-luxury-900 hover:bg-luxury-50'}`}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
