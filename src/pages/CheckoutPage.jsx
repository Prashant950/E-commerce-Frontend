import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';
import CartSummary from '../components/Cart/CartSummary';
import CheckoutForm from '../components/Checkout/CheckoutForm';
import { useTheme } from '../context/ThemeContext';


export default function CheckoutPage() {
  const { isDark } = useTheme();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePlaceOrder = () => {
    setOrderComplete(true);
    toast.success('Order placed successfully!');
  };

  if (orderComplete) {
    return (
      <div className={`${isDark ? 'bg-luxury-900' : 'bg-luxury-50'} min-h-screen py-20`}>
        <div className="container-custom max-w-md mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-gold-600' : 'bg-gold-500'}`}
          >
            <FiCheck size={40} className="text-white" />
          </motion.div>
          <h1 className={`text-4xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-luxury-900'}`}>
            Thank You!
          </h1>
          <p className={`text-lg mb-4 ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            Your order has been placed successfully. You will receive a confirmation email shortly.
          </p>
          <p className={`text-sm mb-8 ${isDark ? 'text-luxury-400' : 'text-luxury-500'}`}>
            Order #: LUX-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDark ? 'bg-gradient-to-b from-luxury-950 via-luxury-900 to-luxury-950 min-h-screen' : 'bg-luxury-50'} py-8 md:py-12`}>
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
            Checkout
          </h1>
          <p className={`text-sm md:text-base ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            Complete your purchase securely
          </p>
        </div>

        {/* Progress Steps - Mobile Optimized */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
            {[
              { num: 1, label: 'Shipping' },
              { num: 2, label: 'Payment' },
              { num: 3, label: 'Review' },
            ].map((s) => (
              <div key={s.num} className="flex items-center w-full md:flex-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
                    step >= s.num ? 'bg-gold-500' : isDark ? 'bg-luxury-700' : 'bg-luxury-300'
                  } transition-colors`}
                >
                  {step > s.num ? <FiCheck size={16} className="md:w-[20px] md:h-[20px]" /> : s.num}
                </motion.div>
                <p className={`ml-2 md:ml-4 font-semibold text-xs md:text-base ${
                  step >= s.num ? (isDark ? 'text-gold-400' : 'text-gold-600') : isDark ? 'text-luxury-400' : 'text-luxury-600'
                }`}>
                  {s.label}
                </p>
                {s.num < 3 && (
                  <div className={`hidden md:block flex-1 h-1 mx-4 ${
                    step > s.num ? 'bg-gold-500' : isDark ? 'bg-luxury-700' : 'bg-luxury-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <CheckoutForm onComplete={() => {
              setStep(3);
              setTimeout(handlePlaceOrder, 500);
            }} />
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </motion.div>
        </div>

        {/* Security Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mt-8 md:mt-12 p-4 md:p-6 rounded-lg ${isDark ? 'bg-luxury-800' : 'bg-white'}`}
        >
          <p className={`text-center text-xs md:text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
            🔒 Your payment information is secure and encrypted. We use industry-standard SSL encryption to protect your data.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
