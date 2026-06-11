import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminOrderManagement() {
  const { isDark } = useTheme();
  
  const orders = [
    { id: 'ORD001', customer: 'Rahul Kumar', amount: '24,916', status: 'Delivered', date: '2026-06-10' },
    { id: 'ORD002', customer: 'Priya Singh', amount: '49,799', status: 'Pending', date: '2026-06-11' },
    { id: 'ORD003', customer: 'Vikram Patel', amount: '107,917', status: 'Processing', date: '2026-06-11' },
    { id: 'ORD004', customer: 'Anjali Mehta', amount: '74,617', status: 'Delivered', date: '2026-06-09' },
  ];

  return (
    <AdminGenericPage title="Order Management" description="Manage and track all customer orders">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Order ID</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Customer</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Amount</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                <td className={`px-4 py-3 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{order.id}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{order.customer}</td>
                <td className={`px-4 py-3 font-bold ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>₹{order.amount}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${order.status === 'Delivered' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : order.status === 'Pending' ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700' : isDark ? 'bg-blue-600 bg-opacity-20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    {order.status}
                  </span>
                </td>
                <td className={`px-4 py-3 text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminGenericPage>
  );
}
