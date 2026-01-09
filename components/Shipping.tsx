import React from 'react';
import { RevealOnScroll } from './ui';

const Shipping = () => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Shipping & Delivery</h1>
          <div className="space-y-16 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Concierge Delivery</h2>
              <p className="mb-6 text-lg text-black italic">"The journey of a garment is as important as its construction."</p>
              <p className="mb-8">All L'HOMME orders are prepared with meticulous care at our Paris atelier. Each piece is placed in a custom-engineered, dust-proof garment bag and shipped in our Signature 100% recyclable structural box.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">Standard</h3>
                  <p className="text-sm">Complimentary for all orders.<br/>3-5 business days.</p>
                </div>
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">Express</h3>
                  <p className="text-sm">$25.00 USD<br/>1-2 business days.</p>
                </div>
                <div>
                  <h3 className="text-black font-bold text-xs uppercase mb-2">Same-Day</h3>
                  <p className="text-sm">Available in Paris & NYC.<br/>Orders before 12:00 PM.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">International Shipping</h2>
              <p className="mb-4">We ship to over 50 countries worldwide via DHL Express. All international shipments are DDP (Delivery Duty Paid), meaning all import taxes and duties are included in the final price at checkout.</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>European Union: 2-3 business days.</li>
                <li>North America: 2-4 business days.</li>
                <li>Asia & Oceania: 3-5 business days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Signature Required</h2>
              <p>To ensure the security of your purchase, all L'HOMME shipments require a signature upon delivery. We are unable to redirect packages once they have been dispatched. If you are unavailable at the time of delivery, our courier will make two additional attempts.</p>
            </section>

            <section className="bg-stone-50 p-8 md:p-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Sustainability Commitment</h2>
              <p className="text-sm italic mb-4">"Silence in design, responsibility in action."</p>
              <p className="text-sm italic">Our packaging is 100% plastic-free. We use FSC-certified paper and plant-based inks. Since 2024, L'HOMME has offset 110% of carbon emissions from all global shipments through our partnership with the Global Forest Fund.</p>
            </section>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);

export default Shipping;
