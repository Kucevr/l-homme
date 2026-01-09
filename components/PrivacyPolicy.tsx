import React from 'react';
import { RevealOnScroll } from './ui';

const PrivacyPolicy = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-serif italic mb-12">Privacy Policy</h1>
                    <div className="space-y-12 text-gray-600 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Introduction</h2>
                            <p>At L'HOMME, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">The Data We Collect</h2>
                            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Identity Data: name, username or similar identifier.</li>
                                <li>Contact Data: billing address, delivery address, email address and telephone numbers.</li>
                                <li>Financial Data: payment card details (processed by our secure payment partners).</li>
                                <li>Transaction Data: details about payments to and from you and other details of products you have purchased from us.</li>
                                <li>Technical Data: IP address, login data, browser type and version, time zone setting and location.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">How We Use Your Data</h2>
                            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Data Security</h2>
                            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                        </section>
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Contact Us</h2>
                            <p>If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer at <u>privacy@lhomme.com</u>.</p>
                        </section>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </div>
);

export default PrivacyPolicy;
