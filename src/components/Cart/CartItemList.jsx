import React from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import { useCartStore } from '../../store/cartStore';
import { useTheme } from '../../context/ThemeContext';
import { formatPrice } from '../../utils/helpers';

export default function CartItemList() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const { isDark } = useTheme();

  if (items.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <p className={`text-base md:text-lg ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {items.map((item) => (
        <div key={item.id} className={`flex flex-col sm:flex-row gap-3 md:gap-4 pb-4 md:pb-6 border-b ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 object-cover rounded-lg"
          />

          {/* Product Details */}
          <div className="flex-grow">
            <h3 className={`font-serif text-base md:text-lg ${isDark ? 'text-white' : 'text-luxury-900'}`}>{item.name}</h3>
            <p className={`font-semibold text-sm md:text-base ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>{formatPrice(item.price)}</p>
            <p className={`text-xs md:text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>
              {item.selectedSize && `Size: ${item.selectedSize}`}
              {item.selectedColor && ` | Color: ${item.selectedColor}`}
            </p>
          </div>

          {/* Controls Container - Responsive Layout */}
          <div className="flex gap-3 md:gap-4 items-center sm:flex-col">
            {/* Quantity Controls */}
            <div className={`flex items-center border rounded-lg h-fit ${isDark ? 'border-luxury-700 bg-luxury-800' : 'border-luxury-300 bg-luxury-50'}`}>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className={`p-1 md:p-2 ${isDark ? 'hover:bg-luxury-700' : 'hover:bg-luxury-100'}`}
              >
                <FiMinus size={14} className="md:w-4 md:h-4" />
              </button>
              <span className={`px-2 md:px-3 font-semibold text-sm md:text-base ${isDark ? 'text-white' : 'text-luxury-900'}`}>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className={`p-1 md:p-2 ${isDark ? 'hover:bg-luxury-700' : 'hover:bg-luxury-100'}`}
              >
                <FiPlus size={14} className="md:w-4 md:h-4" />
              </button>
            </div>

            {/* Total Price */}
            <div className="text-right sm:text-center whitespace-nowrap">
              <p className={`font-serif text-base md:text-lg ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(item.id)}
              className={isDark ? 'text-luxury-400 hover:text-red-400 transition flex-shrink-0' : 'text-luxury-500 hover:text-red-600 transition flex-shrink-0'}
            >
              <FiX size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
