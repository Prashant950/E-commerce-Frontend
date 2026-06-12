import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export default function CheckoutForm({ onComplete }) {
  const { isDark } = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Payment
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateShipping = () => {
    const { firstName, lastName, email, address, city, state, zipCode, country } = formData;
    if (!firstName || !lastName || !email || !address || !city || !state || !zipCode || !country) {
      toast.error('Please fill in all shipping fields');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email');
      return false;
    }
    return true;
  };

  const validatePayment = () => {
    const { cardName, cardNumber, expiryDate, cvv } = formData;
    if (!cardName || !cardNumber || !expiryDate || !cvv) {
      toast.error('Please fill in all payment fields');
      return false;
    }
    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
      toast.error('Please enter a valid 16-digit card number');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error('Expiry date should be in MM/YY format');
      return false;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      toast.error('Please enter a valid CVV');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && !validateShipping()) return;
    if (step === 2 && !validatePayment()) return;
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={`rounded-lg p-6 ${isDark ? 'bg-luxury-800' : 'bg-white'}`}>
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Shipping Form */}
        {step === 1 && (
          <div>
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
              Shipping Address
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border transition ${
                  isDark 
                    ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                    : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border transition ${
                  isDark 
                    ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                    : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
              />

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border transition ${
                  isDark 
                    ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                    : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Payment Form */}
        {step === 2 && (
          <div>
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
              Payment Information
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={formData.cardName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border transition ${
                  isDark 
                    ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                    : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
              />

              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number (16 digits)"
                value={formData.cardNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                  handleInputChange({ target: { name: 'cardNumber', value } });
                }}
                maxLength="19"
                className={`w-full px-4 py-3 rounded-lg border transition font-mono ${
                  isDark 
                    ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                    : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 4);
                    }
                    handleInputChange({ target: { name: 'expiryDate', value } });
                  }}
                  maxLength="5"
                  className={`w-full px-4 py-3 rounded-lg border transition font-mono ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                    handleInputChange({ target: { name: 'cvv', value } });
                  }}
                  maxLength="4"
                  className={`w-full px-4 py-3 rounded-lg border transition font-mono ${
                    isDark 
                      ? 'bg-luxury-700 border-luxury-600 text-white placeholder-luxury-400 focus:border-gold-500' 
                      : 'bg-luxury-50 border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Review Order */}
        {step === 3 && (
          <div>
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>
              Review Your Order
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-gold-400' : 'text-luxury-800'}`}>
                  Shipping Address
                </h3>
                <p className={`text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                  {formData.firstName} {formData.lastName}<br />
                  {formData.address}<br />
                  {formData.city}, {formData.state} {formData.zipCode}<br />
                  {formData.country}<br />
                  Email: {formData.email}<br />
                  Phone: {formData.phone}
                </p>
              </div>
              
              <div className={`border-t ${isDark ? 'border-luxury-700' : 'border-luxury-200'} pt-6`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-gold-400' : 'text-luxury-800'}`}>
                  Payment Method
                </h3>
                <p className={`text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-600'}`}>
                  Card ending in {formData.cardNumber.slice(-4)}<br />
                  {formData.cardName}
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            step === 1
              ? isDark ? 'bg-luxury-700 text-luxury-500 cursor-not-allowed' : 'bg-luxury-200 text-luxury-400 cursor-not-allowed'
              : isDark ? 'bg-luxury-700 text-white hover:bg-luxury-600' : 'bg-luxury-200 text-luxury-900 hover:bg-luxury-300'
          }`}
        >
          <FiArrowLeft size={18} />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-white rounded-lg font-semibold hover:bg-gold-600 transition"
        >
          {step === 3 ? 'Place Order' : 'Next'}
          <FiArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
