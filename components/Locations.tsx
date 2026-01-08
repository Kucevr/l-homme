
import React, { useState } from 'react';
import { Icons, RevealOnScroll } from './ui';

interface Location {
  city: string;
  country: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  image: string;
}

const LOCATIONS: Location[] = [
  {
    city: "Paris",
    country: "France",
    address: "24 Rue de Sévigné, 75004 Paris",
    hours: "Mon-Sat: 11:00 - 19:00 / Sun: 12:00 - 18:00",
    phone: "+33 1 42 77 88 99",
    email: "paris@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop"
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "3-12-15 Minami-Aoyama, Minato-ku, Tokyo",
    hours: "Daily: 11:00 - 20:00",
    phone: "+81 3 5468 5555",
    email: "tokyo@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop"
  },
  {
    city: "New York",
    country: "USA",
    address: "125 Greene Street, SoHo, NY 10012",
    hours: "Mon-Sat: 10:00 - 19:00 / Sun: 12:00 - 18:00",
    phone: "+1 212 555 0199",
    email: "newyork@lhomme-atelier.com",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000&auto=format&fit=crop"
  }
];

export const Locations = () => {
  const [activeCity, setActiveCity] = useState("Paris");
  const activeLocation = LOCATIONS.find(l => l.city === activeCity) || LOCATIONS[0];

  return (
    <div className="min-h-screen bg-white pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden border-b border-gray-200">
        <img 
          src={activeLocation.image}
          alt={activeLocation.city}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <RevealOnScroll>
            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block opacity-90">Global Boutiques</span>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-none mb-6">Visit Us</h1>
            <p className="text-sm font-light max-w-xl opacity-90 leading-relaxed">
              Experience our collections in person. Each atelier reflects our commitment to craftsmanship and timeless design.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* City Selector */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-10">
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
              {loc.city}
            </button>
          ))}
        </div>
      </div>

      {/* Location Details */}
      <section className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden group">
            <img 
              src={activeLocation.image}
              alt={activeLocation.city}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="p-12 md:p-20 flex flex-col justify-center bg-gray-50">
            <div className="max-w-md">
              <h2 className="text-5xl font-serif italic mb-2">{activeLocation.city}</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-12">{activeLocation.country}</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Address</h3>
                  <p className="text-sm leading-relaxed">{activeLocation.address}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Hours</h3>
                  <p className="text-sm leading-relaxed">{activeLocation.hours}</p>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Contact</h3>
                  <p className="text-sm leading-relaxed mb-2">{activeLocation.phone}</p>
                  <a href={`mailto:${activeLocation.email}`} className="text-sm underline hover:text-gray-500">
                    {activeLocation.email}
                  </a>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all duration-300">
                    Get Directions
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
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">Atelier Services</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Each boutique offers personalized styling consultations, alterations, and made-to-measure services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.User />
              </div>
              <h3 className="text-xl font-serif italic mb-4">Personal Styling</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Book a one-on-one consultation with our expert stylists to curate your perfect wardrobe.
              </p>
            </div>

            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.Package />
              </div>
              <h3 className="text-xl font-serif italic mb-4">Alterations</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                In-house tailoring ensures every piece fits you perfectly. Complimentary with purchase.
              </p>
            </div>

            <div className="bg-white p-12 text-center">
              <div className="mb-6 flex justify-center">
                <Icons.Star />
              </div>
              <h3 className="text-xl font-serif italic mb-4">Made-to-Measure</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Create bespoke pieces tailored to your exact measurements and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="border-t border-gray-200 py-24 bg-black text-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Book an Appointment</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Reserve your private shopping experience. Our team will prepare a curated selection based on your preferences.
          </p>
          <button className="bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            Schedule Visit
          </button>
        </div>
      </section>
    </div>
  );
};
