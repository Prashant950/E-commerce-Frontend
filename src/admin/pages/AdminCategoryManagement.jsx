import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminCategoryManagement() {
  const { isDark } = useTheme();
  
  const categories = [
    { id: 1, name: 'Jewelry', products: 24, status: 'Active' },
    { id: 2, name: 'Fashion', products: 18, status: 'Active' },
    { id: 3, name: 'Accessories', products: 32, status: 'Active' },
    { id: 4, name: 'Fragrance', products: 16, status: 'Active' },
  ];

  return (
    <AdminGenericPage title="Category Management" description="Manage product categories and their settings">
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.id} className={`flex items-center justify-between p-4 rounded-lg border ${isDark ? 'border-luxury-700 hover:border-gold-600' : 'border-luxury-200 hover:border-gold-300'} transition-all`}>
            <div>
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{cat.name}</p>
              <p className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{cat.products} products</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700'}`}>
              {cat.status}
            </span>
          </div>
        ))}
      </div>
    </AdminGenericPage>
  );
}
