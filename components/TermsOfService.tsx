import React from 'react';
import { RevealOnScroll } from './ui';

const TermsOfService = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Terms of Service</h1>
                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Overview</h2>
                            <p>This website is operated by L'HOMME Atelier. Throughout the site, the terms “we”, “us” and “our” refer to L'HOMME. By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Online Store Terms</h2>
                            <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Products and Services</h2>
                            <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Accuracy of Billing and Account Information</h2>
                            <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Governing Law</h2>
                            <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of France.</p>
                        </section>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </div>
);

export default TermsOfService;
