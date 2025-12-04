'use client';

import React, { useState, useEffect, useRef } from 'react';

// Import new components
import RequiredElements from './components/RequiredElements';
import WaveTimeline from './components/WaveTimeline';
import Childhood from './components/Childhood';
import SaAkingMgaKababata from './components/SaAkingMgaKababata';
import LaJuventudFilipina from './components/LaJuventudFilipina';
import MalolosLetter from './components/MalolosLetter';
import LaLigaFilipina from './components/LaLigaFilipina';
import DapitanExile from './components/DapitanExile';
import Execution from './components/Execution';

// --- TYPES ---
interface Character {
  initials: string;
  name: string;
  role: string;
  description: string;
}

interface Theme {
  title: string;
  description: string;
}

// --- DATA: CHARACTERS ---
const NOLI_CHARACTERS: Character[] = [
  { initials: 'CI', name: 'Crisóstomo Ibarra', role: 'The Idealistic Reformist', description: 'A wealthy young mestizo educated in Europe. Represents the ilustrado class and the hope for peaceful reform through education.' },
  { initials: 'MS', name: 'María Clara', role: 'The Tragic Filipina', description: 'Ibarra\'s childhood sweetheart, known for her beauty and purity. She symbolizes the idealized Filipina woman trapped by colonial society.' },
  { initials: 'E', name: 'Elías', role: 'The Revolutionary Voice', description: 'A mysterious boatman with a tragic past of injustice. Represents the masses who have suffered under colonial rule.' },
  { initials: 'PD', name: 'Padre Dámaso', role: 'The Corrupt Friar', description: 'The main antagonist — a Spanish Franciscan friar who embodies the abuse of religious authority.' },
  { initials: 'PS', name: 'Padre Salví', role: 'The Scheming Priest', description: 'The young parish priest who lusts after María Clara. Outwardly pious but secretly manipulative.' },
  { initials: 'SS', name: 'Sisa', role: 'The Suffering Mother', description: 'A tragic figure whose sons serve in the church. She goes mad from grief, representing all Filipino mothers victimized by the system.' },
];

const FILI_CHARACTERS: Character[] = [
  { initials: 'S', name: 'Simoun', role: 'The Vengeful Revolutionary', description: 'The transformed Crisóstomo Ibarra, now a wealthy jeweler consumed by revenge. His failure shows that revolution built on hatred is doomed.' },
  { initials: 'B', name: 'Basilio', role: 'The Voice of Reason', description: 'Sisa\'s surviving son, now a medical student. He represents the path of patient progress through legitimate means.' },
  { initials: 'I', name: 'Isagani', role: 'The Idealistic Youth', description: 'A young poet and student. Idealistic and patriotic, he ultimately foils Simoun\'s bomb plot, choosing to save innocent lives.' },
  { initials: 'FF', name: 'Father Florentino', role: 'The Moral Compass', description: 'A Filipino secular priest who delivers the novel\'s key message: freedom must be deserved and won through virtue.' },
  { initials: 'PG', name: 'Paulita Gómez', role: 'The Pragmatic Woman', description: 'Isagani\'s love interest who chooses wealth over love. Represents social ambition under colonial society.' },
  { initials: 'J', name: 'Juli', role: 'The Tragic Victim', description: 'Basilio\'s sweetheart who jumps to her death to escape assault. Her tragedy represents the ultimate victimization of Filipino women.' },
];

// --- DATA: THEMES ---
const NOLI_THEMES: Theme[] = [
  { title: 'Colonial Oppression & Social Injustice', description: 'The novel depicts the systematic oppression of Filipinos through unjust laws, abuse of power, and social discrimination.' },
  { title: 'Corruption of the Catholic Church', description: 'Through characters like Padre Dámaso and Padre Salví, Rizal exposes the hypocrisy and corruption within the colonial church.' },
  { title: 'Education as Liberation', description: 'Ibarra\'s dream of building a school represents Rizal\'s belief that education is the key to national progress.' },
  { title: 'Reform vs. Revolution', description: 'The debate between Ibarra (peaceful reform) and Elías (armed revolution) reflects the central question facing Filipino nationalists.' },
  { title: 'Filipino National Identity', description: 'The novel was one of the first works to present Filipinos as a distinct people with their own identity, worthy of respect.' },
];

const FILI_THEMES: Theme[] = [
  { title: 'The Failure of Peaceful Reform', description: 'El Filibusterismo shows a society where all avenues for peaceful change have been exhausted.' },
  { title: 'Revolution and Its Moral Foundations', description: 'Through Simoun\'s failed plot, Rizal explores the nature of revolution and warns against revolution driven by hatred.' },
  { title: 'The Corruption of Idealism', description: 'Simoun\'s transformation shows how suffering and injustice can corrupt even the noblest intentions.' },
  { title: 'Education and Youth Activism', description: 'The student characters represent different responses to colonial oppression and the various ideological positions.' },
  { title: 'Women\'s Suffering Under Colonialism', description: 'Juli\'s tragic fate represents the most extreme example of women\'s victimization under the colonial system.' },
];

