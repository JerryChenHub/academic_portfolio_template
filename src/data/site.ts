export const profile = {
  name: 'Boyang Chen',
  introduction: "I'm a senior at UCI studying mechanical engineering and math.",
  biography: [
    [
      { text: "I've interned at " },
      { text: 'AIRI Lab', url: 'https://airilab.com/' },
      { text: ' and ' },
      { text: 'Lumitron Technologies', url: 'https://www.lumitronxrays.com/' },
      { text: ". I've also done research with " },
      { text: "Wilson Ho's group", url: 'https://www.physics.uci.edu/~wilsonho/whoghp.htm' },
      { text: ' and ' },
      {
        text: "Julian J. Rimoli's lab",
        url: 'https://scholar.google.com/citations?user=R09eONcAAAAJ&hl=en',
      },
      { text: '.' },
    ],
    [
      {
        text: 'Currently, I am designing and building an automated propeller test stand at the ',
      },
      {
        text: 'UCI Aircraft Systems Laboratory',
        url: 'https://faculty.sites.uci.edu/aircraftsyslab/',
      },
      {
        text: ' to conduct experiments on propeller noise in special configurations.',
      },
    ],
    [{ text: 'I am a student pilot and I play piano.' }],
  ],
  portrait: 'media/jingcao.webp',
  portraitAlt: 'Boyang Chen portrait',
  updated: '13 March 2026',
};

export const socialLinks = [
  { label: 'Email', url: 'mailto:boyangc4@uci.edu' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jjingcao/' },
  { label: 'GitHub', url: 'https://github.com/jca0' },
  { label: 'Scholar', url: 'https://scholar.google.com/citations?user=sDHKAT0AAAAJ&hl=en' },
];

export const project = {
  title: 'ObNoDog: Shape Detector on Not a Dog',
  summary:
    "Real-time shape detection and classification on an FPGA using Connected Components Labeling and Moore's Neighbor Tracing.",
  context: 'F24 6.205 Final Project',
  image: 'media/obnodog.webp',
  imageAlt: 'ObNoDog FPGA shape detection demo',
  links: [
    { label: 'Code', url: 'https://github.com/jca0/ObNoDog-final' },
    { label: 'Report', url: 'https://www.mit.edu/~jingcao/docs/ObNoDog.pdf' },
  ],
};
