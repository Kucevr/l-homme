import React from 'react';
import { Icons, RevealOnScroll } from './ui';
import { useStore } from '../store';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useStore();
  const t = translations[language];
  
  return (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">{language === 'ru' ? 'Связь' : 'Human Contact'}</h1>
          <p className="text-2xl mb-24 font-light max-w-2xl leading-snug">{language === 'ru' ? 'Если вам нужен совет по стилю, технические детали или помощь с заказом, наш консьерж к вашим услугам.' : 'Whether you seek styling advice, technical details, or order assistance, our concierge is here to provide a personal experience.'}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-12">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">{language === 'ru' ? 'Консьерж' : 'Concierge'}</h2>
                <div className="space-y-4">
                  <p className="text-xl hover:underline cursor-pointer transition-all">concierge@lhomme.com</p>
                  <p className="text-xl">+33 1 23 45 67 89</p>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest pt-2">{language === 'ru' ? 'Доступно 24/7 для Platinum клиентов' : 'Available 24/7 for Platinum Clients'}</p>
                </div>
              </div>

              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">{language === 'ru' ? 'Отделы' : 'Departments'}</h2>
                <div className="space-y-4 text-sm font-medium">
                  <p className="flex justify-between border-b border-gray-100 pb-2"><span>{language === 'ru' ? 'Пресса' : 'Press Inquiries'}</span> <span className="text-stone-400 font-light italic">press@lhomme.com</span></p>
                  <p className="flex justify-between border-b border-gray-100 pb-2"><span>{language === 'ru' ? 'Оптовые продажи' : 'Wholesale'}</span> <span className="text-stone-400 font-light italic">sales@lhomme.com</span></p>
                  <p className="flex justify-between border-b border-gray-100 pb-2"><span>{language === 'ru' ? 'Карьера' : 'Career'}</span> <span className="text-stone-400 font-light italic">join@lhomme.com</span></p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 bg-stone-50 p-8 md:p-16">
               <h2 className="text-xs font-bold uppercase tracking-widest mb-12">{language === 'ru' ? 'Отправить сообщение' : 'Send a Message'}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2 border-b border-stone-200 pb-2">
                     <label className="text-[10px] uppercase font-bold text-stone-400">{language === 'ru' ? 'Имя' : 'FullName'}</label>
                     <input type="text" className="bg-transparent w-full outline-none text-sm placeholder:italic" placeholder={language === 'ru' ? 'напр. Jean-Luc Godard' : 'e.g. Jean-Luc Godard'} />
                  </div>
                  <div className="space-y-2 border-b border-stone-200 pb-2">
                     <label className="text-[10px] uppercase font-bold text-stone-400">{language === 'ru' ? 'Электронная почта' : 'Email Address'}</label>
                     <input type="email" className="bg-transparent w-full outline-none text-sm placeholder:italic" placeholder="email@example.com" />
                  </div>
               </div>
               <div className="space-y-2 border-b border-stone-200 pb-12 mb-12">
                  <label className="text-[10px] uppercase font-bold text-stone-400">{language === 'ru' ? 'Тема / Вопрос' : 'Subject / Inquiry'}</label>
                  <textarea className="bg-transparent w-full outline-none text-sm placeholder:italic resize-none h-32" placeholder={language === 'ru' ? 'Чем мы можем вам помочь сегодня?' : 'How can we assist you today?'}></textarea>
               </div>
               <button className="bg-black text-white px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors flex items-center gap-4">
                  {language === 'ru' ? 'Отправить запрос' : 'Send Inquiry'} <Icons.ArrowRight className="w-3 h-3" />
               </button>
            </div>
          </div>

          <div className="mt-32 pt-16 border-t border-gray-100">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">{language === 'ru' ? 'Штаб-квартиры' : 'Global Headquarters'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div>
                        <p className="font-serif italic text-2xl mb-4">{language === 'ru' ? 'Париж' : 'Paris'}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Rue de Rivoli, 75001 Paris<br/>{language === 'ru' ? 'Администрация и дизайн-студия' : 'Administration & Design Studio'}</p>
                    </div>
                    <div>
                        <p className="font-serif italic text-2xl mb-4">{language === 'ru' ? 'Нью-Йорк' : 'New York'}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Merced St, New York, NY 10013<br/>{language === 'ru' ? 'Логистика в Северной Америке' : 'North American Logistics'}</p>
                    </div>
                    <div>
                        <p className="font-serif italic text-2xl mb-4">{language === 'ru' ? 'Токио' : 'Tokyo'}</p>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Aoyama, Minato City, Tokyo 107-0062<br/>{language === 'ru' ? 'Азиатские розничные операции' : 'Asian Retail Operations'}</p>
                    </div>
                </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);
};

export default Contact;
