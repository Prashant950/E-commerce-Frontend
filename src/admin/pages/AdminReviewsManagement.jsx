import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import AdminGenericPage from '../components/AdminGenericPage';

export default function AdminReviewsManagement() {
  const { isDark } = useTheme();
  
  const reviews = [
    { id: 1, product: 'Premium Leather Watch', customer: 'Rahul Kumar', rating: 5, status: 'Approved' },
    { id: 2, product: 'Silk Evening Dress', customer: 'Priya Singh', rating: 4, status: 'Pending' },
    { id: 3, product: 'Diamond Necklace', customer: 'Vikram Patel', rating: 5, status: 'Approved' },
  ];

  return (
    <AdminGenericPage title="Reviews Management" description="Manage customer reviews and ratings">
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className={`p-4 rounded-lg border ${isDark ? 'border-luxury-700 hover:border-gold-600' : 'border-luxury-200 hover:border-gold-300'} transition-all`}>
            <div className="flex items-start justify-between">
              <div>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>{review.product}</p>
                <p className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>by {review.customer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${review.status === 'Approved' ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700' : isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'}`}>
                  {review.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminGenericPage>
  );
}
