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

const projectTemplate = {
  title: 'ObNoDog: Shape Detector on Not a Dog',
  summary:
    "Real-time shape detection and classification on an FPGA using Connected Components Labeling and Moore's Neighbor Tracing.",
  context: 'F24 6.205 Final Project',
  image: 'media/obnodog.webp',
  imageAlt: 'ObNoDog FPGA shape detection demo',
  imageWidth: 720,
  imageHeight: 450,
  links: [
    { label: 'Code', url: 'https://github.com/jca0/ObNoDog-final' },
    { label: 'Report', url: 'https://www.mit.edu/~jingcao/docs/ObNoDog.pdf' },
  ],
};

export const nasaBlueSkies = {
  title: 'NASA Blue Skies Competition',
  summary:
    'We designed AIRSHIELD to detect aircraft damage with onboard sensors and machine learning.',
  context: '2026 · National Finalist',
  image: 'media/nasa_blue_skies_team.jpg',
  imageAlt: 'The UC Irvine AIRSHIELD team at the 2026 NASA Blue Skies Competition',
  imageWidth: 400,
  imageHeight: 300,
  imageUrl: 'https://engineering.uci.edu/news/2026/6/uc-irvine-students-win-nasa-blue-skies-award',
  projectPage: 'projects/nasa_blue_skies/',
  poster: {
    image: 'media/nasa_blue_skies_poster.webp',
    imageAlt: 'AIRSHIELD project poster for the 2026 NASA Blue Skies Competition',
    width: 2400,
    height: 1802,
  },
  links: [
    { label: 'Report', url: 'reports/2026_NASA_Blue_Skies_Competition_Technical_Report.pdf' },
    {
      label: 'UCI News',
      url: 'https://engineering.uci.edu/news/2026/6/uc-irvine-students-win-nasa-blue-skies-award',
    },
  ],
};

export const mae106Rover = {
  title: 'Pneumatic Rover',
  summary:
    'We built a rover powered by compressed air for MAE 106. I coordinated the team, helped with the SolidWorks design, and wrote and tuned the control code. We placed second in our competition group.',
  context: 'MAE 106 · UC Irvine',
  image: 'media/mae106_rover/rover_photo.webp',
  imageAlt: 'Our pneumatic rover with its air storage tire above the chassis',
  imageWidth: 1254,
  imageHeight: 1254,
  imageUrl: 'projects/mae106_rover/',
  projectPage: 'projects/mae106_rover/',
  links: [
    { label: 'GitHub', url: 'https://github.com/JerryChenHub/Pneumatic-Piston-Rover-Robot' },
  ],
};

export const projects = [
  nasaBlueSkies,
  mae106Rover,
  { ...projectTemplate, imageUrl: undefined, projectPage: undefined },
];
