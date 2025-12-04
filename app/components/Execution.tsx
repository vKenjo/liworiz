'use client';

import React from 'react';
import { EXECUTION_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem, QuoteSection } from './SharedComponents';

export default function Execution() {
  return (
    <section id="execution" className="py-24 px-6 bg-gradient-to-br from-[#18181b] to-[#000000] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 10 • December 30, 1896
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Execution & Martyrdom
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              From reformist intellectual to eternal symbol of Filipino nationhood
            </p>
          </div>
        </ScrollReveal>

        {/* The Arrest */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="The Road to Execution">
              <p className="opacity-90 leading-relaxed mb-4">
                <strong>August 26, 1896:</strong> The Katipunan was discovered by Spanish authorities, forcing Bonifacio to
                launch the Philippine Revolution prematurely.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                <strong>September 3, 1896:</strong> Rizal, who had volunteered as a military doctor to Cuba (trying to prove
                loyalty and distance himself from the Revolution), departed the Philippines.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                <strong>October 6, 1896:</strong> While en route in Barcelona, Rizal was arrested by Spanish authorities and
                sent back to the Philippines in chains.
              </p>
              <p className="opacity-90 leading-relaxed">
                <strong>November 3, 1896:</strong> Returned to Manila, imprisoned in Fort Santiago.
              </p>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Charges">
              <p className="opacity-90 leading-relaxed mb-4">
                Rizal was charged with <strong>rebellion, sedition, and conspiracy</strong>—crimes punishable by death. The
                accusations:
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Founding the Katipunan</strong> — FALSE: Bonifacio founded it; Rizal opposed it
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Inciting revolution through his novels</strong> — TRUE in effect, though not his intent
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Publishing seditious writings</strong> — TRUE: <em>Noli</em> and <em>El Fili</em> criticized colonial rule
                </li>
              </ul>
              <div className="bg-red-900/30 border border-red-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-red-200 leading-relaxed">
                  <strong>The Truth:</strong> Rizal <em>did not</em> participate in the Revolution and <em>actively opposed</em>
                  armed uprising. But Spain needed a scapegoat—and Rizal's writings had undeniably inspired the rebels.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* The Trial */}
        <ScrollReveal>
          <div className="bg-gray-900/50 border-2 border-gray-700 rounded-xl p-8 mb-12">
            <h3 className="title-font text-2xl text-gray-300 mb-6">The Trial: A Mockery of Justice</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">December 26, 1896</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  Rizal was tried by a <strong>military court martial</strong>—not a civilian court. This ensured a predetermined
                  verdict, as military tribunals answered directly to the Governor-General who wanted Rizal dead.
                </p>
                <ul className="space-y-2 text-xs opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-red-400">
                    Denied proper legal counsel (his lawyer had only one day to prepare)
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-red-400">
                    Evidence was circumstantial and distorted
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-red-400">
                    Witnesses were coerced or fabricated
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-red-400">
                    Verdict decided before trial began
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">Rizal's Defense</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  Despite the hopeless situation, Rizal defended himself with dignity:
                </p>
                <div className="bg-black/30 p-3 rounded-lg space-y-2 text-xs italic">
                  <p className="opacity-90">
                    &quot;I had no part in the uprising. I counseled against it when asked by the Katipunan emissary.&quot;
                  </p>
                  <p className="opacity-90">
                    &quot;My novels advocated reform, not revolution. I sought to improve society through education and
                    enlightenment.&quot;
                  </p>
                  <p className="opacity-90">
                    &quot;If my writings inspired rebellion, it is because the truth always threatens tyranny.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-center opacity-90 text-sm">
                The court found Rizal <strong className="text-red-400">guilty</strong>. Sentence: <strong className="text-red-400">
                Death by firing squad</strong>. Date: December 30, 1896, at Bagumbayan field.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* The Retraction Controversy */}
        <ScrollReveal>
          <div className="bg-yellow-900/20 border-2 border-yellow-600/50 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">❓</span>
              <div>
                <h3 className="title-font text-2xl text-yellow-300 mb-1">The Retraction Controversy</h3>
                <p className="text-sm text-yellow-200">Did Rizal recant his views before execution?</p>
              </div>
            </div>

            <p className="opacity-90 text-sm leading-relaxed mb-4">
              On <strong>December 29, 1896</strong> (the night before his execution), Jesuit priests visited Rizal in Fort
              Santiago. They claimed he signed a <strong>&quot;retraction&quot;</strong> renouncing his anti-Catholic views,
              allowing him to marry Josephine Bracken in a Catholic ceremony.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-950/30 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-semibold mb-3">Evidence FOR Retraction:</h4>
                <ul className="space-y-1 text-xs opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    A retraction document exists (though some claim it's forged)
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    He married Josephine religiously hours before execution
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    Jesuit priests testified he reconciled with the Church
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-950/30 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-semibold mb-3">Evidence AGAINST Retraction:</h4>
                <ul className="space-y-1 text-xs opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    No independent witnesses to the signing
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    Document's authenticity disputed by historians
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-yellow-400">
                    Contradicts his lifelong principles
                  </li>
                  <li className="pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-yellow-400">
                    <em>Mi Último Adiós</em> (written same night) shows no recantation
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-black/30 p-4 rounded-lg">
              <p className="text-sm text-yellow-200 leading-relaxed">
                <strong>What This Reveals:</strong> Whether Rizal retracted or not, the controversy shows his <em>human vulnerability</em>.
                Facing death, he may have sought comfort in faith or wanted to legitimize his relationship with Josephine.
                <strong className="text-[#C9A227]"> Either way, it doesn't diminish his political courage</strong>—recanting
                theological views is different from betraying nationalist principles, which he never did.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* The Execution */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-red-950 to-black border-4 border-yellow-600 rounded-xl p-8 mb-12">
            <h3 className="title-font text-3xl text-yellow-400 mb-6 text-center">
              December 30, 1896 • 7:03 AM • Bagumbayan Field
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">The Final Morning</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  Rizal was awakened at 5:30 AM. He dressed calmly, said goodbye to his family (his mother, sisters, and brother
                  Paciano visited earlier), and walked steadily to Bagumbayan field (now Luneta/Rizal Park).
                </p>
                <p className="opacity-90 text-sm leading-relaxed">
                  Thousands gathered to witness the execution. The atmosphere was tense—many Filipinos wept openly, while
                  Spanish authorities celebrated the death of the &quot;filibustero.&quot;
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">The Execution Details</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                      <strong>Time:</strong> 7:03 AM
                    </li>
                    <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                      <strong>Method:</strong> Firing squad (eight Filipino soldiers)
                    </li>
                    <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                      <strong>Last words:</strong> &quot;<em>Consummatum est</em>&quot; (It is finished)—Christ's words on the cross
                    </li>
                    <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                      <strong>Final act:</strong> Requested to face the firing squad (denied); turned his head toward the rising
                      sun as bullets struck
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">The Legend</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    Witnesses reported that as Rizal fell, <strong>he twisted his body mid-fall to land face-up</strong>, eyes
                    toward the dawn sky. This detail became legendary—symbolizing that <em>even in death, Rizal turned toward
                    the light (freedom, enlightenment)</em>.
                  </p>
                  <p className="opacity-90 text-sm leading-relaxed italic">
                    Some historians question this detail's accuracy, but its symbolic power is undeniable: Rizal died looking
                    toward the future he would not live to see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Immediate Aftermath */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Immediate Impact">
              <p className="opacity-90 leading-relaxed mb-4">
                Rizal's execution had the <strong>opposite effect</strong> Spain intended:
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Outrage swept the Philippines</strong> — Even moderates turned against Spain
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>The Revolution intensified</strong> — Rizal became its martyr-symbol
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>International condemnation</strong> — Spain's brutality exposed to the world
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>&quot;Viva Rizal!&quot;</strong> became the revolutionary battle cry
                </li>
              </ul>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Transformation">
              <p className="opacity-90 leading-relaxed mb-4">
                In death, Rizal achieved what he could not in life:
              </p>
              <div className="space-y-3 text-sm opacity-90">
                <div className="bg-white/5 p-3 rounded-lg">
                  <p>
                    <strong className="text-[#C9A227]">From reformist to revolutionary:</strong> His cautious moderation was
                    forgotten; he became the symbol of radical resistance
                  </p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p>
                    <strong className="text-[#C9A227]">From intellectual to universal symbol:</strong> Accessible to all
                    Filipinos, not just the educated elite
                  </p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p>
                    <strong className="text-[#C9A227]">From divisive figure to unifying icon:</strong> All factions claimed
                    him—reformists, revolutionaries, later even collaborators
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Themes of Martyrdom & Legacy</h3>
        <div className="mb-12">
          {EXECUTION_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="It is a useless life that is not consecrated to a great ideal."
            cite="José Rizal, final writings"
          />
        </ScrollReveal>

        {/* The Ultimate Paradox */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-3xl text-[#C9A227] mb-6 text-center">
              The Ultimate Paradox: Victory Through Defeat
            </h3>
            <div className="space-y-6 text-sm opacity-90 leading-relaxed">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">📖</div>
                  <p className="font-semibold text-[#C9A227] mb-2">He wrote for reform</p>
                  <p className="text-xs">But inspired revolution</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl mb-3">✋</div>
                  <p className="font-semibold text-[#C9A227] mb-2">He opposed armed struggle</p>
                  <p className="text-xs">But became symbol of resistance</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl mb-3">⚰️</div>
                  <p className="font-semibold text-[#C9A227] mb-2">He died in failure</p>
                  <p className="text-xs">But achieved immortal victory</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#C9A227]/30">
                <p className="text-center leading-relaxed">
                  <strong className="text-[#C9A227] text-lg">José Rizal's Eternal Legacy:</strong>
                </p>
                <p className="mt-4">
                  Spain executed Rizal to silence dissent and crush the Revolution. Instead, they created the Philippines'
                  <strong className="text-[#C9A227]"> eternal national hero</strong>. His death proved that <em>martyrdom is more
                  powerful than any manifesto</em>, that <em>a symbol can outlive any single ideology</em>, and that <em>the
                  pen—wielded by a principled man willing to die for truth—can indeed be mightier than the sword</em>.
                </p>
                <p className="mt-4 text-center font-semibold text-[#C9A227]">
                  December 30 is now Rizal Day, a Philippine national holiday—a nation pauses to honor the man whose death
                  gave birth to their freedom.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
