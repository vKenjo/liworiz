'use client';

import React from 'react';
import { SA_AKING_THEMES } from '../data/rizal-data';

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
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
      {children}
    </div>
  );
};

const ContentCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all">
    <h3 className="title-font text-xl text-[#C9A227] mb-4 flex items-center gap-2">
      <span className="text-sm">◆</span> {title}
    </h3>
    {children}
  </div>
);

const ThemeItem = ({ theme }: { theme: { title: string; description: string } }) => (
  <div className="bg-white/5 border-l-4 border-[#C9A227] py-4 px-6 rounded-r-xl mb-4">
    <h4 className="title-font text-lg text-[#C9A227] mb-2">{theme.title}</h4>
    <p className="opacity-90">{theme.description}</p>
  </div>
);

export default function SaAkingMgaKababata() {
  return (
    <section id="sa-aking" className="py-24 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 2 • ~1869
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Sa Aking Mga Kababata
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              &quot;To My Fellow Youth&quot; — Language as the soul of national identity
            </p>
          </div>
        </ScrollReveal>

        {/* Context Note */}
        <ScrollReveal>
          <div className="bg-blue-900/30 border-2 border-blue-400/50 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="title-font text-lg text-blue-200 mb-2">Note on Attribution</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  While modern scholarship questions the authorship of this poem (no manuscript exists in Rizal's hand, and it first
                  appeared in 1906), its <strong>themes and message</strong> are consistent with Rizal's lifelong beliefs about language,
                  youth, and education. For this examination, we focus on <em>the content and its reflection of nationalist ideology</em>
                  rather than the authorship debate.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Poem Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Key Verses (English Translation)">
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-[#C9A227]">
                  <p className="font-playfair italic text-sm leading-relaxed mb-2">
                    &quot;Ang hindi magmahal sa kanyang salita<br/>
                    Mahigit sa hayop at malansang isda&quot;
                  </p>
                  <p className="text-xs opacity-75 mt-2">
                    <strong>Translation:</strong> &quot;One who does not love his own language<br/>
                    Is worse than a beast or a stinking fish&quot;
                  </p>
                </div>

                <div className="bg-black/20 p-4 rounded-lg border-l-4 border-[#C9A227]">
                  <p className="font-playfair italic text-sm leading-relaxed mb-2">
                    &quot;Ang wikang Tagalog tulad din sa Latin<br/>
                    Sa Ingles, Kastila at salitang anghel,<br/>
                    Sapagka't ang Poong maalam tumingin<br/>
                    Ang siyang naggawad, nagbigay sa atin.&quot;
                  </p>
                  <p className="text-xs opacity-75 mt-2">
                    <strong>Translation:</strong> &quot;The Tagalog language is like Latin,<br/>
                    Like English, Spanish and the tongue of angels,<br/>
                    For God, who is wise and just,<br/>
                    Gave it to us as He did to all.&quot;
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Core Message">
              <p className="opacity-90 leading-relaxed mb-4">
                The poem makes a radical assertion for its time: <strong>Tagalog is equal in dignity to Latin, Spanish, and English</strong>.
                This directly challenged the Spanish colonial narrative that indigenous languages were "dialects" inferior to European
                tongues.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                By claiming that <em>God gave Filipinos their language just as He gave other nations theirs</em>, the poem asserts that
                linguistic—and by extension, cultural—equality is divinely ordained, not something that must be earned or granted by
                colonial masters.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mt-4">
                <p className="text-sm text-yellow-200 leading-relaxed">
                  <strong>Revolutionary Implication:</strong> If Filipinos' language is equal to Spanish, then Filipinos themselves
                  are equal to Spaniards. This linguistic nationalism provided the foundation for political nationalism.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Themes */}
        <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes & Their Impact on Rizal's Ideology</h3>
        <div className="mb-12">
          {SA_AKING_THEMES.map((theme) => (
            <ScrollReveal key={theme.title}>
              <ThemeItem theme={theme} />
            </ScrollReveal>
          ))}
        </div>

        {/* How This Shaped Rizal's Views */}
        <ScrollReveal>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-12">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6">
              How This Shaped Rizal's Development
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">
                  1. Language = Liberation
                </h4>
                <p className="opacity-90 leading-relaxed text-sm">
                  Throughout his life, Rizal advocated for education in the vernacular. In his <em>Letter to the Young Women of Malolos</em>
                  (1889) and his essays, he argued that Filipinos should be taught in Tagalog and other native languages, not just Spanish.
                  He believed that <strong>mastery of one's own language precedes mastery of foreign languages</strong>—you cannot truly
                  learn Spanish if you don't first have a strong foundation in your mother tongue.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">
                  2. Youth as Agents of Cultural Preservation
                </h4>
                <p className="opacity-90 leading-relaxed text-sm">
                  The poem addresses "mga kababata" (fellow youth), establishing a pattern that Rizal would repeat throughout his works:
                  <strong> positioning young Filipinos as the vanguard of national awakening</strong>. This is seen in:
                </p>
                <ul className="mt-3 space-y-2 text-sm opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <em>A La Juventud Filipina</em> (1879) — calling youth the "fair hope of the Fatherland"
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    <em>Letter to the Young Women of Malolos</em> (1889) — praising young women for seeking education
                  </li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                    Student characters in <em>Noli</em> and <em>El Fili</em> representing different responses to oppression
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">
                  3. Cultural Pride as Foundation for Political Rights
                </h4>
                <p className="opacity-90 leading-relaxed text-sm">
                  The poem's assertion that Tagalog is equal to Latin and Spanish is not merely linguistic—it's <strong>political</strong>.
                  Rizal's strategy was always to prove Filipino worth through achievement: if Filipinos could demonstrate they were culturally,
                  intellectually, and morally equal (or superior) to Spaniards, then Spain's justification for colonial rule collapsed.
                </p>
                <p className="opacity-90 leading-relaxed text-sm mt-3">
                  This is why Rizal mastered 22+ languages, excelled in multiple fields (medicine, literature, art, science), and wrote
                  his novels in flawless Spanish—he was <em>performing Filipino equality</em> to undermine colonial narratives of inherent
                  inferiority.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Connection to Later Works */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ContentCard title="Echoes in Noli Me Tangere">
              <p className="opacity-90 leading-relaxed mb-4 text-sm">
                In <em>Noli</em>, Ibarra's plan to build a school represents the poem's belief in education as liberation. He specifically
                wants to teach in ways that <strong>respect Filipino culture and language</strong>, not merely impose Spanish education.
              </p>
              <p className="opacity-90 leading-relaxed text-sm">
                The character of <strong>Pilosopo Tasio</strong> (the philosopher) laments that Filipinos are taught to despise their
                own language and culture. He says: <em>&quot;Why do we learn Spanish when we are forced to forget our own tongue?&quot;</em>
                This echoes the poem's message directly.
              </p>
            </ContentCard>

            <ContentCard title="Echoes in El Filibusterismo">
              <p className="opacity-90 leading-relaxed mb-4 text-sm">
                The students in <em>El Fili</em> debate whether to establish a <strong>Spanish Language Academy</strong> or schools
                teaching in Tagalog. This reflects Rizal's ongoing concern with linguistic colonization.
              </p>
              <p className="opacity-90 leading-relaxed text-sm">
                Father Florentino's final speech includes the idea that Filipinos must <strong>deserve freedom by developing their
                minds and dignity</strong>—which requires education in their own language and preservation of their cultural identity,
                just as the poem advocated.
              </p>
            </ContentCard>
          </div>
        </ScrollReveal>

        {/* Developmental Summary */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-4 text-center">
              The Foundation of Linguistic Nationalism
            </h3>
            <p className="text-center leading-relaxed opacity-90 mb-6">
              Whether or not Rizal wrote this specific poem, its themes were <strong>central to his nationalist ideology</strong>:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/5 p-6 rounded-xl">
                <div className="text-3xl mb-3">🗣️</div>
                <h4 className="font-semibold mb-2 text-[#C9A227]">Language = Identity</h4>
                <p className="text-sm opacity-90">
                  Your native language is not inferior—it is the soul of your nation and must be preserved
                </p>
              </div>

              <div className="text-center bg-white/5 p-6 rounded-xl">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2 text-[#C9A227]">Youth = Hope</h4>
                <p className="text-sm opacity-90">
                  Young Filipinos must be the agents of cultural preservation and national awakening
                </p>
              </div>

              <div className="text-center bg-white/5 p-6 rounded-xl">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold mb-2 text-[#C9A227]">Education = Power</h4>
                <p className="text-sm opacity-90">
                  True education respects and builds upon one's native language and culture
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C9A227]/30">
              <p className="text-center leading-relaxed opacity-90 text-sm">
                <strong className="text-[#C9A227]">Political Evolution:</strong> This early articulation of linguistic nationalism
                provided Rizal with a lifelong framework: <em>Filipinos are not inferior—colonial narratives are lies</em>. This belief
                gave him the confidence to challenge Spanish authority through his writings and ultimately accept martyrdom for Filipino
                dignity.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