const ULTIMO_THEMES: Theme[] = [
  { title: 'Patriotism and Love of Country', description: 'The entire poem is a declaration of Rizal\'s profound love for the Philippines, addressing the country as his "Fatherland."' },
  { title: 'Sacrifice and Martyrdom', description: 'Rizal accepts his death not with resignation but with joy, viewing it as a meaningful sacrifice for freedom.' },
  { title: 'Hope for Future Freedom', description: 'Despite facing death, Rizal expresses optimism about the Philippines\' future, confident his sacrifice will help achieve independence.' },
  { title: 'Religious Faith and Afterlife', description: 'The poem contains strong religious imagery, reflecting Rizal\'s complex relationship with faith.' },
  { title: 'Personal Farewells', description: 'Rizal bids farewell to his parents, siblings, friends, and to Josephine Bracken, humanizing the political martyr.' },
  { title: 'Eternal Connection to the Homeland', description: 'Rizal expresses his desire to remain connected to the Philippines even after death, becoming one with the land.' },
];

// --- DATA: JOURNEY TIMELINE (Improved) ---
interface JourneyEvent {
  id: string;
  year: string;
  title: string;
  category: 'birth' | 'education' | 'awakening' | 'literature' | 'activism' | 'exile' | 'martyrdom';
  description: string;
  significance: string;
  quote?: string;
}

