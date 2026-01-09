import React, { useState } from 'react';
import { m } from 'framer-motion';
import { useStore } from '../store';
import { translations } from '../translations';
import { Icons } from './ui';

interface CheckoutProps {
  onComplete: () => void;
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onComplete, onBack }) => {
  const { language, cart } = useStore();
  const t = translations[language];
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form Section */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-black mb-12 transition-colors"
          >
            <Icons.ArrowLeft className="w-3 h-3" />
            {t.checkout.backToCart}
          </button>

          <h1 className="text-4xl font-serif italic mb-12">{t.checkout.title}</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {t.checkout.firstName} *
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {t.checkout.lastName} *
                </label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                {t.checkout.email} *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                {t.checkout.phone} *
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                {t.checkout.address} *
              </label>
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                {t.checkout.city} *
              </label>
              <input
                required
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-b border-gray-200 py-3 focus:border-black outline-none transition-colors text-sm"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] border border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-gray-400 disabled:border-gray-400"
            >
              {isSubmitting && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              {isSubmitting ? (language === 'ru' ? 'Обработка...' : 'Processing...') : t.checkout.completeOrder}
            </button>
          </form>
        </m.div>

        {/* Summary Section */}
        <m.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 p-8 lg:p-12 h-fit"
        >
          <h2 className="text-xl font-serif italic mb-8 border-b border-gray-200 pb-4">{t.checkout.summary}</h2>
          
          <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-4">
            {cart.map((item) => (
              <div key={item.cartId} className="flex gap-4">
                <div className="w-16 aspect-[3/4] bg-white border border-gray-100 flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium">{language === 'ru' && item.name_ru ? item.name_ru : item.name}</p>
                    <p className="text-sm">${item.price * item.quantity}</p>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    Qty: {item.quantity} / {item.selectedSize}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.cart.subtotal}</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.checkout.shipping}</span>
              <span className="text-green-600 font-medium uppercase tracking-widest text-[10px]">{t.checkout.free}</span>
            </div>
            <div className="flex justify-between text-lg font-serif italic pt-4 border-t border-gray-200">
              <span>{t.checkout.total}</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};
