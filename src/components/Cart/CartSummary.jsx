import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Common/Button';


export default function CartSummary() {
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const { isDark } = useTheme();

  // Convert USD to INR (1 USD = 83 INR)
  const USD_TO_INR = 83;
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity * USD_TO_INR), 0);
  const shipping = subtotal > 8300 ? 0 : 250; // Free shipping over 100 USD equivalent
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  return (
    <div className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40' : 'bg-white shadow-lg'}`}>
      <h2 className={`text-xl md:text-2xl font-serif mb-6 md:mb-8 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Order Summary</h2>

      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        <div className={`flex justify-between text-sm md:text-base ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(0)}</span>
        </div>
        <div className={`flex justify-between text-sm md:text-base ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(0)}`}</span>
        </div>
        {shipping === 0 && (
          <p className="text-xs md:text-sm font-semibold text-green-400">✓ Free shipping on orders above ₹8,300</p>
        )}
        <div className={`flex justify-between text-sm md:text-base ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
          <span>GST (18%)</span>
          <span>₹{tax.toFixed(0)}</span>
        </div>
      </div>

      <div className={`border-t-2 pt-4 md:pt-6 mb-6 md:mb-8 ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
        <div className={`flex justify-between text-lg md:text-xl font-serif ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
          <span>Total</span>
          <span>₹{total.toFixed(0)}</span>
        </div>
      </div>

      <Button variant="primary" size="lg" className="w-full mb-3" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </Button>
      <Button variant="outline" size="lg" className="w-full" onClick={() => navigate('/collections')}>
        Continue Shopping
      </Button>
    </div>
  );
}
