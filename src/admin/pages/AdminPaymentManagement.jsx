import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminPaymentManagement() {
  const { isDark } = useTheme();
  
  const payments = [
    { id: 1, method: 'Credit Card', orders: 1245, revenue: '₹31.2L', status: 'Active' },
    { id: 2, method: 'UPI', orders: 892, revenue: '₹22.4L', status: 'Active' },
    { id: 3, method: 'Net Banking', orders: 456, revenue: '₹11.4L', status: 'Active' },
    { id: 4, method: 'Debit Card', orders: 299, revenue: '₹7.5L', status: 'Active' },
  ];

  return (
    <AdminGenericPage title="Payment Management" description="Manage payment methods and transactions">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Payment Method</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Orders</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Revenue</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                <td className={`px-4 py-3 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{payment.method}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{payment.orders}</td>
                <td className={`px-4 py-3 font-bold ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>{payment.revenue}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    {payment.status}
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
