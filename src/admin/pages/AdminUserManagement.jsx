import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminUserManagement() {
  const { isDark } = useTheme();
  
  const users = [
    { id: 1, name: 'Rahul Kumar', email: 'rahul@example.com', orders: 5, status: 'Active' },
    { id: 2, name: 'Priya Singh', email: 'priya@example.com', orders: 3, status: 'Active' },
    { id: 3, name: 'Vikram Patel', email: 'vikram@example.com', orders: 8, status: 'Active' },
    { id: 4, name: 'Anjali Mehta', email: 'anjali@example.com', orders: 2, status: 'Inactive' },
  ];

  return (
    <AdminGenericPage title="User Management" description="Manage customer accounts and permissions">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={isDark ? 'bg-luxury-700' : 'bg-luxury-50'}>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Name</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Email</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Orders</th>
              <th className={`px-4 py-3 text-left font-semibold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'}`}>
                <td className={`px-4 py-3 font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{user.name}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{user.email}</td>
                <td className={`px-4 py-3 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>{user.orders}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${user.status === 'Active' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : isDark ? 'bg-red-600 bg-opacity-20 text-red-300' : 'bg-red-100 text-red-700'}`}>
                    {user.status}
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
