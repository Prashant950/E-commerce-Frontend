import React from 'react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import { useTheme } from '../context/ThemeContext';

export default function CartPage() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'bg-gradient-to-b from-luxury-950 via-luxury-900 to-luxury-950 min-h-screen' : 'bg-white'}`}>
      <div className="container-custom py-8 md:py-12">
        <h1 className={`text-3xl md:text-4xl font-serif mb-8 md:mb-12 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {/* Cart Items */}
          <div className="md:col-span-1 lg:col-span-2" >
            <CartItemList />
          </div>

          {/* Cart Summary */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
