import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiHeart } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function AboutPage() {
  const { isDark } = useTheme();

  const values = [
    {
      icon: FiAward,
      title: 'Premium Quality',
      description: 'We source only the finest materials from trusted suppliers worldwide.',
      color: 'from-luxury-600 to-gold-600',
    },
    {
      icon: FiHeart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond for every customer.',
      color: 'from-gold-500 to-luxury-600',
    },
    {
      icon: FiGlobe,
      title: 'Sustainability',
      description: 'Ethical sourcing and eco-friendly practices are at the heart of our business.',
      color: 'from-luxury-700 to-gold-700',
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'We believe in building a community of luxury enthusiasts and supporters.',
      color: 'from-gold-600 to-luxury-700',
    },
  ];

  const team = [
    {
      name: 'Alexander Sterling',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      name: 'Victoria Monroe',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    {
      name: 'James Chen',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    },
    {
      name: 'Sophie Laurent',
      role: 'Chief Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    },
  ];

  return (
    <div className={`${isDark ? 'bg-gradient-to-b from-luxury-950 via-luxury-900 to-luxury-950' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-luxury-900 via-luxury-850 to-gold-950' : 'bg-gradient-to-r from-luxury-900 to-gold-800'} text-white py-32 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-white to-gold-300 bg-clip-text text-transparent"
          >
            About Luxury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gold-200 font-light tracking-wide"
          >
            Redefining luxury for over a decade
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`${isDark ? 'bg-luxury-900 border-t-2 border-gold-600 border-opacity-30' : 'bg-luxury-50'} py-24`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-5xl font-serif font-bold mb-8 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
                Our Story
              </h2>
              <p className={`mb-6 text-lg leading-relaxed ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
                Founded in 2012, Luxury began with a simple vision: to make premium, handcrafted products accessible to discerning customers worldwide.
              </p>
              <p className={`mb-6 text-lg leading-relaxed ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
                We've grown from a small boutique to a global brand, but our commitment to quality and customer satisfaction remains unchanged.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
                Today, we serve over 100,000 customers across 50+ countries, maintaining the highest standards in every aspect of our business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative ${isDark ? 'rounded-2xl overflow-hidden shadow-2xl ring-2 ring-gold-600 ring-opacity-30' : 'rounded-lg shadow-lg'}`}
            >
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop"
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-luxury-950 via-transparent to-transparent opacity-40' : ''}`}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900' : 'bg-white'} py-24 relative`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <h2 className={`text-5xl font-serif font-bold text-center mb-20 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-2xl backdrop-blur-sm ${isDark ? `bg-gradient-to-br ${value.color} opacity-0 border-2 border-gold-600 border-opacity-0 hover:border-opacity-0 hover:shadow-xl hover:shadow-gold-500/10` : 'bg-luxury-50 border-2 border-gold-300'} transition-all duration-300 hover:scale-105`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${isDark ? `bg-gradient-to-br ${value.color} opacity-5` : ''}`}></div>
                <value.icon className={`text-4xl mb-6 transition-transform ${isDark ? 'text-gold-400' : 'text-gold-600'} group-hover:scale-110`} />
                <h3 className={`text-xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                  {value.title}
                </h3>
                <p className={`${isDark ? 'text-luxury-300' : 'text-luxury-600'} leading-relaxed`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`${isDark ? 'bg-gradient-to-b from-luxury-900 to-luxury-850 border-t-2 border-gold-600 border-opacity-30' : 'bg-luxury-50'} py-24`}>
        <div className="container-custom">
          <h2 className={`text-5xl font-serif font-bold text-center mb-20 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className={`relative mb-6 overflow-hidden rounded-2xl ${isDark ? 'ring-2 ring-gold-600 ring-opacity-50' : 'shadow-lg'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-luxury-950 via-transparent to-transparent opacity-40 group-hover:opacity-20' : ''} transition-opacity`}></div>
                </div>
                <h3 className={`text-xl font-serif font-bold mb-2 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                  {member.name}
                </h3>
                <p className={`font-semibold text-lg transition-colors ${isDark ? 'text-gold-400 group-hover:text-gold-300' : 'text-gold-600'}`}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${isDark ? 'bg-gradient-to-r from-luxury-900 via-gold-950 to-luxury-900' : 'bg-gradient-to-r from-luxury-900 to-gold-800'} text-white py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years in Business', value: '12+' },
              { label: 'Happy Customers', value: '100K+' },
              { label: 'Countries Served', value: '50+' },
              { label: 'Products Offered', value: '500+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${isDark ? 'bg-white bg-opacity-5 backdrop-blur-sm border border-gold-500 border-opacity-30 hover:border-opacity-70' : 'bg-white bg-opacity-10'} transition-all duration-300 hover:scale-105`}
              >
                <p className="text-5xl md:text-6xl font-serif font-bold mb-3 text-gold-300">{stat.value}</p>
                <p className="text-lg text-gold-100 font-light tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
