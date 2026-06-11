import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminInventoryManagement() {
  const { isDark } = useTheme();
  
  const inventory = [
    { id: 1, product: 'Premium Leather Watch', stock: 45, reorderLevel: 20, status: 'Adequate' },
    { id: 2, product: 'Silk Evening Dress', stock: 12, reorderLevel: 15, status: 'Low' },
    { id: 3, product: 'Diamond Necklace', stock: 0, reorderLevel: 5, status: 'Out of Stock' },
    { id: 4, product: 'Gold Bracelet', stock: 8, reorderLevel: 10, status: 'Low' },
  ];

  return (
    <AdminGenericPage title="Inventory Management" description="Track and manage product stock levels">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Product</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Current Stock</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Reorder Level</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                <td className={`px-4 py-3 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{item.product}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{item.stock}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{item.reorderLevel}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === 'Adequate' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : item.status === 'Low' ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700' : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminGenericPage>
  );
}
