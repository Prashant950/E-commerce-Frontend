import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiShoppingBag, FiGlobe, FiAward } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function PremiumStats() {
  const { isDark } = useTheme();

  const stats = [
    {
      icon: FiUsers,
      value: '50K+',
      label: 'Happy Customers',
      description: 'Trusted by luxury enthusiasts worldwide',
    },
    {
      icon: FiShoppingBag,
      value: '500+',
      label: 'Premium Products',
      description: 'Curated collection of finest items',
    },
    {
      icon: FiGlobe,
      value: '85+',
      label: 'Countries',
      description: 'Shipping to destinations globally',
    },
    {
      icon: FiAward,
      value: '4.9★',
      label: 'Customer Rating',
      description: 'Excellence in every transaction',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-luxury-800' : 'bg-gradient-to-r from-luxury-900 to-luxury-950'}`}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Luxury Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-lg text-luxury-300 max-w-2xl mx-auto">
            Join thousands of discerning customers who have chosen Luxury for premium quality and exceptional service
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group p-8 rounded-lg text-center border transition-all duration-300 hover:shadow-2xl ${
                  isDark
                    ? 'bg-luxury-700 border-luxury-600 hover:border-gold-500 hover:bg-luxury-600'
                    : 'bg-luxury-800 border-luxury-700 hover:border-gold-500 hover:shadow-gold-500/20'
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 group-hover:shadow-lg group-hover:shadow-gold-500/50 transition-all duration-300">
                    <Icon size={32} className="text-luxury-900" />
                  </div>
                </div>

                {/* Value */}
                <h3 className="text-4xl font-serif text-gold-400 mb-2 group-hover:text-gold-300 transition-colors">
                  {stat.value}
                </h3>

                {/* Label */}
                <h4 className="text-xl font-serif text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-sm text-luxury-400 group-hover:text-luxury-300 transition-colors">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          <span className="text-gold-400 font-serif text-lg">✦</span>
          <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
