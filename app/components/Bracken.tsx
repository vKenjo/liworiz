'use client';

import React from 'react';
import { BRACKEN_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem } from './SharedComponents';

export default function Bracken() {
  return (
    <section id="bracken" className="py-24 px-6 bg-gradient-to-br from-[#A16207] to-[#854D0E] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 8 • 1895
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Josephine Bracken Controversy
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              Accusations of impropriety and family conflict over Rizal’s relationship with Josephine in Dapitan
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="What Happened (Documented)">
              <ul className="space-y-3 text-sm opacity-90 leading-relaxed">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Josephine arrived in Dapitan in 1895 with her stepfather seeking eye treatment; Rizal and Josephine began living together soon after.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  The local priest (Fr. Antonio Obach) refused to marry them unless Rizal signed a retraction; they stayed together without a Church wedding, prompting accusations of immorality from critics.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Rizal’s family, especially in Calamba, opposed Josephine and warned he was being spied on; letters record their distrust and disapproval of the union.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Rizal acknowledged the conflict but maintained the relationship, later reporting that Josephine miscarried their child in Dapitan.
                </li>
              </ul>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Why It Matters to His Narrative">
              <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                <p>
                  The controversy shows a personal defiance: Rizal kept the relationship despite family pressure and clerical conditions tied to retraction.
                </p>
                <p className="bg-white/10 border border-white/20 rounded-lg p-4">
                  It also exposed tensions between his moral advocacy and his own private life—used by opponents to question his consistency while in exile.
                </p>
                <p>
                  Factually grounding this episode highlights the social and religious constraints placed on exiles, and how personal choices became political fodder.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <ContentCard title="Major Themes">
            <div className="mb-2">
              {BRACKEN_THEMES.map((theme) => (
                <ThemeItem key={theme.title} theme={theme} />
              ))}
            </div>
          </ContentCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
