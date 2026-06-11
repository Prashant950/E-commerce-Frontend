import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminNotifications() {
  const { isDark } = useTheme();
  
  const notifications = [
    { id: 1, message: 'New order received from Rahul Kumar', type: 'Order', date: '2026-06-11 10:30 AM' },
    { id: 2, message: 'Product "Diamond Necklace" is out of stock', type: 'Inventory', date: '2026-06-11 09:15 AM' },
    { id: 3, message: 'Return request from Priya Singh needs approval', type: 'Return', date: '2026-06-11 08:45 AM' },
    { id: 4, message: 'Low stock alert for "Silk Evening Dress"', type: 'Inventory', date: '2026-06-11 07:20 AM' },
  ];

  return (
    <AdminGenericPage title="Notifications" description="System notifications and alerts">
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-4 rounded-lg border-l-4 ${
            notif.type === 'Order'
              ? isDark ? 'border-l-blue-600 bg-blue-600 bg-opacity-10' : 'border-l-blue-600 bg-blue-50'
              : notif.type === 'Inventory'
              ? isDark ? 'border-l-yellow-600 bg-yellow-600 bg-opacity-10' : 'border-l-yellow-600 bg-yellow-50'
              : isDark ? 'border-l-red-600 bg-red-600 bg-opacity-10' : 'border-l-red-600 bg-red-50'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{notif.message}</p>
                <p className={`text-xs mt-1 ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{notif.date}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                notif.type === 'Order'
                  ? isDark ? 'bg-blue-600 bg-opacity-20 text-blue-300' : 'bg-blue-100 text-blue-700'
                  : notif.type === 'Inventory'
                  ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                  : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'
              }`}>
                {notif.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </AdminGenericPage>
  );
}
