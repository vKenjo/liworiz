'use client';

import React from 'react';
import { MALOLOS_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem, QuoteSection } from './SharedComponents';

export default function MalolosLetter() {
  return (
    <section id="malolos" className="py-24 px-6 bg-gradient-to-br from-[#831843] to-[#6b0f3d] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 6 • February 22, 1889
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Letter to the Young Women of Malolos
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              Advocating women's education as liberation from friar control and path to nation-building
            </p>
          </div>
        </ScrollReveal>

        {/* Historical Context */}
        <ScrollReveal>
          <div className="bg-pink-900/30 border-2 border-pink-500/50 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">✊</span>
              <div>
                <h3 className="title-font text-2xl text-pink-300 mb-1">The Malolos Women's Courageous Stand</h3>
                <p className="text-sm text-pink-200">Twenty women who defied friars to demand education</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">What They Did:</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  In <strong>December 1888</strong>, twenty young Filipina women from Malolos, Bulacan, petitioned the
                  colonial government to establish a <strong>night school where they could learn Spanish</strong>. At the time,
                  Spanish was the language of power, law, and advancement—but friars deliberately kept Filipinos, especially
                  women, from learning it.
                </p>
                <p className="opacity-90 text-sm leading-relaxed">
                  The local Spanish friars <strong>violently opposed</strong> the petition, threatening the women with
                  excommunication and social ostracism. Yet the women persisted, and Governor-General Valeriano Weyler
                  eventually approved their request.
                </p>
              </div>

              <div>
                <h4 className="text-[#C9A227] font-semibold mb-3">Why This Was Revolutionary:</h4>
                <p className="opacity-90 text-sm leading-relaxed mb-3">
                  In colonial Philippines, women were expected to be submissive, pious, and uneducated. Friars taught that
                  <em>&quot;women's wisdom is in their silence&quot;</em> and that educated women would become rebellious and
                  lose their morality.
                </p>
                <p className="opacity-90 text-sm leading-relaxed">
                  By demanding education, these women were <strong>directly challenging both colonial and patriarchal power</strong>.
                  They understood what the friars feared: that <em>educated women could not be controlled</em>.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Rizal's Response */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Rizal's Letter (February 22, 1889)">
              <p className="opacity-90 leading-relaxed mb-4">
                When Rizal, then in Europe, heard about the Malolos women's courage, he wrote them a passionate letter of
                praise and encouragement. The letter became one of his most important political documents—a <strong>manifesto
                for women's liberation and education reform</strong>.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                Rizal argued that the friars' opposition proved exactly why education was necessary: <em>&quot;If the friars
                try so hard to keep you ignorant, it is because they know that knowledge will free you from their control.&quot;</em>
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-purple-200 leading-relaxed">
                  <strong>Strategic Importance:</strong> This letter showed Rizal understood that <em>women's liberation was
                  essential for national liberation</em>. An oppressed nation cannot free itself if half its population remains
                  in chains.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Key Messages from the Letter">
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">1. Friar Control Exposed</h4>
                  <p className="text-xs opacity-90">
                    &quot;The Filipino woman has been subjected to a double slavery: that of the home and that of the convent.
                    The friars keep women ignorant so they can control entire families through superstition.&quot;
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">2. Education as Weapon</h4>
                  <p className="text-xs opacity-90">
                    &quot;The educated woman will not be a slave to superstition. She will think for herself, question injustice,
                    and teach her children to do the same. This is what the friars fear most.&quot;
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">3. Women as Nation-Builders</h4>
                  <p className="text-xs opacity-90">
                    &quot;You who tomorrow will be the mothers of future generations—your education means the education of the
                    entire nation. Enlightened mothers raise enlightened children.&quot;
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">4. Moral Courage as Model</h4>
                  <p className="text-xs opacity-90">
                    &quot;Your bravery in defying the friars is an example for all Filipinos. You have shown that resistance is
                    possible, that we need not accept oppression as fate.&quot;
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes & Ideological Impact</h3>
        <div className="mb-12">
          {MALOLOS_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="It is a useless life that is not consecrated to a great ideal. It is like a stone wasted in the field without becoming part of any edifice."
            cite="José Rizal, Letter to the Young Women of Malolos"
          />
        </ScrollReveal>

        {/* Rizal's Feminist Vision */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6 text-center">
              Rizal's Vision: Women's Liberation = National Liberation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-[#C9A227]">Why Target Women's Education?</h4>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Rizal understood that colonial control operated through families. Friars kept women ignorant and superstitious,
                  then used mothers and wives to enforce obedience within households. By controlling women, the Church controlled
                  the entire society.
                </p>
                <p className="text-sm opacity-90 leading-relaxed">
                  <strong>Rizal's Strategy:</strong> Educate women → they reject friar manipulation → they raise children who
                  question authority → next generation is resistant to oppression. This was <em>long-term revolutionary planning</em>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-[#C9A227]">Radical for His Time</h4>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  In 1889, even many Filipino reformists believed women should remain in domestic roles. Rizal was among the
                  <strong> first Filipino intellectuals to explicitly advocate for women's rights</strong>, seeing them as equal
                  partners in the nationalist struggle.
                </p>
                <p className="text-sm opacity-90 leading-relaxed">
                  His novels feature strong women characters (María Clara, Sisa, Juli) whose suffering represents broader Filipino
                  oppression, showing that <em>women's liberation was central to his nationalist vision</em>.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#C9A227]/30">
              <p className="text-center leading-relaxed opacity-90 text-sm">
                <strong className="text-[#C9A227]">Political Evolution:</strong> This letter shows Rizal moving beyond
                elite ilustrado reform toward a <strong>broader social transformation</strong>. He recognized that true
                liberation required empowering all Filipinos—not just educated men, but women, youth, and the masses. This
                inclusive vision distinguished him from other reformists of his time.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
