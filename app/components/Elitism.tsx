'use client';

import React from 'react';
import { ELITISM_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem } from './SharedComponents';

export default function Elitism() {
  return (
    <section id="elitism" className="py-24 px-6 bg-gradient-to-br from-[#6b7280] to-[#4b5563] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 2 • 1875–1882
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Elitist Tendencies & Class Bias
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              Ateneo and UST years showing Rizal’s ilustrado lens and early bias toward “refined” classes
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="How This Bias Appeared">
              <p className="opacity-90 leading-relaxed mb-3 text-sm">
                While studying in Ateneo and UST, Rizal embraced European etiquette and Jesuit standards of refinement. In letters he contrasted
                “cultured” manners with what he called “uncultured” or “indolent” habits among uneducated indios.
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  He linked dignity to education, writing that ignorance keeps people in a state of slavery—equating lack of schooling with social inferiority.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Travel notes praised European discipline while criticizing local customs he deemed coarse, mirroring ilustrado class attitudes.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  His closest networks were fellow ilustrados and peninsular mentors, reinforcing class-coded expectations about conduct and education.
                </li>
              </ul>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Why It Matters">
              <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                <p>
                  Documented class bias shows his reformism was shaped by an ilustrado social position; seeing that context clarifies his later push to
                  widen education and civic participation.
                </p>
                <p className="bg-white/10 border border-white/20 rounded-lg p-4">
                  <strong className="text-[#C9A227]">Exam angle:</strong> Rizal's belief that "ignorance is slavery" motivated his novels and reforms, but it also
                  signaled impatience with compatriots who lacked formal schooling.
                </p>
                <p>
                  Understanding this tension helps explain why he framed uplift through education and moral discipline—assumptions rooted in ilustrado values.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <ContentCard title="Major Themes">
            <div className="mb-2">
              {ELITISM_THEMES.map((theme) => (
                <ThemeItem key={theme.title} theme={theme} />
              ))}
            </div>
          </ContentCard>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard title="Sources & Signals">
              <ul className="space-y-3 text-sm opacity-90">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  School reports and letters from Ateneo/UST years praise European-style discipline and criticize “vulgar” habits at home.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Essays later (e.g., on indolence) equate ignorance with bondage and urge education as the path to respectability.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Personal networks: mostly mestizo/ilustrado peers and peninsular mentors, reinforcing class-coded expectations.
                </li>
              </ul>
            </ContentCard>

            <ContentCard title="Trajectory Afterward">
              <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                <p>
                  As he traveled and saw wider injustice, Rizal broadened his audience: founding La Liga to include artisans and workers and writing for mass
                  readership in reformist periodicals.
                </p>
                <p className="bg-white/10 border border-white/20 rounded-lg p-4">
                  The shift does not erase early bias, but it shows an evolution from class-limited reform toward wider social inclusion.
                </p>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
