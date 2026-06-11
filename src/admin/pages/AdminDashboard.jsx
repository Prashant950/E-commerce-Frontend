import React from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiTrendingUp,
  FiAlertCircle,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const StatCard = ({ icon: Icon, title, value, subtitle, color, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className={`p-6 rounded-2xl transition-all ${
      isDark
        ? `bg-gradient-to-br ${color} opacity-10 border-2 border-gold-600 border-opacity-40 hover:border-opacity-70 hover:shadow-lg hover:shadow-gold-500/10`
        : `bg-white border-2 border-${color}-200 shadow-lg hover:shadow-xl`
    }`}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
          {title}
        </p>
        <p className={`text-3xl md:text-4xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
          {value}
        </p>
        {subtitle && (
          <p className={`text-xs mt-2 ${isDark ? 'text-luxury-400' : 'text-luxury-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${isDark ? color + ' opacity-30' : 'bg-gold-50'}`}>
        <Icon size={28} className={isDark ? 'text-gold-300' : 'text-gold-600'} />
      </div>
    </div>
  </motion.div>
);

const RecentOrderItem = ({ order, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex items-center justify-between p-4 rounded-lg border ${
      isDark ? 'border-luxury-700 bg-luxury-800 bg-opacity-50' : 'border-luxury-200 bg-luxury-50'
    }`}
  >
    <div className="flex items-center gap-4 flex-1">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
        order.status === 'Delivered' ? 'bg-green-600' : order.status === 'Pending' ? 'bg-yellow-600' : 'bg-blue-600'
      }`}>
        {order.id.substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-1">
        <p className={`font-semibold ${isDark ? 'text-white' : 'text-luxury-900'}`}>
          {order.product}
        </p>
        <p className={`text-xs ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>
          Order #{order.id}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-bold ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>
        ₹{order.amount}
      </p>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
        order.status === 'Delivered'
          ? isDark ? 'bg-green-600 bg-opacity-20 text-green-300' : 'bg-green-100 text-green-700'
          : order.status === 'Pending'
          ? isDark ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
          : isDark ? 'bg-blue-600 bg-opacity-20 text-blue-300' : 'bg-blue-100 text-blue-700'
      }`}>
        {order.status}
      </span>
    </div>
  </motion.div>
);

export default function AdminDashboard() {
  const { isDark } = useTheme();

  const stats = [
    { icon: FiUsers, title: 'Total Users', value: '1,248', subtitle: '+12% from last month', color: 'from-blue-500 to-blue-600' },
    { icon: FiPackage, title: 'Total Products', value: '542', subtitle: 'In stock', color: 'from-purple-500 to-purple-600' },
    { icon: FiShoppingCart, title: 'Total Orders', value: '3,892', subtitle: 'This year', color: 'from-pink-500 to-pink-600' },
    { icon: FiTrendingUp, title: 'Total Revenue', value: '₹47.2L', subtitle: '+8.2% growth', color: 'from-green-500 to-green-600' },
  ];

  const orderMetrics = [
    { icon: FiClock, title: 'Pending Orders', value: '24', color: 'bg-yellow-600' },
    { icon: FiCheckCircle, title: 'Delivered Orders', value: '3,568', color: 'bg-green-600' },
    { icon: FiAlertCircle, title: 'Out of Stock', value: '18', color: 'bg-red-600' },
  ];

  const recentOrders = [
    { id: 'ORD001', product: 'Premium Leather Watch', amount: '24,916', status: 'Delivered' },
    { id: 'ORD002', product: 'Silk Evening Dress', amount: '49,799', status: 'Pending' },
    { id: 'ORD003', product: 'Diamond Necklace', amount: '107,917', status: 'Processing' },
    { id: 'ORD004', product: 'Gold Bracelet', amount: '74,617', status: 'Delivered' },
    { id: 'ORD005', product: 'Premium Perfume', amount: '16,577', status: 'Pending' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-gold-500 to-gold-600 bg-opacity-10 border-2 border-gold-600 border-opacity-40' : 'bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-200'}`}
      >
        <h1 className={`text-3xl font-serif font-bold mb-2 ${isDark ? 'text-gold-300' : 'text-gold-700'}`}>
          Welcome back, Admin! 👋
        </h1>
        <p className={`${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
          Here's what's happening with your store today.
        </p>
      </motion.div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div key={idx} transition={{ delay: idx * 0.1 }}>
            <StatCard {...stat} isDark={isDark} />
          </motion.div>
        ))}
      </div>

      {/* Order Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orderMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`p-6 rounded-2xl ${isDark ? 'bg-luxury-800 border-2 border-gold-600 border-opacity-40' : 'bg-white border-2 border-luxury-200 shadow-lg'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                    {metric.title}
                  </p>
                  <p className={`text-3xl font-serif font-bold ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
                    {metric.value}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${metric.color} bg-opacity-20`}>
                  <Icon size={28} className="text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`p-8 rounded-2xl ${isDark ? 'bg-luxury-800 border-2 border-gold-600 border-opacity-40' : 'bg-white border-2 border-luxury-200 shadow-lg'}`}
      >
        <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
          Recent Orders
        </h2>
        <div className="space-y-4">
          {recentOrders.map((order, idx) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + idx * 0.05 }}
            >
              <RecentOrderItem order={order} isDark={isDark} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Conversion Rate', value: '3.24%' },
          { label: 'Avg Order Value', value: '₹12,450' },
          { label: 'Customer Retention', value: '68%' },
          { label: 'Return Rate', value: '2.1%' },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`text-center p-4 rounded-lg ${isDark ? 'bg-luxury-800 border border-gold-600 border-opacity-30' : 'bg-luxury-50 border border-luxury-200'}`}
          >
            <p className={`text-sm ${isDark ? 'text-luxury-400' : 'text-luxury-600'}`}>{item.label}</p>
            <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>{item.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