const RIZAL_JOURNEY: JourneyEvent[] = [
  {
    id: 'birth',
    year: '1861',
    title: 'Birth of a Hero',
    category: 'birth',
    description: 'José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. The seventh of eleven children, he was raised in a prosperous family that valued education. His mother, Teodora Alonso, taught him to read at age 3 and instilled in him a love for learning through stories like "The Moth and the Flame."',
    significance: 'The story of the moth drawn to light despite the danger would become prophetic — Rizal would later sacrifice his life for the "light" of freedom and knowledge.',
  },
  {
    id: 'gomburza',
    year: '1872',
    title: 'The GOMBURZA Execution',
    category: 'awakening',
    description: 'At age 11, Rizal witnessed the aftermath of the execution of three Filipino priests — Mariano Gomez, José Burgos, and Jacinto Zamora — who were garroted for their alleged involvement in the Cavite Mutiny. His brother Paciano was a student of Father Burgos.',
    significance: 'This event shattered Rizal\'s childhood innocence and planted the seeds of nationalism. He would later dedicate El Filibusterismo to these martyrs, writing: "To the memory of the three priests, my countrymen..."',
    quote: '"The death of those three priests awakened in me the desire to work for freedom."'
  },
  {
    id: 'ateneo',
    year: '1872-1877',
    title: 'Ateneo Municipal de Manila',
    category: 'education',
    description: 'Rizal enrolled at the Jesuit-run Ateneo, where he flourished academically and artistically. He earned excellent grades, won literary contests, and developed his skills in poetry, sculpture, and painting. He graduated with the highest honors (Sobresaliente).',
    significance: 'The Jesuits nurtured his intellectual gifts and moral character. His poem "A La Juventud Filipina" (To the Filipino Youth), written at age 18, won first prize and declared Filipino youth as the "fair hope of the Fatherland."',
  },
  {
    id: 'ust',
    year: '1877-1882',
    title: 'University of Santo Tomas',
    category: 'education',
    description: 'Rizal studied Philosophy and Letters, then switched to Medicine. However, he faced discrimination from Dominican professors who favored Spanish students. His mother\'s unjust imprisonment for an alleged poisoning case further fueled his disillusionment.',
    significance: 'The contrast between his Ateneo experience and UST revealed the systemic racism in colonial education. He realized that true intellectual freedom could not be achieved under friar control.',
  },
  {
    id: 'europe',
    year: '1882',
    title: 'Secret Departure to Europe',
    category: 'activism',
    description: 'In May 1882, Rizal secretly left for Spain without his parents\' knowledge, using the name "José Mercado." He continued his medical studies at Universidad Central de Madrid and later specialized in ophthalmology in Paris and Heidelberg.',
    significance: 'This marked the beginning of his decade-long sojourn in Europe, where he would join the Propaganda Movement, write his novels, and become the voice of Filipino aspirations for reform.',
  },
  {
    id: 'noli',
    year: '1887',
    title: 'Noli Me Tangere Published',
    category: 'literature',
    description: 'After years of writing in Berlin, Rizal published his first novel "Noli Me Tangere" (Touch Me Not) on March 21, 1887. The book exposed the abuses of Spanish friars, the corruption of colonial government, and the suffering of ordinary Filipinos through the story of Crisóstomo Ibarra.',
    significance: 'The novel was immediately banned in the Philippines, and possession of it was punishable by death. Yet it spread like wildfire, awakening Filipino national consciousness and earning Rizal the title "Father of Filipino Nationalism."',
    quote: '"There are no tyrants where there are no slaves."'
  },
  {
    id: 'calamba',
    year: '1890',
    title: 'Calamba Hacienda Tragedy',
    category: 'awakening',
    description: 'While Rizal was in Europe, Governor-General Valeriano Weyler ordered the eviction of the Rizal family and other tenants from the Dominican-owned Calamba hacienda. Their home was destroyed, and his family members were scattered or imprisoned.',
    significance: 'This personal tragedy proved that peaceful reform through legal channels was futile. It was a turning point that pushed Rizal closer to accepting the inevitability of revolution.',
  },
  {
    id: 'fili',
    year: '1891',
    title: 'El Filibusterismo Published',
    category: 'literature',
    description: 'Rizal\'s darker sequel was published in Ghent, Belgium on September 18, 1891. Dedicated to GOMBURZA, it follows Crisóstomo Ibarra\'s transformation into the vengeful Simoun, who plots violent revolution. The novel ends with Father Florentino\'s message about earning freedom through virtue.',
    significance: 'The novel predicted the coming revolution and explored the moral complexities of armed struggle. Father Florentino\'s words became Rizal\'s philosophy: freedom must be deserved, not seized through hatred.',
    quote: '"We must win our freedom by deserving it, by improving the mind and enhancing the dignity of the individual."'
  },
  {
    id: 'liga',
    year: '1892',
    title: 'La Liga Filipina & Arrest',
    category: 'activism',
    description: 'Rizal returned to the Philippines and founded La Liga Filipina on July 3, 1892 — a civic organization promoting unity, mutual aid, and reform. Four days later, he was arrested and exiled to Dapitan, Mindanao without trial.',
    significance: 'La Liga would splinter after his arrest, with the more radical members forming the Katipunan under Andres Bonifacio. Rizal\'s exile removed the voice of moderation from the nationalist movement.',
  },
  {
    id: 'dapitan',
    year: '1892-1896',
    title: 'Exile in Dapitan',
    category: 'exile',
    description: 'During his four years of exile, Rizal transformed Dapitan. He established a school, built a water system, designed town lighting, practiced medicine (performing over 100 eye surgeries), and fell in love with Josephine Bracken. He also engaged in scientific research, discovering new species.',
    significance: 'Dapitan proved that Rizal was not just a writer but a man of action. He demonstrated that Filipinos, when given freedom, could achieve progress and civilization — refuting Spanish claims of native inferiority.',
  },
  {
    id: 'revolution',
    year: '1896',
    title: 'The Revolution Erupts',
    category: 'awakening',
    description: 'In August 1896, the Katipunan\'s plot was discovered, forcing Bonifacio to launch the Philippine Revolution prematurely. Rizal, who had earlier declined to lead the Katipunan citing lack of preparation, was en route to Cuba as a volunteer military doctor when he was arrested.',
    significance: 'Though Rizal did not lead the revolution, his writings were its intellectual foundation. The Spanish authorities knew this — they needed to silence the man whose pen had awakened a nation.',
  },
  {
    id: 'trial',
    year: 'December 1896',
    title: 'Trial & Condemnation',
    category: 'martyrdom',
    description: 'Rizal was tried by a military court on charges of rebellion, sedition, and conspiracy. He was denied proper legal counsel, the evidence was circumstantial, and the verdict was predetermined. On December 26, 1896, he was sentenced to death by firing squad.',
    significance: 'The trial was a mockery of justice, but Rizal faced it with dignity. He spent his final days writing letters, completing a final poem, and making peace with his faith.',
  },
  {
    id: 'ultimo',
    year: 'December 29, 1896',
    title: 'Mi Último Adiós',
    category: 'literature',
    description: 'On the eve of his execution, Rizal secretly wrote his final poem, hiding it inside an alcohol lamp that he gave to his sister Trinidad. The untitled 14-stanza masterpiece expressed his love for the Philippines and acceptance of death as sacrifice.',
    significance: 'The poem, later titled "Mi Último Adiós" (My Last Farewell), became the most celebrated piece of Filipino literature. Its final words: "Farewell, dear Fatherland... I go where there are no slaves, tyrants or hangmen."',
    quote: '"I die without seeing the dawn brighten over my native land. You who have it to see, welcome it!"'
  },
  {
    id: 'martyrdom',
    year: 'December 30, 1896',
    title: 'Martyrdom at Bagumbayan',
    category: 'martyrdom',
    description: 'At 7:03 AM, José Rizal was executed by firing squad at Bagumbayan (now Luneta Park). He was 35 years old. Witnesses reported that he turned to face his executioners at the last moment, falling face-up to the morning sky.',
    significance: 'Rizal\'s death did not end the revolution — it ignited it. His martyrdom transformed him from a reformist intellectual into the eternal symbol of Filipino nationhood. December 30 is now Rizal Day, a national holiday.',
    quote: '"Consummatum Est." (It is finished.)'
  },
];

const CATEGORY_STYLES = {
  birth: { bg: 'bg-amber-50', border: 'border-amber-500', accent: 'text-amber-700', icon: '🌅' },
  education: { bg: 'bg-blue-50', border: 'border-blue-500', accent: 'text-blue-700', icon: '🎓' },
  awakening: { bg: 'bg-red-50', border: 'border-red-600', accent: 'text-red-700', icon: '⚡' },
  literature: { bg: 'bg-emerald-50', border: 'border-emerald-600', accent: 'text-emerald-700', icon: '📚' },
  activism: { bg: 'bg-indigo-50', border: 'border-indigo-600', accent: 'text-indigo-700', icon: '✊' },
  exile: { bg: 'bg-purple-50', border: 'border-purple-500', accent: 'text-purple-700', icon: '🏝️' },
  martyrdom: { bg: 'bg-gray-900', border: 'border-yellow-500', accent: 'text-yellow-500', icon: '🇵🇭' },
};

