import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminReturnManagement() {
  const { isDark } = useTheme();
  
  const returns = [
    { id: 'RET001', product: 'Premium Leather Watch', customer: 'Rahul Kumar', reason: 'Size mismatch', status: 'Approved', amount: '24,916' },
    { id: 'RET002', product: 'Silk Evening Dress', customer: 'Priya Singh', reason: 'Quality issue', status: 'Pending', amount: '49,799' },
    { id: 'RET003', product: 'Gold Bracelet', customer: 'Vikram Patel', reason: 'Changed mind', status: 'Rejected', amount: '74,617' },
  ];

  return (
    <AdminGenericPage title="Return & Refund Management" description="Manage product returns and refunds">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Return ID</th>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Product</th>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Customer</th>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Reason</th>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
              <th className={`px-3 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((ret) => (
              <tr key={ret.id} className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                <td className={`px-3 py-3 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{ret.id}</td>
                <td className={`px-3 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{ret.product}</td>
                <td className={`px-3 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{ret.customer}</td>
                <td className={`px-3 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{ret.reason}</td>
                <td className="px-3 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${ret.status === 'Approved' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : ret.status === 'Pending' ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700' : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'}`}>
                    {ret.status}
                  </span>
                </td>
                <td className={`px-3 py-3 font-bold ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>₹{ret.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminGenericPage>
  );
}
