'use client';

import React from 'react';

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

const QuoteSection = ({ quote, cite }: { quote: string; cite: string }) => (
  <div className="bg-black/20 rounded-xl p-8 text-center my-12">
    <blockquote className="font-playfair italic text-xl md:text-2xl leading-relaxed mb-4">
      &quot;{quote}&quot;
    </blockquote>
    <cite className="title-font text-[#C9A227]">— {cite}</cite>
  </div>
);

export default function Childhood() {
  return (
    <section id="childhood" className="py-24 px-6 bg-gradient-to-br from-[#5D4E37] to-[#3E2723] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 1 • 1861-1877
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Childhood & Early Influences
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              The formative years that planted the seeds of nationalism
            </p>
          </div>
        </ScrollReveal>

        {/* Birth and Family */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Birth and Family Background">
              <p className="opacity-90 leading-relaxed mb-4">
                José Protasio Rizal Mercado y Alonso Realonda was born on <strong>June 19, 1861</strong>, in Calamba, Laguna.
                The seventh of eleven children, he was born into a prosperous ilustrado family that valued education and intellectual
                cultivation.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                His father, <strong>Francisco Mercado</strong>, was a successful tenant farmer and provided a stable, cultured home environment.
                His mother, <strong>Teodora Alonso</strong>, was an educated woman who taught José to read at age three through the traditional
                cartilla method. She was his first teacher and greatest influence.
              </p>
              <p className="opacity-90 leading-relaxed">
                <strong>Ideological Impact:</strong> Growing up in a family that valued both Spanish education and Filipino dignity created
                in Rizal an early sense that Filipinos were intellectually equal to their colonizers—a belief that would drive his reformist
                ideology.
              </p>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="The Moth and the Flame">
              <p className="opacity-90 leading-relaxed mb-4">
                Teodora Alonso frequently told young José the story of the moth drawn irresistibly to the flame, despite knowing it would
                lead to its death. The moth believed that to reach the light—the source of beauty and truth—was worth any sacrifice.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                This tale would prove prophetic. Throughout his life, Rizal was drawn to the "light" of knowledge, truth, and freedom,
                even when he knew the Spanish authorities would consider it dangerous. Like the moth, he could not resist seeking
                enlightenment despite the risks.
              </p>
              <p className="opacity-90 leading-relaxed">
                <strong>Reflection:</strong> This story instilled in Rizal the belief that <em>the pursuit of truth justifies personal
                sacrifice</em>—a philosophy that would ultimately lead him to martyrdom at age 35.
              </p>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Brother Paciano's Influence */}
        <ScrollReveal>
          <div className="mb-12">
            <ContentCard title="Paciano Rizal: The Political Mentor">
              <p className="opacity-90 leading-relaxed mb-4">
                José's older brother <strong>Paciano</strong> served as his guardian, financial supporter, and most importantly, his
                political awakener. Paciano had been a student of <strong>Father José Burgos</strong>, one of the Filipino priests who
                would later be executed in 1872.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                Paciano exposed José to liberal ideas, European Enlightenment philosophy, and the injustices of Spanish colonial rule.
                He financed José's education from his own income, making enormous personal sacrifices to ensure his younger brother could
                study in Europe.
              </p>
              <div className="bg-white/5 border-l-4 border-[#C9A227] p-4 rounded-r-lg mt-4">
                <p className="text-sm opacity-90">
                  <strong>Political Evolution:</strong> Paciano radicalized José's worldview, transforming him from a bright student
                  into a politically conscious Filipino. Without Paciano's guidance and financial support, Rizal's nationalist awakening
                  might never have occurred.
                </p>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>

        {/* GOMBURZA Execution - The Awakening */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <div>
                  <h3 className="title-font text-2xl text-red-300 mb-1">The GOMBURZA Execution (1872)</h3>
                  <p className="text-sm text-red-200">The event that shattered innocence and planted the seeds of revolution</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">What Happened:</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    On <strong>February 17, 1872</strong>, three Filipino secular priests—<strong>Mariano Gómez</strong>,
                    <strong> José Burgos</strong>, and <strong>Jacinto Zamora</strong>—were publicly executed by garrote (strangulation)
                    at Bagumbayan field (now Luneta Park).
                  </p>
                  <p className="opacity-90 text-sm leading-relaxed">
                    They were falsely accused of leading the Cavite Mutiny, a brief uprising by Filipino soldiers and workers at the
                    Cavite arsenal. In reality, the mutiny was a labor dispute, but Spanish authorities used it as a pretext to eliminate
                    Filipino priests who had been advocating for equal rights within the Church.
                  </p>
                </div>

                <div>
                  <h4 className="text-[#C9A227] font-semibold mb-3">Impact on 11-Year-Old Rizal:</h4>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    Rizal witnessed the aftermath of the execution and the terror it spread throughout the Filipino community. His brother
                    Paciano, as Father Burgos's student, was devastated and shared his grief with José.
                  </p>
                  <p className="opacity-90 text-sm leading-relaxed mb-3">
                    <strong className="text-[#C9A227]">First Political Awakening:</strong> This was the moment Rizal realized that
                    <em>even priests—educated, respectable men of God—were not safe</em> from Spanish colonial violence. If the friars
                    could kill their own clergy, what hope did ordinary Filipinos have for justice?
                  </p>
                  <p className="opacity-90 text-sm leading-relaxed">
                    Years later, Rizal would dedicate <em>El Filibusterismo</em> to GOMBURZA with the inscription:
                    <em className="block mt-2 pl-4 border-l-2 border-[#C9A227] italic">
                      &quot;To the memory of the priests, Don Mariano Gomez (85 years old), Don Jose Burgos (30 years old),
                      and Don Jacinto Zamora (35 years old). Executed in the Bagumbayan Field on the 28th of February, 1872.&quot;
                    </em>
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-black/30 p-4 rounded-lg">
                <p className="text-sm text-[#C9A227] font-semibold mb-2">Ideological Transformation:</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  The GOMBURZA execution taught Rizal that <strong>Spanish colonial rule was inherently unjust</strong> and could not
                  be reformed through appeals to morality or religion. This realization planted the seeds of his later belief that
                  Filipinos must fight for their rights through education, organization, and ultimately, if necessary, resistance.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal>
          <QuoteSection
            quote="Without freedom, there can be no real education. Without education, there can be no real progress."
            cite="José Rizal, reflecting on his formative years"
          />
        </ScrollReveal>

        {/* Ateneo Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Ateneo Municipal de Manila (1872-1877)">
              <p className="opacity-90 leading-relaxed mb-4">
                At age 11, Rizal enrolled at the <strong>Jesuit-run Ateneo Municipal</strong>. Unlike the Dominican friars at UST
                (which he would attend later), the Jesuits were more progressive educators who encouraged critical thinking and academic
                excellence.
              </p>
              <p className="opacity-90 leading-relaxed mb-4">
                Rizal flourished at Ateneo. He consistently earned top grades, won literary contests, and developed his skills in poetry,
                sculpture, painting, and languages. He graduated in 1877 with the highest honors (<em>Sobresaliente</em>).
              </p>
              <ul className="space-y-2 text-sm opacity-90 mt-4">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Academic Excellence:</strong> Consistently placed first in his class
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Literary Development:</strong> Wrote poems and essays that showed early nationalist themes
                </li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  <strong>Artistic Talents:</strong> Excelled in sculpture, drawing, and painting
                </li>
              </ul>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Jesuit Influence on Rizal's Ideology">
              <p className="opacity-90 leading-relaxed mb-4">
                The Jesuits instilled in Rizal several principles that would define his reformist approach:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">1. Ama Nesciri ("Strive to Excel")</h4>
                  <p className="text-sm opacity-90">
                    The Jesuit motto taught Rizal that Filipinos must prove their worth through excellence. This belief drove him to
                    master multiple fields—medicine, literature, languages, sciences—to demonstrate that Filipinos were equal to any
                    European.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">2. Education as Path to Progress</h4>
                  <p className="text-sm opacity-90">
                    The Jesuits believed that education could uplift individuals and society. Rizal absorbed this philosophy completely—
                    throughout his life, he would advocate for schools, libraries, and educational reforms as the primary means of
                    liberating Filipinos.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-[#C9A227] text-sm font-bold mb-2">3. Moral Integrity Over Violence</h4>
                  <p className="text-sm opacity-90">
                    The Jesuits emphasized moral character and intellectual persuasion over force. This shaped Rizal's lifelong
                    commitment to peaceful reform, even when others turned to armed revolution.
                  </p>
                </div>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        {/* Developmental Summary */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#C9A227]/20 to-[#D4AF37]/20 border-2 border-[#C9A227] rounded-xl p-8">
            <h3 className="title-font text-2xl text-[#C9A227] mb-6 text-center">
              How Childhood Shaped the National Hero
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A227] mx-auto mb-4 flex items-center justify-center text-2xl">
                  📚
                </div>
                <h4 className="font-semibold mb-2">From Family</h4>
                <p className="text-sm opacity-90">
                  Love of learning, belief in Filipino dignity, understanding that education equals power
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A227] mx-auto mb-4 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h4 className="font-semibold mb-2">From GOMBURZA</h4>
                <p className="text-sm opacity-90">
                  Awareness of colonial injustice, realization that even innocence offers no protection, seeds of resistance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A227] mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <h4 className="font-semibold mb-2">From Ateneo</h4>
                <p className="text-sm opacity-90">
                  Excellence as resistance, education as weapon, moral integrity as foundation for reform
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#C9A227]/30">
              <p className="text-center leading-relaxed opacity-90">
                <strong className="text-[#C9A227]">The Foundation Was Laid:</strong> By age 16, Rizal had absorbed three core beliefs
                that would drive his nationalism: (1) Filipinos are intellectually equal to any people, (2) colonial injustice must be
                resisted, and (3) education is the most powerful tool for liberation. These childhood lessons would guide every decision
                he made—from writing his novels to founding La Liga Filipina to accepting martyrdom.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
