import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import toast from 'react-hot-toast';

export default function AdminProductManagement() {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Leather Watch', category: 'Accessories', price: '24,916', stock: 45, status: 'Active' },
    { id: 2, name: 'Silk Evening Dress', category: 'Fashion', price: '49,799', stock: 12, status: 'Active' },
    { id: 3, name: 'Diamond Necklace', category: 'Jewelry', price: '107,917', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Premium Perfume', category: 'Fragrance', price: '16,577', stock: 34, status: 'Active' },
    { id: 5, name: 'Gold Bracelet', category: 'Jewelry', price: '74,617', stock: 8, status: 'Low Stock' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleOpenModal = (product = null) => {
    if (product) {
      setFormData(product);
      setEditingId(product.id);
    } else {
      setFormData({ name: '', category: '', price: '', stock: '' });
      setEditingId(null);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', category: '', price: '', stock: '' });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.price || formData.stock === '') {
      toast.error('Please fill all fields');
      return;
    }

    if (editingId) {
      setProducts(products.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
      toast.success('Product updated successfully!');
    } else {
      const newProduct = { ...formData, id: Math.max(...products.map(p => p.id), 0) + 1 };
      setProducts([...products, newProduct]);
      toast.success('Product added successfully!');
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
      toast.success('Product deleted successfully!');
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className={`text-3xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            Product Management
          </h1>
          <p className={`text-sm mt-1 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            Manage your product catalog ({products.length} products)
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleOpenModal()}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            isDark
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:shadow-lg hover:shadow-gold-500/30'
              : 'bg-gold-500 text-white hover:bg-gold-600'
          }`}
        >
          <FiPlus size={20} />
          Add Product
        </motion.button>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 ${
          isDark
            ? 'border-gold-600 border-opacity-40 bg-luxury-800'
            : 'border-luxury-200 bg-white'
        }`}
      >
        <FiSearch size={20} className={isDark ? 'text-luxury-400' : 'text-luxury-600'} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`flex-1 outline-none bg-transparent ${
            isDark ? 'text-white placeholder-luxury-400' : 'text-luxury-900 placeholder-luxury-500'
          }`}
        />
      </motion.div>

      {/* Products Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`rounded-2xl border-2 overflow-hidden ${
          isDark
            ? 'border-gold-600 border-opacity-40 bg-luxury-800'
            : 'border-luxury-200 bg-white shadow-lg'
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Product</th>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Category</th>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Price</th>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Stock</th>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
                <th className={`px-6 py-4 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, idx) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className={`border-t ${isDark ? 'border-luxury-700 hover:bg-luxury-700' : 'border-luxury-200 hover:bg-luxury-50'} transition-colors`}
                >
                  <td className={`px-6 py-4 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                    {product.name}
                  </td>
                  <td className={`px-6 py-4 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                    {product.category}
                  </td>
                  <td className={`px-6 py-4 font-bold ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>
                    ₹{product.price}
                  </td>
                  <td className={`px-6 py-4 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                    {product.stock}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Active'
                        ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700'
                        : product.status === 'Low Stock'
                        ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                        : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleOpenModal(product)}
                        className={`p-2 rounded-lg transition-all ${isDark ? 'hover:bg-luxury-600 text-blue-400' : 'hover:bg-blue-50 text-blue-600'}`}
                      >
                        <FiEdit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className={`p-2 rounded-lg transition-all ${isDark ? 'hover:bg-luxury-600 text-red-400' : 'hover:bg-red-50 text-red-600'}`}
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-md rounded-2xl shadow-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40'
                  : 'bg-white border-2 border-gold-300'
              }`}
            >
              {/* Modal Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? 'border-gold-600 border-opacity-40' : 'border-gold-200'}`}>
                <h2 className={`text-xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
                  {editingId ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className={`p-2 rounded-lg transition-all ${isDark ? 'hover:bg-luxury-700 text-luxury-300' : 'hover:bg-luxury-50 text-luxury-600'}`}
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className={`text-sm font-semibold ${isDark ? 'text-luxury-300' : 'text-luxury-900'}`}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter product name"
                    className={`w-full mt-2 px-4 py-2 rounded-lg border-2 outline-none transition-all ${
                      isDark
                        ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400'
                        : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-sm font-semibold ${isDark ? 'text-luxury-300' : 'text-luxury-900'}`}>
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`w-full mt-2 px-4 py-2 rounded-lg border-2 outline-none transition-all ${
                      isDark
                        ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white focus:border-gold-400'
                        : 'bg-luxury-50 border-luxury-200 text-luxury-900 focus:border-gold-500'
                    }`}
                  >
                    <option value="">Select Category</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Fragrance">Fragrance</option>
                  </select>
                </div>

                <div>
                  <label className={`text-sm font-semibold ${isDark ? 'text-luxury-300' : 'text-luxury-900'}`}>
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="Enter price"
                    className={`w-full mt-2 px-4 py-2 rounded-lg border-2 outline-none transition-all ${
                      isDark
                        ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400'
                        : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`text-sm font-semibold ${isDark ? 'text-luxury-300' : 'text-luxury-900'}`}>
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="Enter stock quantity"
                    className={`w-full mt-2 px-4 py-2 rounded-lg border-2 outline-none transition-all ${
                      isDark
                        ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400'
                        : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'
                    }`}
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                      isDark
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:shadow-lg hover:shadow-gold-500/30'
                        : 'bg-gold-500 text-white hover:bg-gold-600'
                    }`}
                  >
                    {editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                      isDark
                        ? 'bg-luxury-700 text-luxury-300 hover:bg-luxury-600'
                        : 'bg-luxury-100 text-luxury-700 hover:bg-luxury-200'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
}