// --- DATA: LIFE TIMELINE ---
const LIFE_TIMELINE = [
  { date: 'June 19, 1861', title: 'Birth in Calamba', description: 'José Rizal is born to a prosperous family in Calamba, Laguna.' },
  { date: '1872', title: 'GOMBURZA Execution', description: 'The martyrdom of three Filipino priests deeply affects the young Rizal.' },
  { date: '1879', title: 'A La Juventud Filipina', description: 'Wins poetry prize with "To the Filipino Youth" while a student.' },
  { date: '1882', title: 'Departure for Spain', description: 'Leaves the Philippines to study medicine in Madrid.' },
  { date: 'March 21, 1887', title: 'Noli Me Tangere', description: 'First novel published in Berlin, exposing colonial abuses.' },
  { date: 'September 18, 1891', title: 'El Filibusterismo', description: 'Darker sequel published in Ghent, Belgium.' },
  { date: 'July 3, 1892', title: 'La Liga Filipina', description: 'Founds civic organization; arrested and exiled to Dapitan four days later.' },
  { date: 'December 30, 1896', title: 'Execution & Mi Último Adiós', description: 'Executed at Bagumbayan; farewell poem discovered and published.' },
];

// --- COMPONENTS ---

const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ label, title, subtitle, light = false }: { label: string, title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <p className={`italic text-sm tracking-[3px] uppercase mb-2 ${light ? 'text-[#C9A227]' : 'text-[#C9A227]'}`}>{label}</p>
    <h2 className={`title-font text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-[#1a1a2e]'}`}>{title}</h2>
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-4"></div>
    {subtitle && <p className={`text-lg italic max-w-xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

// Book Cover Component
const BookCover = ({ title, subtitle, year, location }: { title: string, subtitle: string, year: string, location: string }) => (
  <div className="bg-gradient-to-br from-[#C9A227] to-[#D4AF37] p-2 rounded-lg shadow-2xl">
    <div className="bg-[#f5f5f5] h-[400px] rounded flex flex-col items-center justify-center p-8 text-center">
      <h3 className="title-font text-xl text-[#1a1a2e] mb-2">{title}</h3>
      <p className="italic text-gray-600 text-sm">&quot;{subtitle}&quot;</p>
      <div className="w-12 h-0.5 bg-[#C9A227] my-6"></div>
      <p className="text-[#1a1a2e]">A Novel</p>
      <p className="title-font text-[#1a1a2e] mt-8">José Rizal</p>
      <p className="text-xs mt-4 text-gray-500">{location}, {year}</p>
    </div>
  </div>
);

// Character Card Component
const CharacterCard = ({ character }: { character: Character }) => (
  <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 hover:scale-[1.02] transition-all">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A227] to-[#D4AF37] mx-auto mb-4 flex items-center justify-center title-font text-2xl text-[#1a1a2e]">
      {character.initials}
    </div>
    <h4 className="title-font text-lg mb-1">{character.name}</h4>
    <p className="italic text-[#C9A227] text-sm mb-3">{character.role}</p>
    <p className="text-sm opacity-85 leading-relaxed">{character.description}</p>
  </div>
);

// Theme Item Component
const ThemeItem = ({ theme }: { theme: Theme }) => (
  <div className="bg-white/5 border-l-4 border-[#C9A227] py-4 px-6 rounded-r-xl mb-4">
    <h4 className="title-font text-lg text-[#C9A227] mb-2">{theme.title}</h4>
    <p className="opacity-90">{theme.description}</p>
  </div>
);

// Content Card Component
const ContentCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all">
    <h3 className="title-font text-xl text-[#C9A227] mb-4 flex items-center gap-2">
      <span className="text-sm">◆</span> {title}
    </h3>
    {children}
  </div>
);

// Quote Section Component
const QuoteSection = ({ quote, cite }: { quote: string, cite: string }) => (
  <div className="bg-black/20 rounded-xl p-8 text-center my-12">
    <blockquote className="font-playfair italic text-xl md:text-2xl leading-relaxed mb-4">
      &quot;{quote}&quot;
    </blockquote>
    <cite className="title-font text-[#C9A227]">— {cite}</cite>
  </div>
);

// Legacy Card Component
const LegacyCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition-transform">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#722F37] mx-auto mb-6 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <h3 className="title-font text-lg text-[#1a1a2e] mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Life Timeline Item
const LifeTimelineItem = ({ item, index }: { item: typeof LIFE_TIMELINE[0], index: number }) => (
  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}>
    <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
      <div className="bg-white p-6 rounded-xl shadow-lg inline-block max-w-sm">
        <p className="title-font text-[#C9A227] mb-2">{item.date}</p>
        <h4 className="title-font text-[#1a1a2e] mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
    <div className="relative z-10">
      <div className="w-5 h-5 rounded-full bg-[#C9A227] border-4 border-[#F5E6D3]"></div>
    </div>
    <div className="md:hidden flex-1 pl-6">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <p className="title-font text-[#C9A227] text-sm mb-1">{item.date}</p>
        <h4 className="title-font text-[#1a1a2e] mb-1">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
    <div className="hidden md:block w-1/2"></div>
  </div>
);

export default function RizalTimelinePage() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        .title-font { font-family: 'Cinzel', serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        body { 
          font-family: 'Crimson Text', Georgia, serif;
          line-height: 1.8;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 3px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes scroll {
          0% { opacity: 1; top: 8px; }
          100% { opacity: 0; top: 30px; }
        }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#722F37] flex items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201, 162, 39, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 0, 0, 0.3) 0%, transparent 50%)'
        }}></div>
        
        <ScrollReveal className="relative z-10 max-w-4xl">
          <p className="italic text-[#C9A227] text-sm tracking-[3px] uppercase mb-4">The Literary Legacy of</p>
          <h1 className="title-font text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            José Protasio Rizal<br/>Mercado y Alonso Realonda
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Physician, novelist, poet, and revolutionary — whose pen proved mightier than the sword 
            in awakening Filipino national consciousness and igniting the flame of independence.
          </p>
          <p className="title-font text-[#C9A227] tracking-[4px] text-lg">1861 — 1896</p>
          
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-white/70">
              <span>JOSH KENN VIRAY</span>
              <span className="text-[#C9A227]">•</span>
              <span>JAM MEISY TAN</span>
              <span className="text-[#C9A227]">•</span>
              <span>DENZEL ANGELO TO</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bold text-white/70">
              <span>RAMON TUAZON</span>
              <span className="text-[#C9A227]">•</span>
              <span>RACELL GABRIEL SINCIOCO</span>
            </div>
            <div className="h-px w-24 bg-[#C9A227] my-2"></div>
            <span className="text-sm font-bold text-white/70">SECTION 4CSC</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Section Navigation */}
      <div className="sticky top-0 z-40 flex justify-center py-4">
        <div className="bg-white border-2 border-[#C9A227]/30 rounded-full px-6 py-3 shadow-xl flex gap-3 flex-wrap">
          {[
            { id: 'about', label: 'About' },
            { id: 'required-elements', label: 'Overview' },
            { id: 'wave-timeline', label: 'Timeline' },
            { id: 'childhood', label: 'Childhood' },
            { id: 'noli', label: 'Noli' },
            { id: 'fili', label: 'El Fili' },
            { id: 'ultimo', label: 'Mi Último Adiós' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSection(tab.id);
                document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full text-sm title-font transition-all ${
                activeSection === tab.id
                  ? 'bg-[#1a1a2e] text-[#C9A227]'
                  : 'bg-transparent text-[#1a1a2e] hover:bg-[#1a1a2e]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* About Rizal Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#FDF6E3] to-[#F5E6D3] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="Introduction" 
              title="The National Hero" 
              subtitle="A polymath who used literature as his weapon for reform"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-[#C9A227] to-[#D4AF37] p-4 rounded-xl shadow-2xl">
                <div className="bg-[#1a1a2e] h-[450px] rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/JoseRizal.jpeg" 
                    alt="José Rizal Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h3 className="title-font text-2xl text-[#1a1a2e] mb-6">The Man Behind the Legacy</h3>
                <p className="text-lg mb-4 text-justify leading-relaxed">
                  José Rizal was born on June 19, 1861, in Calamba, Laguna. From an early age, he displayed 
                  extraordinary intellectual abilities, eventually mastering over 20 languages and excelling 
                  in medicine, art, and literature.
                </p>
                <p className="text-lg mb-6 text-justify leading-relaxed">
                  Rather than taking up arms, Rizal chose the pen as his weapon. His novels exposed the 
                  abuses of Spanish colonial rule and the corrupt influence of the friars, awakening Filipino 
                  consciousness and planting the seeds of revolution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Polyglot', desc: 'Fluent in 22+ languages' },
                    { title: 'Ophthalmologist', desc: 'Studied medicine in Manila and Spain' },
                    { title: 'Reformist', desc: 'Advocated for peaceful reform' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-4 rounded-xl shadow-lg text-center border-t-4 border-[#C9A227]">
                      <h4 className="title-font text-[#1a1a2e] mb-1 break-words">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW SECTIONS */}
      <RequiredElements />
      <WaveTimeline />
      <Childhood />
      <SaAkingMgaKababata />
      <LaJuventudFilipina />

      {/* Noli Me Tangere Section */}
      <section id="noli" className="py-24 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#2d132c] text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="First Novel • 1887" 
              title="Noli Me Tangere" 
              subtitle="&quot;Touch Me Not&quot; — A novel that touched an entire nation"
              light
            />
          </ScrollReveal>

          {/* Book Header */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16 items-center">
            <ScrollReveal>
              <BookCover title="NOLI ME TANGERE" subtitle="Touch Me Not" year="1887" location="Berlin" />
            </ScrollReveal>
            
            <ScrollReveal>
              <div>
                <h2 className="font-playfair text-3xl mb-4">The Social Cancer</h2>
                <div className="flex flex-wrap gap-6 mb-6 text-sm opacity-80">
                  <span>📍 Written in Berlin, Germany</span>
                  <span>📅 Published March 21, 1887</span>
                  <span>📖 63 Chapters</span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  Noli Me Tangere, written in Spanish and published in Berlin, is Rizal&apos;s first novel and 
                  his most direct attack on Spanish colonial society. The title, taken from the Latin 
                  Vulgate Bible (John 20:17), refers to the words spoken by Jesus to Mary Magdalene. 
                  Rizal used this phrase to symbolize the untouchable nature of colonial abuses — issues 
                  so sensitive that they were forbidden to discuss.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Plot & Context */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal>
              <ContentCard title="Plot Summary">
                <p className="opacity-90 leading-relaxed">
                  The story follows <strong>Crisóstomo Ibarra</strong>, a young Filipino mestizo who returns 
                  to the Philippines after seven years of studying in Europe. He dreams of establishing a 
                  school to educate Filipino youth. However, he discovers that his father died in prison 
                  after being falsely accused by Padre Dámaso. As Ibarra attempts reforms, he faces opposition 
                  leading to his downfall and eventual escape with the help of Elías.
                </p>
              </ContentCard>
            </ScrollReveal>
            
            <ScrollReveal>
              <ContentCard title="Historical Context">
                <p className="opacity-90 leading-relaxed">
                  The novel is set during the late Spanish colonial period when the Philippines was under 
                  the control of both Spanish civil authorities and the Catholic friars. The friars wielded 
                  immense power, controlling education, local government, and even the personal lives of 
                  Filipinos. The book was immediately banned and possession of it was considered evidence of rebellion.
                </p>
              </ContentCard>
            </ScrollReveal>
          </div>

          {/* Characters */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Main Characters</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {NOLI_CHARACTERS.map((char) => (
              <ScrollReveal key={char.initials}>
                <CharacterCard character={char} />
              </ScrollReveal>
            ))}
          </div>

          {/* Themes */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes</h3>
          <div className="mb-12">
            {NOLI_THEMES.map((theme) => (
              <ScrollReveal key={theme.title}>
                <ThemeItem theme={theme} />
              </ScrollReveal>
            ))}
          </div>

          {/* Quote */}
          <ScrollReveal>
            <QuoteSection quote="There are no tyrants where there are no slaves." cite="Elías, Noli Me Tangere" />
          </ScrollReveal>

          {/* Symbolism & Impact */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <ContentCard title="Symbolism in the Novel">
                <ul className="space-y-2 opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>The School</strong> — Represents hope, progress, and the power of education</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>The Crocodile</strong> — Symbol of the Spanish colonizers who prey on Filipinos</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>María Clara&apos;s Convent</strong> — The church&apos;s imprisonment of Filipino women</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>Elías&apos;s Wounds</strong> — The collective suffering of the Filipino people</li>
                </ul>
              </ContentCard>
            </ScrollReveal>
            
            <ScrollReveal>
              <ContentCard title="Impact of the Novel">
                <ul className="space-y-2 opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Banned immediately by Spanish authorities as &quot;subversive&quot;</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Possession was punishable by imprisonment or death</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Awakened Filipino national consciousness across social classes</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Remains required reading in Philippine schools today</li>
                </ul>
              </ContentCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MalolosLetter />

      {/* El Filibusterismo Section */}
      <section id="fili" className="py-24 px-6 bg-gradient-to-br from-[#722F37] to-[#4a0e0e] text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="Second Novel • 1891" 
              title="El Filibusterismo" 
              subtitle="&quot;The Reign of Greed&quot; — A darker sequel of revolution and despair"
              light
            />
          </ScrollReveal>

          {/* Book Header */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16 items-center">
            <ScrollReveal>
              <BookCover title="EL FILIBUSTERISMO" subtitle="The Reign of Greed" year="1891" location="Ghent" />
            </ScrollReveal>
            
            <ScrollReveal>
              <div>
                <h2 className="font-playfair text-3xl mb-4">The Subversive</h2>
                <div className="flex flex-wrap gap-6 mb-6 text-sm opacity-80">
                  <span>📍 Written in various European cities</span>
                  <span>📅 Published September 18, 1891</span>
                  <span>📖 39 Chapters</span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  El Filibusterismo is the darker, more politically charged sequel to Noli Me Tangere. 
                  Dedicated to the three priests (Gomez, Burgos, and Zamora - GOMBURZA) martyred in 1872, 
                  the novel is a powerful condemnation of colonial society and a warning about the consequences 
                  of continued oppression.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Plot & Tone */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal>
              <ContentCard title="Plot Summary">
                <p className="opacity-90 leading-relaxed">
                  Thirteen years after Noli, Crisóstomo Ibarra has transformed into <strong>Simoun</strong>, 
                  a wealthy jeweler with a plan for violent revolution. Consumed by vengeance over María Clara&apos;s 
                  death, Simoun plans to detonate a bomb at a wedding. His plan fails when Basilio warns the guests. 
                  Mortally wounded, Simoun is sheltered by Father Florentino, who delivers the novel&apos;s moral message.
                </p>
              </ContentCard>
            </ScrollReveal>
            
            <ScrollReveal>
              <ContentCard title="Tone & Atmosphere">
                <p className="opacity-90 leading-relaxed">
                  Unlike the romantic idealism of Noli, El Filibusterismo is characterized by darkness, 
                  pessimism, and revolutionary fervor. The novel is more political and radical, showing 
                  Rizal&apos;s shift from hoping for reform to questioning whether revolution is necessary. 
                  It serves as both a warning to Spain and a cautionary tale about revenge-driven revolution.
                </p>
              </ContentCard>
            </ScrollReveal>
          </div>

          {/* Characters */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Main Characters</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {FILI_CHARACTERS.map((char) => (
              <ScrollReveal key={char.initials}>
                <CharacterCard character={char} />
              </ScrollReveal>
            ))}
          </div>

          {/* Themes */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes</h3>
          <div className="mb-12">
            {FILI_THEMES.map((theme) => (
              <ScrollReveal key={theme.title}>
                <ThemeItem theme={theme} />
              </ScrollReveal>
            ))}
          </div>

          {/* Quote */}
          <ScrollReveal>
            <QuoteSection 
              quote="I do not mean to say that our freedom must be won at the point of the sword... But I do say that we must win our freedom by deserving it, by improving the mind and enhancing the dignity of the individual." 
              cite="Father Florentino's message to the dying Simoun" 
            />
          </ScrollReveal>

          {/* The Lamp Symbolism */}
          <ScrollReveal>
            <ContentCard title="The Symbolism of the Lamp">
              <p className="opacity-90 leading-relaxed mb-4">
                The most powerful symbol in El Filibusterismo is the <strong>lamp containing the bomb</strong> 
                that Simoun plans to detonate at the wedding:
              </p>
              <ul className="space-y-2 opacity-90">
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>Enlightenment corrupted</strong> — A lamp should bring light (knowledge), but Simoun&apos;s lamp brings death</li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>Hidden danger</strong> — The bomb mirrors the revolution hidden within colonial society</li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>Isagani&apos;s choice</strong> — By throwing the lamp into the river, he chooses life over revenge</li>
                <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold"><strong>Failed revolution</strong> — Represents revolution that fails when based on hatred</li>
              </ul>
            </ContentCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 bg-[#FDF6E3]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="Analysis" 
              title="Noli vs. El Fili" 
              subtitle="How Rizal's vision evolved between his two novels"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-xl">
                <thead>
                  <tr className="bg-[#1a1a2e] text-white">
                    <th className="title-font p-4 text-left">Aspect</th>
                    <th className="title-font p-4 text-left">Noli Me Tangere (1887)</th>
                    <th className="title-font p-4 text-left">El Filibusterismo (1891)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ['Tone', 'Romantic, idealistic, hopeful despite tragedy', 'Dark, pessimistic, revolutionary'],
                    ['Protagonist', 'Crisóstomo Ibarra — naive, idealistic reformist', 'Simoun — bitter, vengeful revolutionary'],
                    ['Approach', 'Education, peaceful reform, working within the system', 'Violent revolution, destruction of the system'],
                    ['View of Spain', 'Hope that Spain might grant reforms', 'Complete rejection of Spanish rule'],
                    ['Female Lead', 'María Clara — idealized, passive, tragic', 'Juli — victimized but makes active choice'],
                    ['Ending', 'Ambiguous — Ibarra escapes, future uncertain', 'Definitive — Simoun dies, moral message delivered'],
                    ['Dedication', 'To the Philippines ("To My Fatherland")', 'To GOMBURZA (martyred priests of 1872)'],
                  ].map(([aspect, noli, fili]) => (
                    <tr key={aspect} className="border-b border-gray-100">
                      <td className="p-4 font-semibold title-font bg-gray-50">{aspect}</td>
                      <td className="p-4">{noli}</td>
                      <td className="p-4">{fili}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LaLigaFilipina />
      <DapitanExile />

      {/* Mi Último Adiós Section */}
      <section id="ultimo" className="py-24 px-6 bg-gradient-to-br from-[#1B4332] to-[#081c15] text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="Final Poem • December 30, 1896" 
              title="Mi Último Adiós" 
              subtitle="&quot;My Last Farewell&quot; — A martyr's final testament of love for country"
              light
            />
          </ScrollReveal>

          {/* Book Header */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16 items-center">
            <ScrollReveal>
              <BookCover title="MI ÚLTIMO ADIÓS" subtitle="My Last Farewell" year="December 29, 1896" location="Fort Santiago, Manila" />
            </ScrollReveal>
            
            <ScrollReveal>
              <div>
                <h2 className="font-playfair text-3xl mb-4">The Ultimate Sacrifice</h2>
                <div className="flex flex-wrap gap-6 mb-6 text-sm opacity-80">
                  <span>📍 Written in Fort Santiago Prison</span>
                  <span>📅 Night before execution</span>
                  <span>📝 14 Stanzas</span>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  Mi Último Adiós is Rizal&apos;s farewell poem, written on the eve of his execution on December 30, 1896. 
                  The untitled poem was smuggled out of his cell hidden inside an alcohol lamp and given to his family. 
                  Written in Spanish, this 14-stanza masterpiece expresses Rizal&apos;s love for the Philippines, his acceptance 
                  of death for the cause of freedom, and his hope for the nation&apos;s future.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Context & Discovery */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ScrollReveal>
              <ContentCard title="Historical Context">
                <p className="opacity-90 leading-relaxed">
                  After years of exile in Dapitan, Rizal was arrested while traveling to Cuba as a volunteer doctor. 
                  Despite having no direct involvement in the Philippine Revolution, he was charged with rebellion 
                  and sedition. The trial was a mockery of justice. On December 30, 1896, at Bagumbayan (now Luneta Park), 
                  Rizal was executed by firing squad.
                </p>
              </ContentCard>
            </ScrollReveal>
            
            <ScrollReveal>
              <ContentCard title="The Poem's Discovery">
                <p className="opacity-90 leading-relaxed">
                  Rizal wrote this poem secretly the night before his execution. He hid the folded paper inside a 
                  small alcohol cooking lamp (cocinilla) which he gave to his sister Trinidad, whispering, 
                  &quot;There is something inside.&quot; The poem had no title — &quot;Mi Último Adiós&quot; was given later.
                </p>
              </ContentCard>
            </ScrollReveal>
          </div>

          {/* Themes */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Major Themes & Analysis</h3>
          <div className="mb-12">
            {ULTIMO_THEMES.map((theme) => (
              <ScrollReveal key={theme.title}>
                <ThemeItem theme={theme} />
              </ScrollReveal>
            ))}
          </div>

          {/* Key Passages */}
          <h3 className="title-font text-xl text-center text-[#C9A227] mb-8">Key Passages & Their Meanings</h3>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-12">
            {[
              {
                lines: ['Farewell, dear Fatherland, clime of the sun caress\'d,', 'Pearl of the Orient seas, our Eden lost!'],
                analysis: 'The opening lines establish the Philippines as a paradise ("Eden lost") under the blessing of nature. "Pearl of the Orient" became a lasting epithet for the country.'
              },
              {
                lines: ['Gladly now I go to give thee this faded life\'s best,', 'And were it brighter, fresher, or more blest,', 'Still would I give it thee, nor count the cost.'],
                analysis: 'Rizal expresses that his sacrifice is given willingly, without regret. Even if his life were more valuable, he would still offer it for his country.'
              },
              {
                lines: ['And when the dark night wraps the graveyard round,', 'With only the dead in their vigil to see;', 'Break not my repose or the mystery profound,', '\'Tis I, O my country, raising a song unto thee.'],
                analysis: 'Rizal imagines himself continuing to sing for his country even after death. His words and sacrifice continue to "sing" to the nation, inspiring each generation.'
              },
            ].map((passage, index) => (
              <ScrollReveal key={index}>
                <div className="mb-8 last:mb-0">
                  <div className="border-l-2 border-[#C9A227] pl-6 mb-4">
                    {passage.lines.map((line, i) => (
                      <p key={i} className="font-playfair italic text-lg leading-loose">{line}</p>
                    ))}
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-[#C9A227] title-font text-sm mb-2">Analysis</h4>
                    <p className="opacity-90">{passage.analysis}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quote */}
          <ScrollReveal>
            <QuoteSection 
              quote="I die without seeing the dawn brighten over my native land. You who have it to see, welcome it — and forget not those who have fallen during the night!" 
              cite="José Rizal, Final Letters" 
            />
          </ScrollReveal>

          {/* Impact */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <ContentCard title="Literary Significance">
                <ul className="space-y-2 opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Considered the supreme expression of Filipino patriotic poetry</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Written in perfect Spanish verse with complex rhyme scheme</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Translated into over 40 languages worldwide</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Memorized by generations of Filipino students</li>
                </ul>
              </ContentCard>
            </ScrollReveal>
            
            <ScrollReveal>
              <ContentCard title="Historical Impact">
                <ul className="space-y-2 opacity-90">
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Galvanized the Philippine Revolution after Rizal&apos;s death</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Transformed Rizal from reformist to revolutionary martyr</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">December 30 declared Rizal Day, a national holiday</li>
                  <li className="pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-[#C9A227] before:font-bold">Became the spiritual foundation of Filipino nationalism</li>
                </ul>
              </ContentCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Execution />

      {/* Legacy Section REMOVED */}
      <section id="legacy-removed" className="py-24 px-6 bg-[#F5E6D3] scroll-mt-24" style={{display: 'none'}}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader 
              label="Enduring Influence" 
              title="Rizal's Legacy" 
              subtitle="How Rizal continues to shape the Filipino nation"
            />
          </ScrollReveal>

          {/* Legacy Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '📚', title: 'Education', desc: 'RA 1425 (Rizal Law) requires all schools to teach Rizal\'s life and works.' },
              { icon: '🏛️', title: 'National Symbol', desc: 'Rizal Park, the Rizal Monument, and countless institutions bear his name.' },
              { icon: '🎭', title: 'Cultural Icon', desc: 'His novels remain bestsellers, adapted into films, plays, and operas.' },
              { icon: '💡', title: 'Moral Guide', desc: 'His writings continue to provide guidance for contemporary challenges.' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <LegacyCard icon={item.icon} title={item.title} description={item.desc} />
              </ScrollReveal>
            ))}
          </div>

          {/* Life Timeline */}
          <h3 className="title-font text-xl text-center text-[#1a1a2e] mb-12">Timeline of Rizal&apos;s Life & Works</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A227] to-[#722F37] -translate-x-1/2"></div>
            
            {LIFE_TIMELINE.map((item, index) => (
              <LifeTimelineItem key={item.date} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-16 px-6 text-center">
        <ScrollReveal>
          <p className="font-playfair italic text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
            &quot;He who does not know how to look back at where he came from will never get to his destination.&quot;
          </p>
          <div className="w-36 h-0.5 bg-[#C9A227] mx-auto mb-8"></div>
          <p className="title-font text-lg mb-2">The Literary Legacy of José Rizal</p>
          <p className="opacity-70 text-sm mb-4">Philippine National Hero (1861-1896)</p>
          <p className="opacity-50 text-xs">Group 7 | 4CSC • 2025</p>
        </ScrollReveal>
      </footer>

    </div>
  );
}