import React from 'react';
import { motion } from 'framer-motion';
import { FiTruck, FiShield, FiRotateCcw, FiMail } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function WhyChooseLuxury() {
  const { isDark } = useTheme();

  const features = [
    {
      icon: FiTruck,
      title: 'Free Shipping',
      description: 'Complimentary shipping on orders over ₹8,300 worldwide',
    },
    {
      icon: FiShield,
      title: 'Secure Payment',
      description: 'SSL encrypted checkout for your complete peace of mind',
    },
    {
      icon: FiRotateCcw,
      title: '30-Day Returns',
      description: 'Hassle-free returns and exchanges within 30 days',
    },
    {
      icon: FiMail,
      title: 'Premium Support',
      description: '24/7 customer support via email and phone',
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
    <section className={`${isDark ? 'bg-luxury-900' : 'bg-white'} py-20`}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
            Why Choose Luxury
          </h2>
          <p className={`text-lg ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            Experience excellence in every detail
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -5 }}
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:shadow-lg ${
                  isDark
                    ? 'bg-luxury-800 group-hover:bg-gold-500/20'
                    : 'bg-gold-100 group-hover:bg-gold-200'
                }`}>
                  <Icon className={`${isDark ? 'text-gold-400 group-hover:text-gold-300' : 'text-gold-600 group-hover:text-gold-700'} transition-colors`} size={32} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-serif font-bold mb-3 transition-colors group-hover:text-gold-400 ${
                  isDark ? 'text-white' : 'text-luxury-900'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed group-hover:text-gold-300 transition-colors ${
                  isDark ? 'text-luxury-300' : 'text-luxury-600'
                }`}>
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`mt-4 h-1 w-0 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300 rounded-full`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
