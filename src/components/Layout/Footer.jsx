import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiCreditCard } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-luxury-900 text-white' : 'bg-gradient-to-b from-luxury-900 to-luxury-950 text-white'} mt-0`}>
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">ⅼ</div>
              <span className="text-lg md:text-2xl font-serif font-bold">Luxury</span>
            </div>
            <p className="text-xs md:text-sm text-luxury-300 mb-4 md:mb-6">Premium luxury products for the discerning Indian customer.</p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-800 hover:bg-gold-500 flex items-center justify-center transition transform hover:scale-110">
                <FiFacebook size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-800 hover:bg-gold-500 flex items-center justify-center transition transform hover:scale-110">
                <FiInstagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-800 hover:bg-gold-500 flex items-center justify-center transition transform hover:scale-110">
                <FiTwitter size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-luxury-800 hover:bg-gold-500 flex items-center justify-center transition transform hover:scale-110">
                <FiLinkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm md:text-lg mb-4 text-gold-400 font-bold">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Home</Link></li>
              <li><Link to="/collections" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Shop</Link></li>
              <li><Link to="/about" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">About</Link></li>
              <li><Link to="/contact" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm md:text-lg mb-4 text-gold-400 font-bold">Categories</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/collections" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">All Products</Link></li>
              <li><Link to="/collections" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">New Arrivals</Link></li>
              <li><Link to="/collections" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Best Sellers</Link></li>
              <li><Link to="/collections" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Offers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-sm md:text-lg mb-4 text-gold-400 font-bold">Support</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Shipping Info</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Track Order</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-sm md:text-lg mb-4 text-gold-400 font-bold">Policies</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Terms</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Cookie Policy</a></li>
              <li><a href="#" className="text-xs md:text-sm text-luxury-300 hover:text-gold-400 transition">Secure Shopping</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`border-b ${isDark ? 'border-luxury-700' : 'border-luxury-700'} pb-0 mb-0`}>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 md:gap-0">
          <p className="text-luxury-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Luxury E-commerce. All rights reserved. Lucknow, India.
          </p>
          <div className="flex gap-4 md:gap-6 items-center flex-wrap justify-center">
            <div className="flex gap-2 text-center md:text-left">
              <span className="text-xs text-luxury-400">Payments:</span>
              <div className="flex gap-2">
                <FiCreditCard size={14} className="md:w-[16px] md:h-[16px] text-gold-400" />
                <span className="text-xs text-luxury-400">Cards | UPI | Net Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
