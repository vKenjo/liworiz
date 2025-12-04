'use client';

import React from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
      {children}
    </div>
  );
};

export const SectionHeader = ({ label, title, subtitle, light = false }: {label: string; title: string; subtitle?: string; light?: boolean}) => (
  <div className="text-center mb-16">
    <p className={`italic text-sm tracking-[3px] uppercase mb-2 ${light ? 'text-[#C9A227]' : 'text-[#C9A227]'}`}>{label}</p>
    <h2 className={`title-font text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-[#1a1a2e]'}`}>{title}</h2>
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
    {subtitle && <p className={`text-lg italic max-w-xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

export const ContentCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all">
    <h3 className="title-font text-xl text-[#C9A227] mb-4 flex items-center gap-2">
      <span className="text-sm">◆</span> {title}
    </h3>
    {children}
  </div>
);

export const ThemeItem = ({ theme }: { theme: { title: string; description: string } }) => (
  <div className="bg-white/5 border-l-4 border-[#C9A227] py-4 px-6 rounded-r-xl mb-4">
    <h4 className="title-font text-lg text-[#C9A227] mb-2">{theme.title}</h4>
    <p className="opacity-90">{theme.description}</p>
  </div>
);

export const QuoteSection = ({ quote, cite }: { quote: string; cite: string }) => (
  <div className="bg-black/20 rounded-xl p-8 text-center my-12">
    <blockquote className="font-playfair italic text-xl md:text-2xl leading-relaxed mb-4">
      &quot;{quote}&quot;
    </blockquote>
    <cite className="title-font text-[#C9A227]">— {cite}</cite>
  </div>
);
