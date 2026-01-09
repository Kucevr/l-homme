import * as React from "react";
import { m, useScroll, useTransform } from "framer-motion";

interface RevealOnScrollProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if ((this as any).state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
          <h2 className="text-2xl font-serif italic mb-4">Something went wrong.</h2>
          <p className="text-sm text-gray-500 mb-2 max-w-xs">{(this as any).state.error?.message}</p>
          <p className="text-[10px] text-gray-400 mb-8 max-w-xs uppercase tracking-widest">Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-widest"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-stone-200 ${className || ''}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-100/30 to-transparent animate-shimmer" />
  </div>
);

export const LazyImage = ({ src, alt, className = "", sizes = "" }: { src: string, alt: string, className?: string, sizes?: string }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  // Adaptive loading: Choose quality based on connection
  const [optimizedSrc, setOptimizedSrc] = React.useState(src);
  const [srcSet, setSrcSet] = React.useState("");

  React.useEffect(() => {
    const connection = (navigator as any).connection;
    let quality = 75; 
    let width = 1200; 

    if (connection) {
      if (connection.effectiveType === '4g') {
        quality = 70; // Even tighter for stable results
        width = 1024;
      } else if (connection.effectiveType === '3g') {
        quality = 50; 
        width = 640;
      } else if (connection.effectiveType === '2g') {
        quality = 25; 
        width = 320;
      }
    }
    
    if (src.includes('unsplash.com')) {
      const base = src.split('?')[0];
      const params = src.includes('?') ? src.split('?')[1] : '';
      const separator = src.includes('?') ? '&' : '?';
      
      const extraParams = `&auto=format,compress&fm=webp&q=${quality}`;
      setOptimizedSrc(`${base}${separator}${params}${params ? '&' : ''}${extraParams}&w=${width}&fit=crop`);
      
      const widths = [320, 640, 800, 1024, 1200, 1600];
      const set = widths.map(w => 
        `${base}?${params}${params ? '&' : ''}${extraParams}&w=${w}&fit=crop ${w}w`
      ).join(', ');
      setSrcSet(set);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes || "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"} 
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export const RevealText = ({ children }: { children: string }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <m.h2 
      ref={ref}
      style={{ opacity, y }}
      className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-center max-w-5xl leading-[1.1] font-serif italic"
    >
      {children}
    </m.h2>
  );
};

const Char = ({ char, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return <m.span style={{ opacity }}>{char}</m.span>;
};

export const CharRevealText = ({ text, className = "" }: { text?: string, className?: string }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
     offset: ["start 0.9", "start 0.3"]
  });

  if (!text) return null;
  const characters = text.split("");
  
  return (
    <div ref={ref} className={`relative ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = (i + 1) / characters.length;
        return (
          <Char key={i} char={char} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </div>
  );
};

export const Icons = {
  Search: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  ShoppingBag: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
  ),
  User: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  Sparkles: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path></svg>
  ),
  X: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Send: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  ArrowRight: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  ),
  ArrowLeft: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  ),
  Menu: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  ),
  Plus: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Minus: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Ruler: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
  ),
  Heart: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  ),
  HeartFill: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  ),
  Package: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  ),
  Star: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  ),
  Quote: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5-1.75 4.5-4 4.5V21zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v7c0 1.25.75 2 2 2h4c0 2.5-1.75 4.5-4 4.5V21z"></path></svg>
  ),
  Check: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  Scissors: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="m8.12 8.12 1.94 1.94"/></svg>
  ),
  Layers: ({ className = "", ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.27a2 2 0 0 0 0 3.46l8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09a2 2 0 0 0 0-3.46Z"/><path d="m2.6 14.27 8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09"/><path d="m2.6 10.27 8.57 4.09a2 2 0 0 0 1.66 0l8.57-4.09"/></svg>
  ),
};

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    
    // Check if IntersectionObserver is available (safety)
    if (typeof IntersectionObserver === 'undefined') {
        setIsVisible(true);
        return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        setTimeout(() => {
            setIsVisible(true);
        }, delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
      {children}
    </div>
  );
};

export const Marquee = () => (
  <div className="absolute top-0 left-0 w-full bg-black text-white text-[10px] md:text-xs font-bold py-2 overflow-hidden flex items-center tracking-widest uppercase z-[60]">
    <div className="animate-marquee whitespace-nowrap flex space-x-12">
      <span>Free Worldwide Shipping on orders over $250</span>
      <span>•</span>
      <span>New Collection: Autumn/Winter '25 Available Now</span>
      <span>•</span>
      <span>Paris — Tokyo — New York</span>
      <span>•</span>
      <span>Free Worldwide Shipping on orders over $250</span>
      <span>•</span>
      <span>New Collection: Autumn/Winter '25 Available Now</span>
      <span>•</span>
      <span>Paris — Tokyo — New York</span>
       <span>•</span>
      <span>Free Worldwide Shipping on orders over $250</span>
      <span>•</span>
      <span>New Collection: Autumn/Winter '25 Available Now</span>
      <span>•</span>
      <span>Paris — Tokyo — New York</span>
    </div>
  </div>
);