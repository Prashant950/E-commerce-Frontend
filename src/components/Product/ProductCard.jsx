import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Common/Button';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/helpers';

export default function ProductCard({ product }) {
  const { isDark } = useTheme();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, 1, null, null);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className={`card h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group ${isDark ? 'bg-luxury-800' : 'bg-white'}`}>
        {/* Image Container */}
        <div className={`relative aspect-square overflow-hidden ${isDark ? 'bg-luxury-700' : 'bg-luxury-100'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
              New
            </span>
          )}
          {product.discount && (
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
              -{product.discount}%
            </span>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
            <Button 
              size="sm" 
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              className="w-full"
            >
              <FiShoppingCart className="inline mr-2" />
              Add to Cart
            </Button>
            <button className="text-white hover:text-gold-400 ml-2">
              <FiHeart size={24} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>{product.category}</p>
          <h3 className={`text-lg font-serif mb-2 line-clamp-2 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
            {product.name}
          </h3>
          <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-serif ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className={`text-sm line-through ${isDark ? 'text-luxury-500' : 'text-luxury-500'}`}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? 'text-gold-500' : isDark ? 'text-luxury-600' : 'text-luxury-300'}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
