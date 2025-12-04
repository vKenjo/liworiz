// --- TYPES ---
export interface Character {
  initials: string;
  name: string;
  role: string;
  description: string;
}

export interface Theme {
  title: string;
  description: string;
}

export interface RequiredElement {
  id: string;
  number: number;
  title: string;
  year: string;
  brief: string;
  sectionId: string;
  color: string;
}

export interface TimelinePoint {
  year: number;
  position: 'high' | 'mid' | 'low';
  title: string;
  brief: string;
  type: 'triumph' | 'setback' | 'milestone' | 'martyrdom';
  sectionId: string;
}

// --- REQUIRED ELEMENTS (Section 1) ---
export const REQUIRED_ELEMENTS: RequiredElement[] = [
  {
    id: 'childhood',
    number: 1,
    title: 'Childhood & Early Influences',
    year: '1861-1877',
    brief: 'Family influences, GOMBURZA execution, and Ateneo education shaped his early nationalism',
    sectionId: 'childhood',
    color: 'from-[#5D4E37] to-[#3E2723]'
  },
  {
    id: 'sa-aking',
    number: 2,
    title: 'Sa Aking Mga Kababata',
    year: '~1869',
    brief: 'Early recognition of language as key to national identity and youth empowerment',
    sectionId: 'sa-aking',
    color: 'from-[#1e3a8a] to-[#1e40af]'
  },
  {
    id: 'la-juventud',
    number: 3,
    title: 'A La Juventud Filipina',
    year: '1879',
    brief: 'Prize-winning poem declaring Filipino youth as hope for national progress',
    sectionId: 'la-juventud',
    color: 'from-[#0f766e] to-[#115e59]'
  },
  {
    id: 'noli-elias',
    number: 4,
    title: 'Noli Me Tangere - Elias',
    year: '1887',
    brief: 'Revolutionary voice challenging Ibarra\'s reformism - reform vs. revolution debate',
    sectionId: 'noli',
    color: 'from-[#1a1a2e] to-[#2d132c]'
  },
  {
    id: 'fili-simoun',
    number: 5,
    title: 'El Filibusterismo - Simoun & Florentino',
    year: '1891',
    brief: 'Failed violent revolution vs. message of deserving freedom through virtue',
    sectionId: 'fili',
    color: 'from-[#722F37] to-[#4a0e0e]'
  },
  {
    id: 'malolos',
    number: 6,
    title: 'Letter to Young Women of Malolos',
    year: '1889',
    brief: 'Advocating women\'s education as liberation from friar control and path to nation-building',
    sectionId: 'malolos',
    color: 'from-[#831843] to-[#6b0f3d]'
  },
  {
    id: 'la-liga',
    number: 7,
    title: 'La Liga Filipina',
    year: '1892',
    brief: 'Last organized attempt at peaceful reform before exile and revolutionary split',
    sectionId: 'la-liga',
    color: 'from-[#92400e] to-[#78350f]'
  },
  {
    id: 'dapitan',
    number: 8,
    title: 'Dapitan Exile & Ideological Conflicts',
    year: '1892-1896',
    brief: 'Productive exile proving Filipino capability, but opposing Katipunan\'s revolution',
    sectionId: 'dapitan',
    color: 'from-[#064e3b] to-[#022c22]'
  },
  {
    id: 'mi-ultimo',
    number: 9,
    title: 'Mi Último Adiós',
    year: 'Dec 29, 1896',
    brief: 'Final poem expressing ultimate sacrifice and love for country on eve of execution',
    sectionId: 'ultimo',
    color: 'from-[#1B4332] to-[#081c15]'
  },
  {
    id: 'execution',
    number: 10,
    title: 'Execution & Martyrdom',
    year: 'Dec 30, 1896',
    brief: 'Transformation from reformist intellectual to eternal symbol of Filipino nationhood',
    sectionId: 'execution',
    color: 'from-[#18181b] to-[#000000]'
  }
];

