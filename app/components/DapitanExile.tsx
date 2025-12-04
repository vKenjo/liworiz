'use client';

import React from 'react';
import { DAPITAN_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem, QuoteSection } from './SharedComponents';

export default function DapitanExile() {
  return (
    <section id="dapitan" className="py-24 px-6 bg-gradient-to-br from-[#064e3b] to-[#022c22] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 8 • 1892-1896
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Dapitan Exile & Ideological Conflicts
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              Four years of productive exile proving Filipino capability, yet opposing the revolution
            </p>
          </div>
        </ScrollReveal>

        {/* The Exile */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Banishment to Dapitan (July 7, 1892)">
              <p className="opacity-90 leading-relaxed mb-4">
                Rizal was exiled to <strong>Dapitan, Mindanao</strong>—a remote town far from Manila's political activity.
                Spanish authorities hoped that isolation would silence him and prevent him from spreading &quot;seditious&quot;
                ideas.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                Initially, the exile was devastating. At age 31, Rizal found himself cut off from the nationalist movement he
                had inspired, his family, and the intellectual circles of Europe. He faced a choice: despair or productivity.
              </p>
              <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-emerald-200 leading-relaxed">
                  <strong>Rizal's Response:</strong> He chose to transform Dapitan into a laboratory for his reformist
                  philosophy—proving that <em>Filipinos, given freedom and education, could achieve remarkable progress</em>.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Productive Years">
              <p className="opacity-90 leading-relaxed mb-4">
                Over four years, Rizal turned exile into triumph:
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-1">🏥 Medical Practice</h4>
                  <p className="text-xs opacity-90">
                    Treated over 900 patients, performing eye surgeries including his mother's cataract operation. Charged
                    wealthy patients but treated the poor for free.
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-1">🎓 Educational Projects</h4>
                  <p className="text-xs opacity-90">
                    Founded a school for 16 boys, teaching reading, writing, Spanish, English, sciences, farming, and crafts.
                    Hands-on curriculum emphasizing practical skills.
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-1">🏗️ Community Development</h4>
                  <p className="text-xs opacity-90">
                    Designed and built a water system, improved sanitation, introduced street lighting, and taught modern
                    agricultural techniques.
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-1">🔬 Scientific Research</h4>
                  <p className="text-xs opacity-90">
                    Collected specimens, discovered three new species (including <em>Draco rizali</em>, a flying lizard),
                    corresponded with European scientists.
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-1">❤️ Josephine Bracken (1895)</h4>
                  <p className="text-xs opacity-90">
                    Met and fell in love with Josephine Bracken, who came seeking treatment for her blind adoptive father.
                    They lived together (church refused marriage without retraction). Had a stillborn son (1896).
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* The Ideological Conflict */}
        <ScrollReveal>
          <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">⚔️</span>
              <div>
                <h3 className="title-font text-2xl text-red-300 mb-1">Rizal vs. the Katipunan</h3>
                <p className="text-sm text-red-200">The painful disconnect between symbol and revolutionary reality</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">The Context: Revolution Brewing (1892-1896)</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  While Rizal built schools in Dapitan, the Philippines was radicalizing. The <strong>Katipunan</strong>,
                  founded by Andrés Bonifacio the same day Rizal was exiled, grew from dozens to thousands of members.
                  They prepared for armed revolution, using Rizal's novels as recruitment tools and invoking his name as
                  inspiration.
                </p>
                <p className="opacity-90 text-sm leading-relaxed">
                  By 1896, the Katipunan had recruited over 30,000 members and stockpiled weapons. Revolution was imminent—
                  but Rizal, isolated in Dapitan, knew nothing of its scale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 p-4 rounded-lg">
                  <h4 className="text-red-300 font-semibold mb-3">Pio Valenzuela's Visit (June 1896)</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    <strong>Pio Valenzuela</strong>, a Katipunan emissary, visited Rizal in Dapitan to seek his support
                    for the planned uprising. The Katipunan wanted Rizal to lead or at least endorse the revolution—his name
                    alone would rally thousands.
                  </p>
                  <div className="bg-red-950/50 p-3 rounded mt-3">
                    <p className="text-xs italic text-red-200">
                      &quot;Dr. Rizal, the people are ready to rise. Will you lead us to freedom?&quot;
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 p-4 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-3">Rizal's Response: Firm Opposition</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    Rizal <strong>firmly refused</strong>. His reasons:
                  </p>
                  <ul className="space-y-2 text-xs opacity-90">
                    <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                      <strong>&quot;The people are not ready&quot;</strong> — Filipinos lacked political education and unity
                    </li>
                    <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                      <strong>&quot;Lack of weapons will lead to massacre&quot;</strong> — Spain's military was too powerful
                    </li>
                    <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                      <strong>&quot;Revolution now will fail&quot;</strong> — A premature uprising would set back the cause
                    </li>
                    <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227]">
                      <strong>&quot;Continue education efforts&quot;</strong> — Advised patience and preparation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mt-6">
                <h4 className="text-yellow-300 font-semibold mb-3">The Philosophical Consistency</h4>
                <p className="text-sm text-yellow-200 leading-relaxed">
                  Rizal's opposition was <strong>consistent with his entire ideology</strong>. Remember Father Florentino's
                  message in <em>El Filibusterismo</em> (1891): <em>&quot;Freedom must be deserved by improving the mind and
                  enhancing the dignity of the individual.&quot;</em> Rizal believed Filipinos must earn freedom through
                  enlightenment, not seize it through violence.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Disconnect */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="The Tragic Irony">
              <p className="opacity-90 leading-relaxed mb-4">
                <strong>Rizal's writings inspired the revolution he opposed.</strong>
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  The Katipunan used <em>Noli Me Tangere</em> and <em>El Filibusterismo</em> as recruitment propaganda
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Bonifacio invoked Rizal's name in revolutionary speeches
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Members believed they were fulfilling Rizal's vision
                </li>
              </ul>
              <p className="opacity-90 leading-relaxed mt-4">
                Yet Rizal himself remained a cautious reformist, advocating education over insurrection. The man became a symbol
                that exceeded his own intentions.
              </p>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Why Rizal Opposed the Revolution">
              <div className="space-y-3 text-sm opacity-90">
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">1. Practical Assessment</h4>
                  <p className="text-xs">
                    Rizal correctly assessed that the Katipunan lacked adequate weapons, training, and international support.
                    A premature uprising would result in Filipino deaths with no chance of victory.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">2. Ideological Consistency</h4>
                  <p className="text-xs">
                    He genuinely believed that <em>moral and intellectual development must precede political independence</em>.
                    An uneducated, unprepared people could not sustain freedom even if they won it.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">3. Elite Perspective</h4>
                  <p className="text-xs">
                    As an ilustrado, Rizal was somewhat out of touch with the desperation and rage of the masses. From his
                    isolated position in Dapitan, he underestimated how intolerable conditions had become.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-2">4. Fear of Failure</h4>
                  <p className="text-xs">
                    He feared that a failed revolution would give Spain justification for even harsher repression and destroy
                    any hope for peaceful reform.
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Themes & Political Evolution</h3>
        <div className="mb-12">
          {DAPITAN_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="I have always been opposed to violence and acts of aggression. Reforms, if they are to last, must come from above, through government; they must be the result of evolution, of persistent work."
            cite="José Rizal, letter from Dapitan"
          />
        </ScrollReveal>

        {/* Final Analysis */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6 text-center">
              The Price of Principle: Irrelevance and Martyrdom
            </h3>
            <div className="space-y-4 text-sm opacity-90 leading-relaxed">
              <p>
                Dapitan represented both <strong>Rizal's greatest achievement and his political death</strong>. He proved that
                his reformist vision could work—Dapitan thrived under his leadership, showing that Filipinos could govern,
                educate, and develop themselves. But he also became <strong>disconnected from the revolutionary movement</strong>
                his own writings had ignited.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-900/30 p-4 rounded-lg">
                  <h4 className="text-green-300 font-semibold mb-2">What Dapitan Proved:</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      Filipinos could achieve progress without Spanish oversight
                    </li>
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      Education and community development were effective tools
                    </li>
                    <li className="pl-3 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400">
                      Rizal practiced what he preached—he didn't just write about reform, he implemented it
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg">
                  <h4 className="text-red-300 font-semibold mb-2">What It Revealed:</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      Isolation made Rizal politically irrelevant
                    </li>
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      His cautious reformism was overtaken by revolutionary fervor
                    </li>
                    <li className="pl-3 relative before:content-['✗'] before:absolute before:left-0 before:text-red-400">
                      The movement he inspired no longer needed or wanted his moderation
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 pt-6 border-t border-[#C9A227]/30">
                <strong className="text-[#C9A227]">The Ultimate Irony:</strong> When the Revolution erupted in August 1896,
                Rizal was en route to Cuba as a volunteer military doctor—trying to prove his loyalty to Spain to avoid being
                implicated in the uprising. He was arrested anyway, tried for rebellion he opposed, and executed as the
                Revolution's intellectual father. <em>His death achieved what his life could not: uniting Filipinos across
                ideological divides in the fight for independence.</em>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
