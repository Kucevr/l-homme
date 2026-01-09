
import React from 'react';
import { Icons, RevealOnScroll, LazyImage } from './ui';

interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Crafting Silence: A Conversation with Our Head Tailor",
    category: "Atelier",
    excerpt: "On the importance of negative space, structure, and the pursuit of the perfect silhouette. An intimate look at the philosophy behind our tailoring.",
    image: "/items/CraftingSilence.jpeg",
    date: "Dec 15, 2024",
    readTime: "8 min",
    featured: true
  },
  {
    id: 2,
    title: "The Monochromatic Guide",
    category: "Style",
    excerpt: "Mastering the art of tonal dressing. How to layer textures within a single color palette for a sophisticated winter look.",
    image: "/items/ann3.jpeg",
    date: "Dec 10, 2024",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "The Art of Slow Fashion",
    category: "Philosophy",
    excerpt: "Why we choose quality over quantity. A deep dive into sustainable practices and the true cost of fast fashion.",
    image: "/items/TheArtofSlowFashion.jpeg",
    date: "Dec 5, 2024",
    readTime: "10 min"
  },
  {
    id: 4,
    title: "Winter Essentials: The Capsule Edit",
    category: "Style",
    excerpt: "Ten pieces that form the foundation of a refined winter wardrobe. Timeless investments that transcend trends.",
    image: "/items/WinterCapsule.jpeg",
    date: "Nov 28, 2024",
    readTime: "6 min"
  },
  {
    id: 5,
    title: "Behind the Fabric: Italian Wool",
    category: "Materials",
    excerpt: "Journey to the mills of Biella, where tradition meets innovation in the creation of our signature wool blends.",
    image: "/items/Italianwool.jpeg",
    date: "Nov 20, 2024",
    readTime: "7 min"
  },
  {
    id: 6,
    title: "The Perfect Fit: A Sizing Guide",
    category: "Guide",
    excerpt: "Understanding proportions, measurements, and how our pieces are designed to fit the modern silhouette.",
    image: "/items/Know your Suit Fabric.jpeg",
    date: "Nov 15, 2024",
    readTime: "4 min"
  }
];

export const Journal = () => {
  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const regularArticles = ARTICLES.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40 animate-fade-in">
      {/* Hero */}
      <section className="border-b border-gray-200 py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <RevealOnScroll>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">Editorial</span>
            <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-none">The Journal</h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
              Stories from the atelier. Insights on craft, style, and the philosophy of timeless design.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Article */}
      <section className="border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden group cursor-pointer">
            <LazyImage 
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
            <span className="inline-block py-1 px-3 border border-gray-200 text-[10px] font-bold uppercase tracking-widest mb-6 self-start">
              {featuredArticle.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
              <span>{featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime} Read</span>
            </div>
            <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:gap-6 transition-all group">
              Read Full Story 
              <span className="group-hover:translate-x-1 transition-transform">
                <Icons.ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-[80px] z-10">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-3 flex gap-6 overflow-x-auto scrollbar-hide">
          {["All", "Style", "Atelier", "Materials", "Philosophy", "Guide"].map(cat => (
            <button
              key={cat}
              className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black whitespace-nowrap transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {regularArticles.map(article => (
              <article key={article.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">
                  <LazyImage 
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-serif italic mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-gray-200 py-24 bg-black text-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Stay Informed</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Subscribe to receive our latest stories, style guides, and exclusive insights from the atelier.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full md:flex-1 bg-transparent border border-white/40 py-4 px-6 outline-none text-sm focus:border-white transition-colors"
            />
            <button className="w-full md:w-auto bg-white text-black px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white border border-white transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Archive Link */}
      <section className="border-t border-gray-200 py-12 bg-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 text-center">
          <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black border-b border-gray-300 hover:border-black pb-1 transition-all">
            View Archive
          </button>
        </div>
      </section>
    </div>
  );
};
