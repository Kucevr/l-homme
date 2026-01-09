
import React, { useState, useEffect } from 'react';
import { Icons } from './ui';

export const NewsletterModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('newsletter_seen');
        if (!hasSeen) {
            const timer = setTimeout(() => setIsOpen(true), 8000); // Show after 8s for better UX
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('newsletter_seen', 'true');
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500" onClick={handleClose}></div>
            <div className="relative bg-white w-full max-w-lg shadow-2xl animate-fade-in p-8 md:p-12 text-center border border-gray-100">
                 <button onClick={handleClose} className="absolute top-4 right-4 hover:rotate-90 transition-transform text-gray-400 hover:text-black"><Icons.X /></button>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 block">The Atelier</span>
                 <h3 className="text-3xl md:text-4xl font-serif italic mb-4">Unlock The Archives</h3>
                 <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed px-4">
                    Join our client list for early access to new collections, exclusive editorial content, and private sale events.
                 </p>
                 <div className="flex gap-0 border-b border-black pb-2 mb-6">
                    <input type="email" placeholder="Email Address" className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400" />
                    <button className="text-[10px] font-bold uppercase tracking-widest hover:text-gray-500 whitespace-nowrap px-4">Sign Up</button>
                 </div>
                 <button onClick={handleClose} className="text-[10px] text-gray-400 underline hover:text-black transition-colors">No thanks, I prefer to browse anonymously.</button>
            </div>
        </div>
    )
}
export default NewsletterModal;
