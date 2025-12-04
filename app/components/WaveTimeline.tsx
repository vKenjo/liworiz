'use client';

import React, { useState } from 'react';
import { WAVE_TIMELINE } from '../data/rizal-data';

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

export default function WaveTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getYPosition = (position: 'high' | 'mid' | 'low'): number => {
    switch (position) {
      case 'high': return 20;
      case 'mid': return 50;
      case 'low': return 80;
    }
  };

  const getMarkerStyle = (type: string) => {
    switch (type) {
      case 'triumph': return { symbol: '◆', color: 'bg-emerald-500', border: 'border-emerald-500' };
      case 'setback': return { symbol: '▼', color: 'bg-red-500', border: 'border-red-500' };
      case 'martyrdom': return { symbol: '★', color: 'bg-yellow-500', border: 'border-yellow-500' };
      default: return { symbol: '●', color: 'bg-blue-500', border: 'border-blue-500' };
    }
  };

  const handlePointClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="wave-timeline" className="py-24 px-6 bg-gradient-to-b from-[#FDF6E3] to-[#F5E6D3] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              The Journey Visualized
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4 text-[#1a1a2e]">
              Timeline of Triumphs and Trials
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto text-gray-700">
              Rizal's path was not linear—it was marked by soaring victories, crushing setbacks,
              and ultimately, martyrdom that transformed defeat into eternal triumph
            </p>
          </div>
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <span className="text-emerald-500">◆</span>
              <span>Triumphs</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <span className="text-red-500">▼</span>
              <span>Setbacks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <span className="text-blue-500">●</span>
              <span>Milestones</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
              <span className="text-yellow-500">★</span>
              <span>Martyrdom</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Visualization */}
        <ScrollReveal>
          <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12 overflow-x-auto">
            {/* SVG Wave Timeline */}
            <svg viewBox="0 0 1400 200" className="w-full h-48 md:h-64" preserveAspectRatio="xMidYMid meet">
              {/* Horizontal reference lines */}
              <line x1="0" y1="20" x2="1400" y2="20" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="50" x2="1400" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="80" x2="1400" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />

              {/* Wave path connecting points */}
              <path
                d={WAVE_TIMELINE.map((point, i) => {
                  const x = (i / (WAVE_TIMELINE.length - 1)) * 1300 + 50;
                  const y = getYPosition(point.position);
                  return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }).join(' ')}
                fill="none"
                stroke="#C9A227"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Timeline points */}
              {WAVE_TIMELINE.map((point, index) => {
                const x = (index / (WAVE_TIMELINE.length - 1)) * 1300 + 50;
                const y = getYPosition(point.position);
                const markerStyle = getMarkerStyle(point.type);

                return (
                  <g key={index}>
                    {/* Point circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={hoveredIndex === index ? 8 : 6}
                      className={markerStyle.color}
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                      style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handlePointClick(point.sectionId)}
                    />

                    {/* Year label */}
                    <text
                      x={x}
                      y={y > 50 ? y - 15 : y + 20}
                      textAnchor="middle"
                      className="text-xs font-semibold"
                      fill="#1a1a2e"
                      style={{ fontSize: '11px' }}
                    >
                      {point.year}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Position labels - aligned with graph (matching y=20, 50, 80 from viewBox) */}
            <div className="absolute left-2 text-xs text-gray-500 font-semibold" style={{top: '10%'}}>HIGH</div>
            <div className="absolute left-2 text-xs text-gray-500 font-semibold" style={{top: '25%'}}>MID</div>
            <div className="absolute left-2 text-xs text-gray-500 font-semibold" style={{top: '40%'}}>LOW</div>

            {/* Tooltip/Info on hover */}
            {hoveredIndex !== null && (
              <div className="mt-8 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`${getMarkerStyle(WAVE_TIMELINE[hoveredIndex].type).color} text-white px-2 py-0.5 rounded text-xs font-bold`}>
                        {WAVE_TIMELINE[hoveredIndex].year}
                      </span>
                      <span className="title-font text-lg text-[#C9A227]">
                        {WAVE_TIMELINE[hoveredIndex].title}
                      </span>
                    </div>
                    <p className="text-sm opacity-90">{WAVE_TIMELINE[hoveredIndex].brief}</p>
                  </div>
                  <button
                    onClick={() => handlePointClick(WAVE_TIMELINE[hoveredIndex].sectionId)}
                    className="ml-4 px-3 py-1 bg-[#C9A227] text-[#1a1a2e] rounded text-xs font-semibold hover:bg-[#D4AF37] transition-colors"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Interactive instructions */}
        <ScrollReveal>
          <div className="mt-8 text-center text-sm text-gray-600 italic">
            Hover over any point to see details • Click to explore the full story
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