// --- WAVE TIMELINE (Section 2 - Brief) ---
export const WAVE_TIMELINE: TimelinePoint[] = [
  { year: 1861, position: 'mid', title: 'Birth', brief: 'Born in Calamba to educated family', type: 'milestone', sectionId: 'childhood' },
  { year: 1872, position: 'low', title: 'GOMBURZA', brief: 'Execution awakens nationalism', type: 'setback', sectionId: 'childhood' },
  { year: 1877, position: 'high', title: 'Ateneo', brief: 'Graduated with honors', type: 'triumph', sectionId: 'childhood' },
  { year: 1879, position: 'high', title: 'A La Juventud', brief: 'Won poetry contest', type: 'triumph', sectionId: 'la-juventud' },
  { year: 1882, position: 'mid', title: 'To Europe', brief: 'Left for Spain secretly', type: 'milestone', sectionId: 'childhood' },
  { year: 1887, position: 'high', title: 'Noli Published', brief: 'First novel exposes abuses', type: 'triumph', sectionId: 'noli' },
  { year: 1888, position: 'low', title: 'Leonor Marries', brief: 'Heartbreak over lost love', type: 'setback', sectionId: 'fili' },
  { year: 1889, position: 'mid', title: 'Malolos Letter', brief: 'Advocates women\'s education', type: 'milestone', sectionId: 'malolos' },
  { year: 1891, position: 'high', title: 'El Fili Published', brief: 'Darker sequel on revolution', type: 'triumph', sectionId: 'fili' },
  { year: 1892, position: 'high', title: 'La Liga', brief: 'Founded reform organization', type: 'triumph', sectionId: 'la-liga' },
  { year: 1892, position: 'low', title: 'Arrested', brief: 'Exiled to Dapitan', type: 'setback', sectionId: 'dapitan' },
  { year: 1895, position: 'mid', title: 'Dapitan Years', brief: 'Productive community work', type: 'milestone', sectionId: 'dapitan' },
  { year: 1896, position: 'low', title: 'Revolution', brief: 'Katipunan rises without him', type: 'setback', sectionId: 'dapitan' },
  { year: 1896, position: 'low', title: 'Trial', brief: 'Sentenced to death', type: 'setback', sectionId: 'execution' },
  { year: 1896, position: 'high', title: 'Martyrdom', brief: 'Executed at Bagumbayan', type: 'martyrdom', sectionId: 'execution' },
];

// --- SA AKING MGA KABABATA THEMES ---
export const SA_AKING_THEMES: Theme[] = [
  { title: 'Language as National Identity', description: 'The poem asserts that one\'s native language is the marker of nationhood and cultural dignity, arguing that Tagalog is as noble as any European language.' },
  { title: 'Youth and Education', description: 'Establishes the pattern of addressing Filipino youth as agents of change, a theme that would recur throughout Rizal\'s works.' },
  { title: 'Cultural Pride', description: 'Challenges colonial narratives of Filipino inferiority by celebrating indigenous language and culture as inherently valuable.' },
];

// --- A LA JUVENTUD FILIPINA THEMES ---
export const LA_JUVENTUD_THEMES: Theme[] = [
  { title: 'Youth as National Hope', description: 'Filipino youth are declared the "fair hope of my Fatherland," positioning them as the vanguard of progress and liberation.' },
  { title: 'Intellectual Excellence', description: 'Calls for Filipinos to cultivate their minds through arts, sciences, and literature to prove their equality with other nations.' },
  { title: 'Breaking Colonial Chains', description: 'Education and intellectual achievement are presented as the means to break free from colonial oppression and inferiority narratives.' },
];

// --- MALOLOS LETTER THEMES ---
export const MALOLOS_THEMES: Theme[] = [
  { title: 'Women\'s Education as Liberation', description: 'Educated women cannot be enslaved by superstition or friar manipulation—knowledge makes them free agents.' },
  { title: 'Friar Control Exposed', description: 'Rizal explicitly critiques how friars kept women ignorant to control entire families and communities through them.' },
  { title: 'Women as Nation-Builders', description: 'Educated mothers raise enlightened children, making women\'s liberation essential for national transformation.' },
  { title: 'Moral Courage', description: 'Praises the 20 women who defied social pressure and friar opposition, presenting them as models for all Filipinos.' },
];

// --- LA LIGA FILIPINA THEMES ---
export const LA_LIGA_THEMES: Theme[] = [
  { title: 'Unity Through Organization', description: 'Attempted to unify Filipinos across class and regional divides through structured civic action.' },
  { title: 'Practical Reform', description: 'Focused on concrete programs: education, economic cooperation, legal defense—not just intellectual discourse.' },
  { title: 'Non-Violent Resistance', description: 'Explicitly reformist and peaceful, representing Rizal\'s commitment to change through legitimate means.' },
  { title: 'Tragic Failure', description: 'Its dissolution convinced radical members that peaceful reform was impossible, leading to the Katipunan\'s formation.' },
];

// --- DAPITAN EXILE THEMES ---
export const DAPITAN_THEMES: Theme[] = [
  { title: 'Proving Filipino Capability', description: 'Through community development, Rizal demonstrated that Filipinos could achieve progress when given freedom.' },
  { title: 'Productive Resistance', description: 'Turned exile into opportunity, building schools, practicing medicine, and conducting scientific research.' },
  { title: 'Ideological Isolation', description: 'His opposition to the Katipunan revealed his disconnection from the revolutionary sentiment sweeping the country.' },
  { title: 'Consistency of Principle', description: 'Maintained his reformist philosophy even as the nation moved toward armed revolution.' },
];

// --- EXECUTION THEMES ---
export const EXECUTION_THEMES: Theme[] = [
  { title: 'Martyrdom as Transformation', description: 'Rizal\'s execution transformed him from a cautious reformist into the supreme symbol of Filipino nationalism and sacrifice.' },
  { title: 'The Power of Unjust Death', description: 'Spain\'s execution of an innocent man galvanized the revolution more than any of his writings had.' },
  { title: 'Tragic Irony', description: 'Charged with inspiring revolution he opposed, showing how even reformist ideas become revolutionary in oppressive contexts.' },
  { title: 'Eternal Legacy', description: 'His death achieved what his life could not—unifying Filipinos across ideological divides in the fight for independence.' },
];
