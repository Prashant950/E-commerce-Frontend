import React, { useState, useMemo } from 'react';
import { FiFilter, FiX, FiChevronRight, FiGrid, FiList, FiSliders } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/Product/ProductCard';
import { formatPrice } from '../utils/helpers';

const allProducts = [
  {
    id: 1,
    name: 'Premium Leather Watch',
    price: 24916, // INR (299.99 USD * 83)
    originalPrice: 33167,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop',
    category: 'Accessories',
    description: 'Elegant leather watch with Swiss movement',
    rating: 5,
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: 'Silk Evening Dress',
    price: 49799, // INR
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
    isNew: true,
  },
  {
    id: 4,
    name: 'Premium Perfume',
    price: 16577, // INR
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
    price: 74617, // INR
    originalPrice: 99517,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    category: 'Jewelry',
    description: '18K Gold designer bracelet',
    rating: 5,
    discount: 25,
  },
  {
    id: 6,
    name: 'Luxury Handbag',
    price: 124417,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    category: 'Fashion',
    description: 'Premium leather designer handbag',
    rating: 5,
    isNew: true,
  },
  {
    id: 7,
    name: 'Sapphire Ring',
    price: 190817,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    category: 'Jewelry',
    description: 'Rare sapphire gemstone ring',
    rating: 5,
  },
  {
    id: 8,
    name: 'Silk Scarf',
    price: 20742, // INR
    originalPrice: 29002,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop',
    category: 'Accessories',
    description: 'Italian silk designer scarf',
    rating: 4,
    discount: 28,
  },
];

