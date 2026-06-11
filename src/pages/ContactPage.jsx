import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Message sent successfully! We will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gold-200 font-light tracking-wide"
          >
            We'd love to hear from you. Get in touch with our team.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${isDark ? 'bg-luxury-900 border-t-2 border-gold-600 border-opacity-30' : 'bg-luxury-50'} py-24`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: FiPhone,
                title: 'Phone',
                value: '+91-906-536-125',
                description: 'Available Mon-Fri, 9am-6pm IST',
              },
              {
                icon: FiMail,
                title: 'Email',
                value: 'support@luxury.in',
                description: 'We respond within 24 hours',
              },
              {
                icon: FiMapPin,
                title: 'Address',
                value: 'Lucknow, Uttar Pradesh',
                description: 'Hazratganj, Lucknow - 226001',
              },
            ].map((contact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`group p-10 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40 hover:border-opacity-70 hover:shadow-xl hover:shadow-gold-500/10' : 'bg-white shadow-lg hover:shadow-xl'}`}
              >
                <contact.icon className={`text-5xl mx-auto mb-5 transition-transform group-hover:scale-110 ${isDark ? 'text-gold-400' : 'text-gold-600'}`} />
                <h3 className={`text-2xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
                  {contact.title}
                </h3>
                <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-gold-300' : 'text-gold-600'}`}>
                  {contact.value}
                </p>
                <p className={`${isDark ? 'text-luxury-400' : 'text-luxury-600'} text-sm`}>
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className={`p-10 rounded-2xl ${isDark ? 'bg-gradient-to-br from-luxury-800 to-luxury-900 border-2 border-gold-600 border-opacity-40 shadow-2xl shadow-gold-500/10' : 'bg-white shadow-lg'}`}>
              <h2 className={`text-3xl font-serif font-bold mb-10 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all resize-none ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-500 focus:border-gold-500'}`}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition font-bold text-lg disabled:opacity-50 shadow-lg hover:shadow-xl"
                >
                  <FiSend size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${isDark ? 'bg-gradient-to-b from-luxury-800 to-luxury-900 border-t-2 border-gold-600 border-opacity-30' : 'bg-luxury-50'} py-24`}>
        <div className="container-custom">
          <h2 className={`text-5xl font-serif font-bold text-center mb-16 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What are your shipping times?',
                a: 'We offer standard shipping (5-7 business days) and express shipping (1-2 business days).',
              },
              {
                q: 'Do you offer international shipping?',
                a: 'Yes! We ship to over 50 countries worldwide with competitive international shipping rates.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day money-back guarantee on all purchases. No questions asked.',
              },
              {
                q: 'Are your products authentic?',
                a: 'Absolutely! All our products are 100% authentic and come from authorized suppliers.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-102 ${isDark ? 'bg-gradient-to-br from-luxury-700 to-luxury-800 border-2 border-gold-600 border-opacity-40 hover:border-opacity-70 hover:shadow-lg hover:shadow-gold-500/10' : 'bg-white shadow-lg hover:shadow-xl border-l-4 border-gold-500'}`}
              >
                <h3 className={`font-serif font-bold mb-3 text-lg transition-colors ${isDark ? 'text-gold-300 group-hover:text-gold-200' : 'text-gold-600'}`}>
                  {faq.q}
                </h3>
                <p className={`${isDark ? 'text-luxury-300' : 'text-luxury-700'} leading-relaxed`}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
