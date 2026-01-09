
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '../store';
import { translations } from '../translations';

const Sustainability = () => {
    const { language } = useStore();
    const t = translations[language].sustainability;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

    const sections = [
        {
            title: t.sections.ethical.title,
            content: t.sections.ethical.content,
            image: "/items/Этичное производство.jpg"
        },
        {
            title: t.sections.innovation.title,
            content: t.sections.innovation.content,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: t.sections.circular.title,
            content: t.sections.circular.content,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-32 max-w-4xl"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">{t.commitment}</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-12 tracking-tighter">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                        {t.heroDescription}
                    </p>
                </motion.div>

                {/* Vertical Timeline/Grid */}
                <div className="space-y-40">
                    {sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-50"
                            >
                                <img 
                                    src={section.image} 
                                    alt={section.title}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-1/3"
                            >
                                <h2 className="text-3xl md:text-4xl font-serif mb-8">{section.title}</h2>
                                <p className="text-lg text-gray-500 leading-relaxed font-light">
                                    {section.content}
                                </p>
                                <div className="mt-12 w-20 h-[1px] bg-black"></div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-48 pt-24 border-t border-gray-100 grid md:grid-cols-3 gap-12"
                >
                    {[
                        { label: t.stats.materials, val: "92%" },
                        { label: t.stats.packaging, val: "100%" },
                        { label: t.stats.warranty, val: "∞" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-5xl font-serif mb-4">{stat.val}</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Sustainability;
