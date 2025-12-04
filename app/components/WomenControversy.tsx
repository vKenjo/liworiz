'use client';

import React from 'react';
import { WOMEN_CONTROVERSY_THEMES } from '../data/rizal-data';
import { ScrollReveal, ContentCard, ThemeItem } from './SharedComponents';

export default function WomenControversy() {
  return (
    <section id="women-controversy" className="py-24 px-6 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="italic text-sm tracking-[3px] uppercase mb-2 text-[#C9A227]">
              Chapter 4 • 1870s–1880s
            </p>
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Conflict With Filipina Women
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
            <p className="text-lg italic max-w-2xl mx-auto opacity-90">
              Paternalistic critiques of Filipina behavior that reveal Rizal’s stricter, sometimes sexist expectations of women
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ScrollReveal>
            <ContentCard title="Where the Controversy Came From">
              <p className="opacity-90 leading-relaxed mb-4 text-sm">
                In private letters and essays from the late 1870s through the 1880s, Rizal scolded Filipina women for what he saw as
                <strong> coquetry, frivolity, and lax modesty</strong>. He echoed Spanish bourgeois standards of virtue—expecting women to
                be pious, reserved, and self-sacrificing.
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  Letters from Europe urged Filipina readers to avoid gossip, ostentation, and “tempting” dress—placing moral burden on women.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  He framed women as guardians of national virtue, but under <strong>male-defined</strong> standards that limited their agency.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  This tone jarred with his later praise of the Malolos women, exposing a tension between advocacy and control.
                </li>
              </ul>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal>
            <ContentCard title="Why It Matters to His Hero Narrative">
              <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                <p>
                  The “anti-women” controversies complicate the image of Rizal as a consistently progressive figure. They show how even reformists
                  internalized colonial-era patriarchy.
                </p>
                <p className="bg-white/10 border border-white/20 rounded-lg p-4">
                  <strong className="text-[#C9A227]">Exam angle:</strong> Rizal’s nationalism demanded moral discipline—especially from women—because he believed
                  <em>“deserving freedom”</em> required virtue. That expectation often slid into sexism.
                </p>
                <p>
                  Understanding this tension clarifies why his 1889 <em>Letter to the Young Women of Malolos</em> felt groundbreaking: it
                  reframed women not just as moral symbols but as <strong>educated actors</strong> in nation-building.
                </p>
              </div>
            </ContentCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <ContentCard title="Major Themes & Points of Tension">
            <div className="mb-2">
              {WOMEN_CONTROVERSY_THEMES.map((theme) => (
                <ThemeItem key={theme.title} theme={theme} />
              ))}
            </div>
          </ContentCard>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard title="Key Contradictions">
              <ul className="space-y-3 text-sm opacity-90">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  He condemned friar abuse of Filipinas yet also warned that women’s “immodesty” invited abuse—placing some burden back on victims rather than aggressors.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  He wanted women educated to uplift families but kept education within a narrow moral script centered on chastity and domestic virtue.
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">
                  He admired Europe’s intellectual women while urging Filipinas to be more restrained, showing how colonial and Victorian norms pulled him in opposite directions.
                </li>
              </ul>
            </ContentCard>

            <ContentCard title="How This Fits the Larger Arc">
              <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                <p>
                  The controversy sits between his youth poems and later political writings. It marks a <strong>developmental detour</strong>
                  where nationalist discipline overshadowed gender equality.
                </p>
                <p>
                  By the time he wrote the Malolos letter (1889), Rizal redirected that discipline toward empowering women through education,
                  not merely policing them. The shift suggests <em>learning from critique</em>, not a fully consistent feminism.
                </p>
                <p className="bg-white/10 border border-white/20 rounded-lg p-4">
                  Use this chapter to argue that Rizal’s heroism is <strong>dynamic and contested</strong>: he evolved, but he also carried
                  patriarchal blind spots.
                </p>
              </div>
            </ContentCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
