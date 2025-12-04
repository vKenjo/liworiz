'use client';

import React from 'react';
import { REQUIRED_ELEMENTS } from '../data/rizal-data';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "" }) => {
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
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

export default function RequiredElements() {
  const handleCardClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="required-elements" className="py-24 px-6 bg-gradient-to-b from-[#F5E6D3] to-[#FDF6E3] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Final Examination Overview
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4 text-[#1a1a2e]">
              Rizal's Road to Nationalism and Heroism
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-3xl mx-auto text-gray-700">
              Ten critical elements marking José Rizal's ideological and political evolution toward becoming
              the Philippine National Hero and leading figure of Filipino nationalism
            </p>
          </div>
        </ScrollReveal>

        {/* Flowchart Timeline */}
        <div className="relative">
          {REQUIRED_ELEMENTS.map((element, index) => (
            <div key={element.id}>
              <ScrollReveal>
                {/* Flowchart Card */}
                <button
                  onClick={() => handleCardClick(element.sectionId)}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left w-full border-2 border-transparent hover:border-[#C9A227] mb-4"
                >
                  {/* Number Badge */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4AF37] flex items-center justify-center shadow-lg z-10">
                    <span className="title-font text-xl text-[#1a1a2e] font-bold">{element.number}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-8">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="title-font text-xl text-[#1a1a2e] group-hover:text-[#C9A227] transition-colors pr-2">
                        {element.title}
                      </h3>
                      {/* Arrow indicator */}
                      <div className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-[#C9A227] mb-3 tracking-wider">
                      {element.year}
                    </div>

                    <p className="text-base text-gray-600 leading-relaxed">
                      {element.brief}
                    </p>

                    {/* Color indicator */}
                    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${element.color} opacity-60 group-hover:opacity-100 transition-opacity mt-4`}></div>
                  </div>
                </button>
              </ScrollReveal>

              {/* Connecting Arrow */}
              {index < REQUIRED_ELEMENTS.length - 1 && (
                <div className="flex justify-center my-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#C9A227]">
                    {/* Vertical line */}
                    <line x1="20" y1="0" x2="20" y2="30" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
                    {/* Arrow head */}
                    <polygon points="20,40 15,30 25,30" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow Indicator */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-[#1a1a2e] text-white px-6 py-3 rounded-full shadow-lg">
              <svg className="w-5 h-5 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Click any element to explore its detailed section</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
