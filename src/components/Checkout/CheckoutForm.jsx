import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Common/Button';

export default function CheckoutForm() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
      {/* Shipping Information */}
      <div>
        <h3 className={`text-lg md:text-xl font-serif mb-4 md:mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Shipping Address</h3>
        <div className="space-y-4 md:space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
            className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h3 className={`text-lg md:text-xl font-serif mb-4 md:mb-6 ${isDark ? 'text-gold-300' : 'text-luxury-900'}`}>Payment Method</h3>
        <div className="space-y-4 md:space-y-5">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
              className={`w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-2 focus:outline-none transition-all text-sm md:text-base ${isDark ? 'bg-luxury-700 border-gold-600 border-opacity-40 text-white placeholder-luxury-400 focus:border-gold-400 focus:border-opacity-100' : 'bg-white border-luxury-200 text-luxury-900 placeholder-luxury-400 focus:border-gold-500'}`}
            />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          required
          className="mt-1 w-4 h-4"
        />
        <label htmlFor="terms" className={`text-xs md:text-sm ${isDark ? 'text-luxury-300' : 'text-luxury-700'}`}>
          I agree to the terms and conditions and privacy policy
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full text-base md:text-lg"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Complete Purchase'}
      </Button>
    </form>
  );
}
