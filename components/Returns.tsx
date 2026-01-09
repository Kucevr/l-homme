import React from 'react';
import { RevealOnScroll } from './ui';

const Returns = () => (
  <div className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">
      <RevealOnScroll>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Returns & Exchanges</h1>
          <div className="space-y-16 text-gray-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">The Returns Window</h2>
              <p className="mb-4">We offer a 14-day return window from the date of delivery. Items must be returned in their original condition: unworn, unwashed, and with all L'HOMME internal and external tags intact.</p>
              <div className="p-4 border-l-2 border-black bg-stone-50">
                <p className="text-sm font-medium text-black uppercase tracking-widest">Important: Special Categories</p>
                <p className="text-sm mt-2">Footwear must be tried on a carpeted surface. Fragrances and grooming products must be returned unopened in their original heat-shrunk wrapping.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Global Returns Process</h2>
              <p className="mb-8">To initiate a return, please access our <u>Online Returns Portal</u> with your order number and email address. A prepaid shipping label and commercial invoice will be generated for you.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-black font-bold text-xs uppercase mb-4">Domestic Returns</h3>
                   <p className="text-sm">Returns within the EU and USA are complimentary for silver-tier members and above. For guest orders, a flat fee of $15 is deducted from the refund.</p>
                </div>
                <div>
                   <h3 className="text-black font-bold text-xs uppercase mb-4">International Returns</h3>
                   <p className="text-sm">International return shipping costs are the responsibility of the customer. Customs duties and taxes are non-refundable through L'HOMME.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Refunds</h2>
              <p>Once your return is received and inspected by our Quality Control team (typically within 48 hours), your refund will be processed to the original payment method. Please allow up to 10 business days for the funds to appear in your account, depending on your financial institution.</p>
            </section>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);

export default Returns;
