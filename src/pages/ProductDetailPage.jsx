import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiStar, FiTruck, FiRotateCcw, FiShield } from 'react-icons/fi';
import ProductDetail from '../components/Product/ProductDetail';
import ProductCard from '../components/Product/ProductCard';
import { useTheme } from '../context/ThemeContext';

const mockProducts = {
  1: {
    id: 1,
    name: 'Premium Leather Watch',
    price: 24916,
    originalPrice: 33167,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=200&fit=crop',
    ],
    category: 'Accessories',
    description: 'Elegant leather watch with Swiss movement',
    fullDescription: 'This premium leather watch combines Swiss precision with Italian craftsmanship. Featuring a mechanical movement and water-resistant design, it\'s the perfect accessory for any occasion.',
    rating: 5,
    reviews: 128,
    sizes: ['S', 'M', 'L'],
    colors: ['#000000', '#8B4513', '#FFD700'],
    specifications: {
      'Movement': 'Automatic Swiss',
      'Case Material': 'Stainless Steel',
      'Band': 'Genuine Italian Leather',
      'Water Resistance': '50m (5 ATM)',
      'Diameter': '42mm',
      'Height': '11mm',
      'Weight': '85g',
    },
    customerReviews: [
      { name: 'Rahul Kumar', rating: 5, text: 'Excellent quality! The watch is absolutely stunning and arrived on time.' },
      { name: 'Priya Singh', rating: 5, text: 'Worth every rupee. Feels premium and looks even better in person.' },
      { name: 'Vikram Patel', rating: 4, text: 'Great watch, but the leather needed some breaking in.' },
    ],
  },
};

const relatedProducts = [
  {
    id: 2,
    name: 'Silk Evening Dress',
    price: 49799,
    originalPrice: 66399,
    image: 'https://images.unsplash.com/photo-1595777707802-9b80f0afd1c1?w=500&h=500&fit=crop',
    category: 'Fashion',
    description: 'Luxurious silk evening dress',
    rating: 5,
    discount: 25,
  },
  {
    id: 3,
    name: 'Diamond Necklace',
    price: 107917,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60bb8?w=500&h=500&fit=crop',
    category: 'Jewelry',
    description: 'Exquisite diamond necklace',
    rating: 5,
  },
  {
    id: 4,
    name: 'Premium Perfume',
    price: 16577,
    originalPrice: 20709,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
    category: 'Fragrance',
    description: 'Luxury fragrance collection',
    rating: 4,
    discount: 20,
  },
  {
    id: 5,
    name: 'Gold Bracelet',
    price: 74617,
    originalPrice: 99517,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    category: 'Jewelry',
    description: '18K Gold designer bracelet',
    rating: 5,
    discount: 25,
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = mockProducts[id] || mockProducts[1];
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className={`${isDark ? 'bg-luxury-900' : 'bg-white'} min-h-screen`}>
      {/* Breadcrumb */}
      <div className={`border-b ${isDark ? 'border-luxury-800 bg-luxury-800' : 'border-luxury-200 bg-luxury-50'} py-4 sticky top-0 z-40`}>
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className={`${isDark ? 'text-gold-400 hover:text-gold-300' : 'text-gold-600 hover:text-gold-700'}`}>Home</Link>
            <FiChevronRight size={16} className={isDark ? 'text-luxury-600' : 'text-luxury-400'} />
            <Link to="/shop" className={`${isDark ? 'text-gold-400 hover:text-gold-300' : 'text-gold-600 hover:text-gold-700'}`}>Shop</Link>
            <FiChevronRight size={16} className={isDark ? 'text-luxury-600' : 'text-luxury-400'} />
            <span className={isDark ? 'text-luxury-300' : 'text-luxury-700'}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className={`py-12 border-b ${isDark ? 'border-luxury-800' : 'border-luxury-200'}`}>
        <div className="container-custom">
          <ProductDetail product={product} />
        </div>
      </div>

      {/* Details & Reviews Tabs */}
      <div className="container-custom py-12">
        <div className="flex gap-0 border-b mb-8" role="tablist">
          {['description', 'specifications', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
              className={`px-6 py-4 font-semibold border-b-2 transition-colors uppercase text-sm ${
                activeTab === tab
                  ? isDark
                    ? 'border-gold-400 text-gold-400'
                    : 'border-gold-600 text-gold-600'
                  : isDark
                  ? 'border-transparent text-luxury-400 hover:text-luxury-200'
                  : 'border-transparent text-luxury-600 hover:text-luxury-900'
              }`}
            >
              {tab === 'description' && 'Description'}
              {tab === 'specifications' && 'Specifications'}
              {tab === 'reviews' && 'Reviews'}
            </button>
          ))}
        </div>

        {/* Description Tab */}
        {activeTab === 'description' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-serif mb-4 ${isDark ? 'text-white' : 'text-luxury-900'}`}>About This Product</h3>
                <p className={`leading-relaxed text-lg ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>{product.fullDescription}</p>
              </div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}>
                <h4 className={`font-serif text-lg mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>Why Choose This Product?</h4>
                <ul className="space-y-2">
                  <li className={`flex items-start gap-3 ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>
                    <FiStar className="text-gold-400 flex-shrink-0 mt-1" />
                    <span>Premium quality materials and craftsmanship</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>
                    <FiTruck className="text-gold-400 flex-shrink-0 mt-1" />
                    <span>Free shipping on orders over ₹8,300</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>
                    <FiRotateCcw className="text-gold-400 flex-shrink-0 mt-1" />
                    <span>30-day money-back guarantee</span>
                  </li>
                  <li className={`flex items-start gap-3 ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>
                    <FiShield className="text-gold-400 flex-shrink-0 mt-1" />
                    <span>Secure SSL encrypted checkout</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Specifications Tab */}
        {activeTab === 'specifications' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
            <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}>
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <tr key={idx} className={`border-b ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                      <td className={`px-6 py-4 font-semibold w-1/3 ${isDark ? 'text-white bg-luxury-700' : 'text-luxury-900 bg-luxury-100'}`}>{key}</td>
                      <td className={`px-6 py-4 ${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
            <div className="space-y-6">
              <div>
                <h3 className={`text-2xl font-serif mb-2 ${isDark ? 'text-white' : 'text-luxury-900'}`}>Customer Reviews</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-gold-400 fill-gold-400" size={20} />
                    ))}
                  </div>
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>4.9 out of 5</span>
                  <span className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>(Based on {product.reviews} reviews)</span>
                </div>
              </div>

              {product.customerReviews && product.customerReviews.map((review, idx) => (
                <div key={idx} className={`p-6 rounded-lg border ${isDark ? 'border-luxury-700 bg-luxury-800' : 'border-luxury-200 bg-luxury-50'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{review.name}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FiStar key={i} className="text-gold-400 fill-gold-400" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-luxury-300' : 'text-luxury-800'}`}>{review.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Related Products */}
      <div className={`py-20 ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-serif mb-2 ${isDark ? 'text-white' : 'text-luxury-900'}`}>Related Products</h2>
            <p className={`text-lg ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>You might also like these premium items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct, idx) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
