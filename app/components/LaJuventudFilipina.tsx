'use client';

import React from 'react';
import { LA_JUVENTUD_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem, QuoteSection } from './SharedComponents';

export default function LaJuventudFilipina() {
  return (
    <section id="la-juventud" className="py-24 px-6 bg-gradient-to-br from-[#0f766e] to-[#115e59] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 3 • 1879
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              A La Juventud Filipina
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              &quot;To the Filipino Youth&quot; — Declaring youth as the hope of the nation
            </p>
          </div>
        </ScrollReveal>

        {/* Contest Victory Context */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="The Historic Victory">
              <p className="opacity-90 leading-relaxed mb-4">
                In <strong>1879</strong>, at age 18, José Rizal submitted this poem to a literary contest organized by the
                <strong> Liceo Artistico Literario de Manila</strong>. Competing against Spanish and mestizo poets, Rizal won
                <strong> first prize</strong>, marking the first time a Filipino poem celebrating Filipino youth triumphed over
                Spanish entries.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                The victory was significant beyond its literary merit—it proved that <em>Filipinos could excel in intellectual
                competitions against their colonizers</em>, directly challenging Spanish narratives of native inferiority.
              </p>
              <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-emerald-200 leading-relaxed">
                  <strong>Ideological Impact:</strong> This early recognition gave Rizal confidence that Filipino achievement
                  could be a form of resistance—excellence as political statement.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Key Verses (English Translation)">
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-[#C9A227]">
                  <p className="font-playfair italic text-sm leading-relaxed mb-2">
                    &quot;Hold high the brow serene,<br/>
                    O youth, where now you stand;<br/>
                    Let the bright sheen<br/>
                    Of your grace be seen,<br/>
                    Fair hope of my fatherland!&quot;
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-[#C9A227]">
                  <p className="font-playfair italic text-sm leading-relaxed mb-2">
                    &quot;Come now, thou genius grand,<br/>
                    And bring down inspiration;<br/>
                    With thy mighty hand,<br/>
                    Swifter than the wind,<br/>
                    Raise the eager mind to higher station.&quot;
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-[#C9A227]">
                  <p className="font-playfair italic text-sm leading-relaxed mb-2">
                    &quot;Descend with the pleasing light<br/>
                    Of art and science to the plain,<br/>
                    Oh youth, and break the chains<br/>
                    That have bound your spirit tight.&quot;
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Core Message */}
        <ScrollReveal>
          <div className="mb-12">
            <ContentCard title="The Revolutionary Message">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">Youth as National Salvation</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    Rizal explicitly calls Filipino youth the <strong>&quot;fair hope of my fatherland&quot;</strong>—placing
                    the burden and honor of national liberation squarely on the younger generation. This was radical: rather
                    than waiting for Spanish reforms, Rizal argued that <em>Filipinos themselves</em>, through their youth,
                    would achieve progress.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">Education as Liberation</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    The poem calls for youth to pursue <strong>&quot;art and science&quot;</strong> as the means to
                    <strong>&quot;break the chains&quot;</strong> of oppression. This establishes Rizal's lifelong belief:
                    <em>intellectual excellence is the weapon against colonialism</em>. Not violence, not rebellion—but
                    education, achievement, and cultural pride.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                <p className="text-sm text-yellow-200 leading-relaxed">
                  <strong>Political Evolution:</strong> At 18, Rizal had already formulated the philosophy that would guide
                  his entire life: <em>Filipinos must prove their worth through excellence to earn respect and rights</em>.
                  This is why he later wrote novels, practiced medicine, mastered languages, and conducted scientific research—
                  he was living the poem's call to action.
                </p>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes & Their Impact</h3>
        <div className="mb-12">
          {LA_JUVENTUD_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="The youth is the hope of our future."
            cite="José Rizal, A La Juventud Filipina"
          />
        </ScrollReveal>

        {/* Continuity Through Rizal's Life */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6 text-center">
              A Lifelong Commitment to Youth Empowerment
            </h3>
            <div className="space-y-4 text-sm opacity-90 leading-relaxed">
              <p>
                This poem established a pattern Rizal would repeat throughout his works—<strong>addressing and empowering
                Filipino youth</strong>:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>1887 (Noli Me Tangere):</strong> Ibarra's plan to build a school represents investing in youth
                  education as the path to reform
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>1889 (Letter to Young Women of Malolos):</strong> Praises 20 young women for seeking education,
                  calling them models for all Filipinos
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>1891 (El Filibusterismo):</strong> Student characters (Isagani, Basilio) represent different
                  ideological responses to oppression
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>1892 (La Liga Filipina):</strong> Included programs to educate youth and send talented students
                  abroad
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>1892-1896 (Dapitan):</strong> Founded a school for boys, personally teaching them sciences,
                  languages, and practical skills
                </li>
              </ul>
              <p className="mt-6 pt-6 border-t border-[#C9A227]/30">
                <strong className="text-[#C9A227]">Ideological Consistency:</strong> From age 18 to his execution at 35,
                Rizal never wavered from this belief: <em>invest in youth, empower them through education, and they will
                liberate the nation</em>. This poem was not youthful idealism—it was the foundation of his nationalist
                program.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
