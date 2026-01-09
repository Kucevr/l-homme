
import React, { useState } from 'react';
import { Icons, RevealOnScroll, LazyImage } from './ui';
import { useStore } from '../store';
import { translations } from '../translations';

interface Location {
  city: string;
  city_ru: string;
  country: string;
  country_ru: string;
  address: string;
  address_ru: string;
  hours: string;
  hours_ru: string;
  phone: string;
  email: string;
  image: string;
}

const LOCATIONS: Location[] = [
  {
    city: "Paris",
    city_ru: "Париж",
    country: "France",
    country_ru: "Франция",
    address: "24 Rue de Sévigné, 75004 Paris",
    address_ru: "24 Rue de Sévigné, 75004 Париж",
    hours: "Mon-Sat: 11:00 - 19:00 / Sun: 12:00 - 18:00",
    hours_ru: "Пн-Сб: 11:00 - 19:00 / Вс: 12:00 - 18:00",
    phone: "+33 1 42 77 88 99",
    email: "paris@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop"
  },
  {
    city: "Tokyo",
    city_ru: "Токио",
    country: "Japan",
    country_ru: "Япония",
    address: "3-12-15 Minami-Aoyama, Minato-ku, Tokyo",
    address_ru: "3-12-15 Minami-Aoyama, Minato-ku, Токио",
    hours: "Daily: 11:00 - 20:00",
    hours_ru: "Ежедневно: 11:00 - 20:00",
    phone: "+81 3 5468 5555",
    email: "tokyo@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop"
  },
  {
    city: "New York",
    city_ru: "Нью-Йорк",
    country: "USA",
    country_ru: "США",
    address: "125 Greene Street, SoHo, NY 10012",
    address_ru: "125 Greene Street, SoHo, NY 10012",
    hours: "Mon-Sat: 10:00 - 19:00 / Sun: 12:00 - 18:00",
    hours_ru: "Пн-Сб: 10:00 - 19:00 / Вс: 12:00 - 18:00",
    phone: "+1 212 555 0199",
    email: "newyork@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000&auto=format&fit=crop"
  }
];

const Locations = () => {
  const language = useStore((state) => state.language);
  const [activeCity, setActiveCity] = useState("Paris");
  const activeLocation = LOCATIONS.find(l => l.city === activeCity) || LOCATIONS[0];

  const t = {
    en: {
      heroTag: "Global Boutiques",
      heroTitle: "Visit Us",
      heroDesc: "Experience our collections in person. Each atelier reflects our commitment to craftsmanship and timeless design.",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      email: "Enquiries",
      cta: "Book a Styling Appointment"
    },
    ru: {
      heroTag: "Бутики по всему миру",
      heroTitle: "Посетите нас",
      heroDesc: "Познакомьтесь с нашими коллекциями лично. Каждое ателье отражает наше стремление к совершенству и вневременному дизайну.",
      address: "Адрес",
      hours: "Часы работы",
      phone: "Телефон",
      email: "Почта",
      cta: "Записаться на примерку"
    }
  }[language];

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden border-b border-gray-200 bg-stone-100">
        <LazyImage 
          src={activeLocation.image}
          alt={language === 'ru' ? activeLocation.city_ru : activeLocation.city}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white z-10">
          <RevealOnScroll>
            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block opacity-90">{t.heroTag}</span>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-none mb-6">{t.heroTitle}</h1>
            <p className="text-sm font-light max-w-xl opacity-90 leading-relaxed">
              {t.heroDesc}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* City Selector */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-[72px] md:top-[88px] z-30 transition-all duration-300">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 flex gap-8 justify-center">
          {LOCATIONS.map(loc => (
            <button
              key={loc.city}
              onClick={() => setActiveCity(loc.city)}
              className={`text-xs font-bold uppercase tracking-widest pb-2 transition-all ${
                activeCity === loc.city 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {language === 'ru' ? loc.city_ru : loc.city}
            </button>
          ))}
        </div>
      </div>

      {/* Location Details */}
      <section className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-white">
          {/* Image */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden group">
            <LazyImage 
              src={activeLocation.image}
              alt={language === 'ru' ? activeLocation.city_ru : activeLocation.city}
              className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-12 md:p-20 flex flex-col justify-center bg-gray-50">
            <div className="max-w-md">
              <h2 className="text-5xl font-serif italic mb-2">{language === 'ru' ? activeLocation.city_ru : activeLocation.city}</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-12">{language === 'ru' ? activeLocation.country_ru : activeLocation.country}</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{t.address}</h3>
                  <p className="text-sm leading-relaxed">{language === 'ru' ? activeLocation.address_ru : activeLocation.address}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{t.hours}</h3>
                  <p className="text-sm leading-relaxed">{language === 'ru' ? activeLocation.hours_ru : activeLocation.hours}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{t.phone}</h3>
                  <p className="text-sm leading-relaxed mb-2">{activeLocation.phone}</p>
                  <a href={`mailto:${activeLocation.email}`} className="text-sm underline hover:text-gray-500">
                    {activeLocation.email}
                  </a>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all duration-300">
                    {language === 'ru' ? 'Проложить маршрут' : 'Get Directions'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-gray-200 py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
              {language === 'ru' ? 'Услуги Ателье' : 'Atelier Services'}
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {language === 'ru' 
                ? 'Каждый бутик предлагает индивидуальные консультации по стилю, подгонку одежды и услуги пошива на заказ.'
                : 'Each boutique offers personalized styling consultations, alterations, and made-to-measure services.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.User />
              </div>
              <h3 className="text-xl font-serif italic mb-4">
                {language === 'ru' ? 'Индивидуальный стиль' : 'Personal Styling'}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {language === 'ru'
                  ? 'Запишитесь на индивидуальную консультацию с нашими экспертами по стилю для создания идеального гардероба.'
                  : 'Book a one-on-one consultation with our expert stylists to curate your perfect wardrobe.'}
              </p>
            </div>

            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.Scissors />
              </div>
              <h3 className="text-xl font-serif italic mb-4">
                {language === 'ru' ? 'Подгонка' : 'Alterations'}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {language === 'ru'
                  ? 'Штатные портные обеспечат идеальную посадку каждой вещи. Бесплатно при покупке.'
                  : 'In-house tailoring ensures every piece fits you perfectly. Complimentary with purchase.'}
              </p>
            </div>

            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.Layers />
              </div>
              <h3 className="text-xl font-serif italic mb-4">
                {language === 'ru' ? 'Пошив на заказ' : 'Made-to-Measure'}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {language === 'ru'
                  ? 'Создавайте уникальные изделия, адаптированные под ваши точные мерки и предпочтения.'
                  : 'Create bespoke pieces tailored to your exact measurements and preferences.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="border-t border-gray-200 py-24 bg-black text-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">
            {language === 'ru' ? 'Записаться на визит' : 'Book an Appointment'}
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            {language === 'ru'
              ? 'Забронируйте время для приватного шопинга. Наша команда подготовит персональную подборку на основе ваших предпочтений.'
              : 'Reserve your private shopping experience. Our team will prepare a curated selection based on your preferences.'}
          </p>
          <button className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            {language === 'ru' ? 'Запланировать визит' : 'Schedule Visit'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Locations;
