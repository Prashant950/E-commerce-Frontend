import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminSalesAnalytics() {
  const { isDark } = useTheme();

  return (
    <AdminGenericPage title="Sales Analytics" description="View detailed sales reports and insights">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Total Revenue', value: '₹47.2L', change: '+8.2%' },
          { label: 'Monthly Sales', value: '₹12.5L', change: '+5.1%' },
          { label: 'Avg Order Value', value: '₹12,450', change: '+2.3%' },
          { label: 'Conversion Rate', value: '3.24%', change: '+0.8%' },
          { label: 'Customer Acquisition', value: '248', change: '+15%' },
          { label: 'Repeat Customers', value: '68%', change: '+4%' },
        ].map((stat, idx) => (
          <div key={idx} className={`p-4 rounded-lg border ${isDark ? 'border-luxury-700 bg-luxury-700' : 'border-luxury-200 bg-luxury-50'}`}>
            <p className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>{stat.value}</p>
            <p className={`text-xs mt-1 ${isDark ? 'text-green-300' : 'text-green-600'}`}>{stat.change}</p>
          </div>
        ))}
      </div>
    </AdminGenericPage>
  );
}
