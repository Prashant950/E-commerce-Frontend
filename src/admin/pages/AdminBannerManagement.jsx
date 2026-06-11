import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminBannerManagement() {
  const { isDark } = useTheme();
  
  const banners = [
    { id: 1, title: 'Summer Collection', status: 'Active', visibility: 'All Pages' },
    { id: 2, title: 'New Arrivals', status: 'Active', visibility: 'Homepage' },
    { id: 3, title: 'Discount Sale', status: 'Inactive', visibility: 'All Pages' },
  ];

  return (
    <AdminGenericPage title="Banner Management" description="Manage promotional banners and campaigns">
      <div className="space-y-4">
        {banners.map((banner) => (
          <div key={banner.id} className={`flex items-center justify-between p-4 rounded-lg border ${isDark ? 'border-luxury-700 hover:border-gold-600' : 'border-luxury-200 hover:border-gold-300'} transition-all`}>
            <div>
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{banner.title}</p>
              <p className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{banner.visibility}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${banner.status === 'Active' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'}`}>
              {banner.status}
            </span>
          </div>
        ))}
      </div>
    </AdminGenericPage>
  );
}
