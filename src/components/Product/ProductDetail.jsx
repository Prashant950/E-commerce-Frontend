import React, { useState } from 'react';
import { FiMinus, FiPlus, FiHeart } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Common/Button';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/helpers';

export default function ProductDetail({ product }) {
  const { isDark } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (product.colors && !selectedColor) {
      toast.error('Please select a color');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    toast.success(`${quantity} item(s) added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Image Gallery */}
      <div>
        <div className={`aspect-square rounded-lg overflow-hidden mb-4 ${isDark ? 'bg-luxury-700' : 'bg-luxury-100'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.gallery && product.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <p className={`font-semibold mb-2 text-sm uppercase tracking-wider ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>{product.category}</p>
        <h1 className={`text-4xl font-serif mb-4 ${isDark ? 'text-white' : 'text-luxury-900'}`}>{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xl ${i < product.rating ? 'text-gold-500' : isDark ? 'text-luxury-600' : 'text-luxury-300'}`}>
                ★
              </span>
            ))}
          </div>
          <p className={isDark ? 'text-luxury-400' : 'text-luxury-700'}>({product.reviews || 128} reviews)</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <span className={`text-4xl font-serif ${isDark ? 'text-white' : 'text-luxury-900'}`}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={`text-lg line-through ${isDark ? 'text-luxury-500' : 'text-luxury-500'}`}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`mb-8 leading-relaxed text-base ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>{product.fullDescription}</p>

        {/* Size Selection */}
        {product.sizes && (
          <div className="mb-8">
            <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>Size</label>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                    selectedSize === size
                      ? isDark ? 'border-gold-400 bg-gold-900 text-gold-400' : 'border-gold-600 bg-gold-50 text-gold-700'
                      : isDark ? 'border-luxury-700 text-white hover:border-gold-400' : 'border-luxury-400 text-luxury-900 hover:border-gold-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && (
          <div className="mb-8">
            <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>Color</label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? isDark ? 'border-gold-400 scale-110' : 'border-luxury-900 scale-110'
                      : isDark ? 'border-luxury-600' : 'border-luxury-400'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="flex items-center gap-4 mb-8">
          <label className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>Quantity</label>
          <div className={`flex items-center border-2 rounded-lg ${isDark ? 'border-luxury-700 bg-luxury-800' : 'border-luxury-400 bg-white'}`}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className={`p-2 ${isDark ? 'hover:bg-luxury-700 text-white' : 'hover:bg-luxury-100 text-luxury-900'}`}
            >
              <FiMinus />
            </button>
            <span className={`px-4 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className={`p-2 ${isDark ? 'hover:bg-luxury-700 text-white' : 'hover:bg-luxury-100 text-luxury-900'}`}
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <Button variant="primary" size="lg" className="flex-1" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <button className={`px-8 py-4 border-2 rounded-lg transition-all ${isDark ? 'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-luxury-900' : 'border-luxury-900 text-luxury-900 hover:bg-luxury-900 hover:text-white'}`}>
            <FiHeart size={24} />
          </button>
        </div>

        {/* Additional Info */}
        <div className={`border-t pt-6 space-y-3 text-sm ${isDark ? 'border-luxury-700 text-luxury-300' : 'border-luxury-300 text-luxury-800'}`}>
          <p>✓ Free shipping on orders over ₹8,300</p>
          <p>✓ 30-day money-back guarantee</p>
          <p>✓ Secure checkout with SSL encryption</p>
          <p>✓ Luxury packaging included</p>
        </div>
      </div>
    </div>
  );
}
