'use client';

import React from 'react';
import { LA_LIGA_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem, QuoteSection } from './SharedComponents';

export default function LaLigaFilipina() {
  return (
    <section id="la-liga" className="py-24 px-6 bg-gradient-to-br from-[#92400e] to-[#78350f] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 7 • July 3, 1892
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              La Liga Filipina
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              The last organized attempt at peaceful reform before revolutionary split
            </p>
          </div>
        </ScrollReveal>

        {/* The Formation */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Founding: July 3, 1892">
              <p className="opacity-90 leading-relaxed mb-4">
                After ten years in Europe writing, studying, and organizing, Rizal returned to the Philippines on
                <strong> June 26, 1892</strong>. His purpose: to establish a formal organization that could unite Filipinos
                and pursue reform through legitimate, peaceful means.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                On <strong>July 3, 1892</strong>, at a house on Azcarraga Street in Manila, Rizal and his supporters founded
                <strong> La Liga Filipina</strong> (The Philippine League). It was structured like a Masonic lodge—secret,
                hierarchical, and oath-bound.
              </p>
              <div className="bg-orange-900/30 border border-orange-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-orange-200 leading-relaxed">
                  <strong>The Motto:</strong> &quot;Unus Instar Omnium&quot; (One Like All) — emphasizing unity and mutual
                  support among all Filipinos regardless of class or region.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Four-Fold Aims">
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg border-l-4 border-[#C9A227]">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">1. Unite the Entire Archipelago</h4>
                  <p className="text-xs opacity-90">
                    To forge a cohesive Filipino identity across the diverse islands, languages, and ethnic groups—creating
                    &quot;Filipinos&quot; rather than Tagalogs, Visayans, Ilocanos, etc.
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border-l-4 border-[#C9A227]">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">2. Mutual Protection</h4>
                  <p className="text-xs opacity-90">
                    Against violence and injustice—providing legal aid, defending members from arbitrary arrests, and
                    exposing abuses
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border-l-4 border-[#C9A227]">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">3. Defense of All Just Interests</h4>
                  <p className="text-xs opacity-90">
                    Economic, legal, and cultural—protecting Filipino businesses, land rights, and educational opportunities
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border-l-4 border-[#C9A227]">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">4. Promote Education, Agriculture, Commerce</h4>
                  <p className="text-xs opacity-90">
                    Practical programs for national development—schools, cooperatives, and economic self-sufficiency
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Concrete Programs */}
        <ScrollReveal>
          <div className="mb-12">
            <ContentCard title="Practical Reform Programs">
              <p className="opacity-90 leading-relaxed mb-4">
                Unlike the purely intellectual Propaganda Movement in Europe, La Liga was designed for <strong>concrete action</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Cooperative Stores:</strong> Break Spanish mercantile monopoly by pooling resources
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Educational Fund:</strong> Send talented Filipino youth to study abroad
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Legal Defense:</strong> Provide lawyers for victims of injustice
                  </li>
                </ul>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Provincial Schools:</strong> Build schools in rural areas
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Communication Network:</strong> Foster unity between islands
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <strong>Agricultural Development:</strong> Improve farming techniques and infrastructure
                  </li>
                </ul>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>

        {/* The Abrupt End */}
        <ScrollReveal>
          <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">⚠️</span>
              <div>
                <h3 className="title-font text-2xl text-red-300 mb-1">Arrest and Dissolution (July 6, 1892)</h3>
                <p className="text-sm text-red-200">La Liga lasted only three days</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">What Happened:</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  On <strong>July 6, 1892</strong>—just <strong>three days</strong> after La Liga's founding—Governor-General
                  Eulogio Despujol ordered Rizal's arrest. He was charged with circulating &quot;seditious&quot; materials
                  (anti-friar publications) and being a <em>filibustero</em> (subversive).
                </p>
                <p className="opacity-90 text-sm leading-relaxed">
                  On <strong>July 7, 1892</strong>, Rizal was exiled to <strong>Dapitan, Mindanao</strong> without trial.
                  La Liga immediately dissolved in his absence—without Rizal's leadership, the organization had no direction.
                </p>
              </div>

              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">Why Spain Feared It:</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  Spanish authorities recognized that La Liga, despite its peaceful rhetoric, was <strong>potentially more
                  dangerous than armed rebellion</strong>. Why? Because:
                </p>
                <ul className="space-y-2 text-xs opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                    It could unite Filipinos across class and regional divides
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                    It built economic and educational infrastructure independent of Spanish control
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                    It created organized resistance that couldn't be crushed by military force
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Split */}
        <ScrollReveal>
          <div className="mb-12">
            <ContentCard title="The Fatal Split: La Liga's Legacy">
              <p className="opacity-90 leading-relaxed mb-4">
                After Rizal's exile, La Liga's members split into two factions with opposing strategies:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <h4 className="text-blue-300 font-semibold mb-3">The Reformists (Cuerpo de Compromisarios)</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Led by moderates like <strong>Apolinario Mabini</strong>, this group continued trying peaceful reform
                    through legal channels, petitions, and cooperation with sympathetic Spaniards.
                  </p>
                  <p className="text-xs opacity-75 italic">
                    &quot;We can still achieve reform without bloodshed if we persist.&quot;
                  </p>
                </div>

                <div className="bg-red-900/30 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="text-red-300 font-semibold mb-3">The Revolutionaries (Katipunan)</h4>
                  <p className="text-sm opacity-90 mb-3">
                    On <strong>July 7, 1892</strong> (the same day Rizal was exiled), <strong>Andrés Bonifacio</strong>
                    founded the <strong>Katipunan</strong>, a secret revolutionary society committed to armed liberation.
                  </p>
                  <p className="text-xs opacity-75 italic">
                    &quot;Spain will never grant reforms. We must take freedom by force.&quot;
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                <p className="text-sm text-yellow-200 leading-relaxed">
                  <strong>The Tragic Irony:</strong> La Liga's dissolution proved to radicals that <em>peaceful reform was
                  impossible</em>. If Spain arrested Rizal—a peaceful intellectual—for merely organizing a civic group, then
                  clearly negotiation was futile. La Liga's failure made the Revolution inevitable.
                </p>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Themes & Historical Significance</h3>
        <div className="mb-12">
          {LA_LIGA_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="The Filipino people, forgetful of their individualism, will have to learn to unite as one people in order to achieve their common objectives."
            cite="José Rizal, La Liga Filipina Constitution"
          />
        </ScrollReveal>

        {/* Developmental Analysis */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6 text-center">
              Rizal's Last Stand for Peaceful Reform
            </h3>
            <div className="space-y-4 text-sm opacity-90 leading-relaxed">
              <p>
                La Liga represented <strong>Rizal's final attempt to prove that reform could work</strong>. After ten years
                writing novels and essays in Europe, he returned home to show that Filipinos could organize, self-govern, and
                achieve progress through legitimate means.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">What It Proved:</h4>
                  <ul className="space-y-2 text-xs">
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      Filipinos could organize sophisticated civic institutions
                    </li>
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      There was widespread desire for reform across social classes
                    </li>
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      Rizal's ideas had practical applications, not just theoretical
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">What It Revealed:</h4>
                  <ul className="space-y-2 text-xs">
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      Spain would not tolerate even peaceful Filipino organization
                    </li>
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      Reform through legal channels was impossible under colonial rule
                    </li>
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      Rizal's moderate approach was losing ground to revolutionary sentiment
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 pt-6 border-t border-[#C9A227]/30">
                <strong className="text-[#C9A227]">Political Evolution:</strong> La Liga's three-day lifespan marked the
                <strong> end of Rizal's active reformism and the beginning of his political irrelevance</strong>. Exiled to
                Dapitan, he would spend the next four years building schools and treating patients—proving Filipino capability
                but disconnected from the revolutionary movement his writings had inspired. By the time the Revolution erupted
                in 1896, Rizal was a symbol, not a leader.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
