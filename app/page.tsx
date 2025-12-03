'use client';

import React, { useState, useEffect, useRef } from 'react';

// --- TYPES ---
type NodeType = 'event' | 'literature' | 'political' | 'personal' | 'weakness' | 'final';

interface RoadmapNode {
  id: string;
  type: NodeType;
  title: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  significance: string;
  points?: number;
  icon?: string;
  alignment?: 'left' | 'right' | 'center';
}

// --- DATA: THE EXPANDED RIZAL TIMELINE ---
const TIMELINE_DATA: RoadmapNode[] = [
  {
    id: 'childhood',
    type: 'personal',
    title: 'Childhood in Calamba',
    date: '1861 - 1870',
    shortDesc: 'The awakening of a young mind.',
    fullDesc: 'Born to the Mercado-Rizal family, Jose was raised in a home of books and business. His early education was shaped by his mother, Teodora Alonso.',
    significance: 'The "Moth and the Flame" story told by his mother instilled in him the idea that "light" (knowledge/freedom) is worth dying for.',
    points: 5,
    icon: '🌱',
    alignment: 'left'
  },
  {
    id: 'gomburza',
    type: 'event',
    title: 'The Gomburza Execution',
    date: '1872',
    shortDesc: 'The traumatic awakening.',
    fullDesc: 'The execution of Priests Gomez, Burgos, and Zamora for alleged complicity in the Cavite Mutiny. Rizal\'s brother Paciano was a student of Burgos.',
    significance: 'Rizal dedicated El Filibusterismo to them. This injustice shattered his childish innocence and awakened his political consciousness against Spanish tyranny.',
    points: 10,
    icon: '🔔',
    alignment: 'right'
  },
  {
    id: 'ateneo-ust',
    type: 'personal',
    title: 'Ateneo vs. UST',
    date: '1872 - 1882',
    shortDesc: 'Intellectual growth vs. Discrimination.',
    fullDesc: 'Excelled at the Jesuit-run Ateneo but faced discrimination and hostility at the Dominican-run UST.',
    significance: 'He realized that under the Friars, Filipino intellect would always be stifled. This pushed him to seek education abroad.',
    points: 5,
    icon: '🎓',
    alignment: 'left'
  },
  {
    id: 'kababata',
    type: 'literature',
    title: 'Sa Aking Mga Kababata',
    date: '1869 (Debated)',
    shortDesc: '"To My Fellow Children"',
    fullDesc: 'A poem traditionally attributed to a young Rizal emphasizing the love for one\'s native tongue.',
    significance: 'Established the principle: "He who does not love his own language is worse than an animal and smelly fish."',
    points: 5,
    icon: '📜',
    alignment: 'right'
  },
  {
    id: 'weakness-idealism',
    type: 'weakness',
    title: 'Early Weakness: Naive Idealism',
    date: 'Pre-1882',
    shortDesc: 'Belief in Mother Spain',
    fullDesc: 'Rizal initially believed that Spain was a benevolent mother country and that education alone could solve the Philippines\' problems.',
    significance: 'This slowed his transition to radicalism. He wanted to be "Spanish" and "Filipino" simultaneously.',
    points: 0,
    icon: '⚠️',
    alignment: 'center'
  },
  {
    id: 'departure',
    type: 'event',
    title: 'Secret Departure to Europe',
    date: 'May 1882',
    shortDesc: 'Mission to observe the enemy.',
    fullDesc: 'Rizal left without his parents\' knowledge to study in Spain and "observe the life and culture... of the European nations".',
    significance: 'The beginning of the Propaganda Movement. He went not just to study medicine, but to cure the "social cancer".',
    points: 5,
    icon: '🚢',
    alignment: 'left'
  },
  {
    id: 'noli',
    type: 'literature',
    title: 'Noli Me Tangere',
    date: '1887',
    shortDesc: 'The Spark of Revolution.',
    fullDesc: 'Published in Berlin. It diagnosed the Philippines\' ailments, exposing friar abuse, government corruption, and Filipino superstitions.',
    significance: 'It destroyed the "prestige" of the clergy. It was the catalyst that transformed a scattered sentiment into a national consciousness.',
    points: 10,
    icon: '🔥',
    alignment: 'right'
  },
  {
    id: 'calamba-eviction',
    type: 'event',
    title: 'Calamba Hacienda Eviction',
    date: '1890 - 1891',
    shortDesc: 'Personal Tragedy.',
    fullDesc: 'While Rizal was in Europe, Gov. Gen. Weyler destroyed the Rizal home and evicted his family and neighbors from the Dominican estate.',
    significance: 'The TURNING POINT. It proved that "Assimilation" was a pipe dream. Justice could not be found within the Spanish legal system.',
    points: 5,
    icon: '🏚️',
    alignment: 'left'
  },
  {
    id: 'delpilar-conflict',
    type: 'weakness',
    title: 'Conflict with Del Pilar',
    date: '1891',
    shortDesc: 'Fractured Leadership.',
    fullDesc: 'Rizal and Marcelo H. Del Pilar clashed over the leadership of the Filipino community in Madrid.',
    significance: 'Rizal walked away to avoid dividing the Filipinos further. It showed his high moral standard but also his inability to play "dirty politics".',
    points: 0,
    icon: '⚡',
    alignment: 'center'
  },
  {
    id: 'fili',
    type: 'literature',
    title: 'El Filibusterismo',
    date: '1891',
    shortDesc: 'The Revolution Predicted.',
    fullDesc: 'Dedicated to Gomburza. A darker, more cynical novel where the hero (Simoun) attempts to destroy the system through violence.',
    significance: 'Rizal wrestled with the morality of revolution. Simoun fails, suggesting Rizal believed the country was not yet ready for independence.',
    points: 10,
    icon: '💣',
    alignment: 'right'
  },
  {
    id: 'sandakan',
    type: 'event',
    title: 'The Sandakan Project',
    date: '1892',
    shortDesc: 'A New Calamba in Borneo?',
    fullDesc: 'Rizal planned to move displaced families to North Borneo (Sabah) to establish a Filipino farming colony free from Spanish rule.',
    significance: 'Shows Rizal as a practical leader, not just a writer. However, the Spanish Gov. General forbade it, fearing a loss of prestige.',
    points: 5,
    icon: '🗺️',
    alignment: 'left'
  },
  {
    id: 'liga',
    type: 'political',
    title: 'La Liga Filipina',
    date: 'July 3, 1892',
    shortDesc: 'Unus Instar Omnium.',
    fullDesc: 'Founded in Tondo upon his return. A civic society for mutual aid, defense against violence, and development of agriculture.',
    significance: 'The bridge between Propaganda (Reform) and Katipunan (Revolution). It sought to unite the archipelago into one compact body.',
    points: 10,
    icon: '🤝',
    alignment: 'right'
  },
  {
    id: 'dapitan',
    type: 'personal',
    title: 'Exile in Dapitan',
    date: '1892 - 1896',
    shortDesc: 'The Practical Idealist.',
    fullDesc: 'Rizal lived as a farmer, teacher, engineer, and doctor. He built a water system and lighted the streets.',
    significance: 'He proved his thesis: Filipinos, given the chance, are industrious and capable. He practiced what he preached.',
    points: 5,
    icon: '🏡',
    alignment: 'left'
  },
  {
    id: 'weakness-hesitancy',
    type: 'weakness',
    title: 'Weakness: Hesitancy',
    date: '1896',
    shortDesc: 'Refusal to Lead Revolution',
    fullDesc: 'When Pio Valenzuela visited Dapitan to ask Rizal to lead the Katipunan, Rizal refused, citing lack of arms and preparation.',
    significance: 'While prudent, this decision alienated him from the masses (briefly) and left the revolution leaderless in strategy.',
    points: 0,
    icon: '✋',
    alignment: 'center'
  },
  {
    id: 'trial',
    type: 'event',
    title: 'Trial & Death Sentence',
    date: 'Dec 1896',
    shortDesc: 'The Mockery of Justice.',
    fullDesc: 'Arrested en route to Cuba. Accused of founding illegal societies and inciting rebellion.',
    significance: 'Rizal was innocent of the specific charge of starting the 1896 revolt, but guilty of being its soul and inspiration.',
    points: 5,
    icon: '⚖️',
    alignment: 'right'
  },
  {
    id: 'ultimo',
    type: 'literature',
    title: 'Mi Último Adiós',
    date: 'Dec 29, 1896',
    shortDesc: 'The Final Sacrifice.',
    fullDesc: 'Written in his cell. It is a masterpiece of patriotism, devoid of bitterness, filled only with love.',
    significance: 'It framed his death not as a defeat, but as a necessary sacrifice for the redemption of the motherland.',
    points: 10,
    icon: '✒️',
    alignment: 'left'
  },
  {
    id: 'execution',
    type: 'final',
    title: 'Martyrdom at Bagumbayan',
    date: 'Dec 30, 1896',
    shortDesc: 'Consummatum Est.',
    fullDesc: '7:03 AM. Rizal fell facing the sky.',
    significance: 'The shots fired at Luneta destroyed the Spanish Empire in Asia. Rizal became the eternal symbol of Filipino Nationhood.',
    points: 10,
    icon: '🇵🇭',
    alignment: 'center'
  }
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

const DetailModal = ({ node, onClose }: { node: RoadmapNode, onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
    <div 
      className="relative w-full max-w-2xl bg-[#FDF6E3] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      style={{ fontFamily: "'Crimson Text', serif" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className={`p-6 ${node.type === 'weakness' ? 'bg-gray-800' : 'bg-[#8B0000]'} text-white relative`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors"
        >
          ✕
        </button>
        <div className="text-xs font-bold tracking-widest uppercase opacity-80 mb-1">{node.date}</div>
        <h2 className="text-3xl font-bold title-font flex items-center gap-3">
          <span className="text-4xl">{node.icon}</span> {node.title}
        </h2>
      </div>

      {/* Body */}
      <div className="p-8 overflow-y-auto custom-scrollbar">
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase text-gray-500 tracking-wider mb-2">What Happened</h3>
          <p className="text-lg text-gray-800 leading-relaxed">{node.fullDesc}</p>
        </div>
        
        <div className={`p-5 rounded-lg border-l-4 ${node.type === 'weakness' ? 'bg-gray-100 border-gray-500' : 'bg-orange-50 border-orange-500'}`}>
          <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${node.type === 'weakness' ? 'text-gray-700' : 'text-orange-800'}`}>
            Historical Significance
          </h3>
          <p className="text-base italic text-gray-700">{node.significance}</p>
        </div>

        {node.points && (
          <div className="mt-6 flex justify-end">
            <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs font-bold text-gray-600">
              Exam Points: {node.points}
            </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const TimelineNode = ({ node, onClick }: { node: RoadmapNode, onClick: (n: RoadmapNode) => void }) => {
  const isCenter = node.alignment === 'center';
  const isWeakness = node.type === 'weakness';
  
  // Colors
  const typeColors = {
    event: 'border-blue-700 bg-blue-50 text-blue-900',
    literature: 'border-emerald-700 bg-emerald-50 text-emerald-900',
    political: 'border-indigo-800 bg-indigo-50 text-indigo-900',
    personal: 'border-amber-700 bg-amber-50 text-amber-900',
    weakness: 'border-gray-600 bg-gray-100 text-gray-800 grayscale',
    final: 'border-yellow-600 bg-gray-900 text-yellow-500'
  };
  
  const colorClass = typeColors[node.type] || typeColors.event;

  return (
    <div className={`flex w-full mb-12 ${isCenter ? 'justify-center' : node.alignment === 'left' ? 'flex-row-reverse' : ''}`}>
      
      {/* Spacer for layout balance */}
      {!isCenter && <div className="w-1/2 hidden md:block" />}

      {/* The Node Card */}
      <div className={`relative z-10 w-full md:w-[45%] ${isCenter ? 'md:w-[80%]' : ''} group`}>
        <ScrollReveal>
           {/* Connector Line (Desktop) */}
           {!isCenter && (
            <div className={`hidden md:block absolute top-6 ${node.alignment === 'left' ? '-right-10' : '-left-10'} w-10 h-0.5 bg-[#8B0000]/30`}>
               <div className={`absolute top-1/2 -translate-y-1/2 ${node.alignment === 'left' ? '-left-1' : '-right-1'} w-2 h-2 rounded-full bg-[#8B0000]`}></div>
            </div>
          )}

          <div 
            onClick={() => onClick(node)}
            className={`
              cursor-pointer relative p-6 rounded-xl border-l-4 shadow-lg transition-all duration-300 
              hover:-translate-y-1 hover:shadow-2xl
              ${colorClass}
              ${isWeakness ? 'opacity-90 hover:opacity-100 hover:grayscale-0' : ''}
              ${node.type === 'final' ? 'border-4 border-double' : ''}
            `}
          >
            {isWeakness && (
              <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow uppercase tracking-wide">
                Obstacle
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="text-3xl">{node.icon}</div>
              <div>
                <span className="text-xs font-bold uppercase opacity-60 tracking-widest mb-1 block">
                  {node.date}
                </span>
                <h3 className={`text-xl md:text-2xl font-bold title-font leading-tight mb-2 ${node.type === 'final' ? 'text-yellow-500' : ''}`}>
                  {node.title}
                </h3>
                <p className="text-sm md:text-base opacity-90 font-serif italic">
                  {node.shortDesc}
                </p>
                
                <div className="mt-4 text-xs font-bold uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Read More <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default function RizalTimelinePage() {
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5DC]" style={{ fontFamily: "'Crimson Text', serif" }}>
      
      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .title-font { font-family: 'Cinzel', serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { bg: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { bg: #888; border-radius: 3px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        body { background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png"); }
      `}</style>

      {/* Modal */}
      {selectedNode && <DetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />}

      {/* Hero Section */}
      <header className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2C1810] to-transparent opacity-10 pointer-events-none"></div>
        
        <ScrollReveal>
          <div className="inline-block mb-4 px-4 py-1 border border-[#8B0000] text-[#8B0000] text-xs tracking-[0.2em] uppercase rounded-full">
            Conceptual Roadmap
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2C1810] mb-6 title-font">
            Jose Rizal
          </h1>
          <p className="text-xl md:text-2xl text-[#5D4037] italic max-w-2xl mx-auto mb-8 leading-relaxed">
            &quot;I wish to show those who deny us patriotism that we know how to die for our duty and our convictions.&quot;
          </p>
          
          <div className="flex justify-center items-center gap-6 text-sm font-bold text-[#2C1810]/70">
            <div className="flex flex-col items-center">
              <span className="block w-12 h-1 bg-[#8B0000] mb-2"></span>
              <span>JOSH KENN VIRAY</span>
            </div>
            <div className="h-8 w-px bg-[#2C1810]/20"></div>
            <div className="flex flex-col items-center">
              <span className="block w-12 h-1 bg-[#8B0000] mb-2"></span>
              <span>SECTION 4CSC</span>
            </div>
          </div>
        </ScrollReveal>
      </header>

      {/* Main Timeline Container */}
      <main className="max-w-5xl mx-auto px-4 pb-32 relative">
        
        {/* The Central Spine Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B0000] via-[#2C1810] to-[#8B0000] opacity-20 hidden md:block transform -translate-x-1/2"></div>
        
        {/* Render Nodes */}
        {TIMELINE_DATA.map((node) => (
          <TimelineNode 
            key={node.id} 
            node={node} 
            onClick={setSelectedNode} 
          />
        ))}

        {/* Footer Legend */}
        <div className="mt-16 text-center">
          <h3 className="text-[#8B0000] title-font font-bold mb-6 text-xl">Legend</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
             <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded border border-emerald-200">📜 Literature</span>
             <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded border border-blue-200">🔔 Events</span>
             <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded border border-indigo-200">🤝 Politics</span>
             <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded border border-gray-400 grayscale">⚠️ Weakness/Detour</span>
          </div>
          
          <div className="mt-12 text-xs text-[#5D4037]/50 uppercase tracking-widest">
            Group 7 | 4CSC • 2025
          </div>
        </div>
      </main>

    </div>
  );
}