export default function ProductPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const { isDark } = useTheme();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by rating
    if (selectedRating > 0) {
      filtered = filtered.filter((p) => p.rating >= selectedRating);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return filtered;
  }, [sortBy, selectedCategories, priceRange, selectedRating]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200000]);
    setSelectedRating(0);
    setSortBy('newest');
  };

  const categories = ['Accessories', 'Fashion', 'Jewelry', 'Fragrance'];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-luxury-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative ${isDark ? 'bg-gradient-to-r from-luxury-800 to-luxury-900' : 'bg-gradient-to-r from-luxury-900 to-gold-800'} text-white py-16 overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Premium Collection</h1>
          <p className="text-xl text-gold-100 max-w-2xl">Discover exclusive luxury items handpicked for the discerning customer</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className={`border-b ${isDark ? 'border-luxury-800 bg-luxury-800' : 'border-luxury-200 bg-luxury-50'} py-3 sticky top-0 z-30`}>
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className={`${isDark ? 'text-gold-400 hover:text-gold-300' : 'text-gold-600 hover:text-gold-700'}`}>Home</Link>
            <FiChevronRight size={16} className={isDark ? 'text-luxury-600' : 'text-luxury-400'} />
            <span className={isDark ? 'text-luxury-300' : 'text-luxury-700'}>Shop</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            className={`${
              showFilters ? 'block fixed inset-0 z-40 md:relative md:z-10' : 'hidden md:block'
            } w-full md:w-72 flex-shrink-0`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Mobile Overlay */}
            {showFilters && (
              <div
                className="fixed inset-0 bg-black/50 md:hidden z-30"
                onClick={() => setShowFilters(false)}
              />
            )}

            <motion.div
              className={`p-6 rounded-xl h-full md:h-auto md:sticky md:top-32 ${isDark ? 'bg-luxury-800' : 'bg-white shadow-lg'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <FiSliders className="text-gold-400" />
                  <h3 className={`text-lg font-serif font-bold ${isDark ? 'text-white' : 'text-luxury-900'}`}>Filters</h3>
                </div>
                <button
                  onClick={() => setShowFilters(false)}
                  className={`md:hidden p-2 ${isDark ? 'hover:bg-luxury-700' : 'hover:bg-luxury-100'} rounded-lg`}
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8 pb-8 border-b" style={{borderColor: isDark ? '#374151' : '#e5e7eb'}}>
                <label className={`block text-sm font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-white' : 'text-luxury-900'}`}>Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-gold-500 h-2"
                />
                <div className={`flex justify-between text-sm mt-4 font-semibold ${isDark ? 'text-gold-400' : 'text-gold-600'}`}>
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>

              {/* Category */}
              <div className="mb-8 pb-8 border-b" style={{borderColor: isDark ? '#374151' : '#e5e7eb'}}>
                <label className={`block text-sm font-bold mb-4 uppercase tracking-wide ${isDark ? 'text-white' : 'text-luxury-900'}`}>Category</label>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <motion.label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                        className="w-4 h-4 rounded border-luxury-300 text-gold-500 cursor-pointer accent-gold-500"
                      />
                      <span className={`text-sm transition-colors ${isDark ? 'text-luxury-300 group-hover:text-gold-400' : 'text-luxury-700 group-hover:text-gold-600'}`}>
                        {cat}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 || priceRange[1] < 200000 || selectedRating > 0) && (
                <motion.button
                  onClick={clearFilters}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg transition-all font-semibold ${isDark ? 'bg-gold-500 text-luxury-900 hover:bg-gold-400' : 'bg-luxury-900 text-white hover:bg-luxury-800'}`}
                >
                  Clear All Filters
                </motion.button>
              )}
            </motion.div>
          </motion.aside>

          {/* Products Section */}
          <main className="flex-grow">
            {/* Filter Summary & Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-6 rounded-xl ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}
            >
              {/* Active Filters Tags */}
              {(selectedCategories.length > 0 || priceRange[1] < 200000 || selectedRating > 0) && (
                <div className="mb-6 pb-6 border-b" style={{borderColor: isDark ? '#374151' : '#e5e7eb'}}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>Active Filters</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((cat) => (
                      <motion.button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${isDark ? 'bg-gold-500/20 text-gold-400 hover:bg-gold-500/30' : 'bg-gold-100 text-gold-700 hover:bg-gold-200'}`}
                      >
                        {cat} <FiX size={14} />
                      </motion.button>
                    ))}
                    {selectedRating > 0 && (
                      <motion.button
                        onClick={() => setSelectedRating(0)}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 transition-all ${isDark ? 'bg-gold-500/20 text-gold-400 hover:bg-gold-500/30' : 'bg-gold-100 text-gold-700 hover:bg-gold-200'}`}
                      >
                        {selectedRating}★+ <FiX size={14} />
                      </motion.button>
                    )}
                  </div>
                </div>
              )}

              {/* Top Controls */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`md:hidden flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-luxury-700 text-white hover:bg-luxury-600' : 'bg-white text-luxury-900 hover:bg-luxury-50 border border-luxury-300'}`}
                  >
                    <FiFilter size={18} /> Filters
                  </button>
                  <p className={`font-semibold ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
                    {filteredAndSortedProducts.length} Products
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="flex-1 md:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${isDark ? 'bg-luxury-700 border-luxury-600 text-white hover:bg-luxury-600' : 'bg-white border-luxury-300 text-luxury-900 hover:bg-luxury-50'} border`}
                    >
                      <option value="newest">Newest Arrivals</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className={`hidden md:flex items-center gap-1 p-1 rounded-lg ${isDark ? 'bg-luxury-700' : 'bg-white border border-luxury-300'}`}>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-all ${viewMode === 'grid' ? isDark ? 'bg-luxury-600 text-gold-400' : 'bg-gold-100 text-gold-600' : isDark ? 'text-luxury-400 hover:text-gold-400' : 'text-luxury-600 hover:text-gold-600'}`}
                    >
                      <FiGrid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-all ${viewMode === 'list' ? isDark ? 'bg-luxury-600 text-gold-400' : 'bg-gold-100 text-gold-600' : isDark ? 'text-luxury-400 hover:text-gold-400' : 'text-luxury-600 hover:text-gold-600'}`}
                    >
                      <FiList size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid/List */}
            {filteredAndSortedProducts.length > 0 ? (
              <motion.div
                className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredAndSortedProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-center py-20 px-6 rounded-2xl ${isDark ? 'bg-luxury-800' : 'bg-luxury-50'}`}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className={`text-2xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>No Products Found</h3>
                <p className={`text-lg mb-8 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                  We couldn't find any products matching your filters. Try adjusting your search criteria.
                </p>
                <motion.button
                  onClick={clearFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
                >
                  Clear All Filters
                </motion.button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
