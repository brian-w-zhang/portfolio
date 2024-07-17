import {
  meta,
  shopify,
  starbucks,
  tesla,
  zoomers,
  mcgill,
  orbital,
  ta,
  cynorix,
} from '../assets/images';
import {
  webring,
  c,
  cplus,
  figma,
  java,
  jupyter,
  matlab,
  mediapipe,
  numpy,
  opencv,
  pandas,
  python,
  reactnative,
  rtos,
  selenium,
  sql,
  jarvis,
  nlp,
  asl,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  flower,
  fridge,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: reactnative,
    name: 'Native',
    type: 'n/a',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind',
    type: 'Frontend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'n/a',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'n/a',
  },
  {
    imageUrl: c,
    name: 'C',
    type: 'n/a',
  },
  {
    imageUrl: cplus,
    name: 'C++',
    type: 'n/a',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: sql,
    name: 'SQL',
    type: 'n/a',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: jupyter,
    name: 'Jupyter',
    type: 'n/a',
  },
  {
    imageUrl: matlab,
    name: 'Matlab',
    type: 'n/a',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'n/a',
  },
  {
    imageUrl: mediapipe,
    name: 'Mediapipe',
    type: 'n/a',
  },
  {
    imageUrl: opencv,
    name: 'OpenCV',
    type: 'n/a',
  },
  {
    imageUrl: numpy,
    name: 'NumPy',
    type: 'n/a',
  },
  {
    imageUrl: pandas,
    name: 'Pandas',
    type: 'n/a',
  },
  {
    imageUrl: selenium,
    name: 'Selenium',
    type: 'n/a',
  },
];

export const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Cynorix',
    icon: cynorix,
    iconBg: '#ad6168',
    date: 'May 2024 - Present',
    points: [
      "Increased encryption speed by 30% through the implementation of a mathematically optimized compression algorithm for a secure file sharing app, reducing file transfer times and enhancing overall user experience.",
      "Spearheaded the development of innovative features for a comprehensive 2FA system across Android, macOS, Windows, and iOS platforms, leveraging Bluetooth device scanning and SSID verification to bolster security measures and user authentication.",
      "Orchestrated the development of a compliant iOS application focused on 2FA using Swift, prioritizing seamless user experience and robust data privacy. Implemented new features that significantly enhanced usability, contributing to a more intuitive and secure authentication process for users.",
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'McGill University',
    icon: mcgill,
    iconBg: '#fbc3bc',
    date: 'Jan 2024 - Present',
    points: [
      "Individually designed and developed a website using React for McGill University's East Asian Studies Department, servicing 250+ undergraduate students and supporting 20+ professors",
      'Compiled input from student association executives to elevate their branding rooted in East Asian aesthetics, while prioritizing seamless UI/UX design, resulting in a 200% increase in website traffic',
    ],
  },
  {
    title: 'Firmware Developer',
    company_name: 'UW Orbital',
    icon: orbital,
    iconBg: '#accbe1',
    date: 'Jan 2024 - May 2024',
    points: [
      'Developed embedded systems driver functions in C/C++ for the CubeSat’s temperature sensor',
      'Created a thermal management task with FreeRTOS, ensuring precise temperature data collection via sensor datasheets and I2C protocol for telemetry purposes, enhancing CubeSat reliability',
      'Implemented interrupt handler aligning with LM75BD specifications for the RM46 microcontroller to trigger callbacks for overtemperature scenarios, safeguarding CubeSat from harmful conditions',
    ],
  },
  {
    title: 'Chapter President',
    company_name: 'Target Alpha Canada',
    icon: ta,
    iconBg: '#b7e4c7',
    date: 'March 2022 - June 2023',
    points: [
      'Founded school’s leading finance club of 50+ members in association with Target Alpha Canada',
      'Led weekly meetings; tutored students in investing, stocks, presentation strategies and more',
      'Wharton Global High School Investment Competition Semi-Finalist (top 55 teams out of 1200+)',
    ],
  },
  {
    title: 'VP of Marketing',
    company_name: 'Zoomers',
    icon: zoomers,
    iconBg: '#d6bd6f',
    date: 'Sep 2020 - May 2021',
    points: [
      'Founded a startup apparel company with peers and mentors, raising money for Kids Help Phone through profit donations per unit sold',
      'Executed a cohesive content marketing plan on Instagram, raising awareness for youth mental health resources and accumulating over 350 followers',
      'Achieved zero marketing expenses by utilizing word-of-mouth strategies and organic social media growth, enabling the startup to break even',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Webring',
    iconUrl: webring,
    link: 'https://se-webring.xyz/',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/brian-w-zhang',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/brian-w-zhang/',
  },
];

export const projects = [
  {
    iconUrl: jarvis,
    theme: 'btn-back-red',
    name: 'Jarvis',
    description:
      'An interactive, 3D, gesture-controlled hologram environment. Use voice commands and natural hand gestures to manipulate 3D objects on a holographic projection, just like in Iron Man.',
    link: 'https://www.youtube.com/watch?v=qOElePxRUAs',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-orange',
    name: 'IMY',
    description:
      'A wholesome, retro-themed social media experience to relive nostalgic snapshots of the past. Designed to rekindle genuine user connection through gamified elements.',
    link: 'https://github.com/se28-vs-uoftHacks/frontend',
  },
  {
    iconUrl: asl,
    theme: 'btn-back-yellow',
    name: 'SignEase',
    description:
      'A 3D animated search engine for American Sign Language. Bridging communication gaps with an innovative learning experience, meticulously crafted to foster ASL education and awareness.',
    link: 'https://github.com/DeerHacks2024/frontend',
  },
  {
    iconUrl: nlp,
    theme: 'btn-back-green',
    name: 'Witcher Net',
    description:
      'A visualized, data driven exploration the Witcher book series through Natural Language Processing. A character relationship deep dive using web scraping, NER, and immersive network analysis.',
    link: 'https://github.com/brian-w-zhang/witcher_project.git',
  },
  {
    iconUrl: flower,
    theme: 'btn-back-blue',
    name: 'ARIA',
    description:
      'An Accessible Refugee Information App. Leverages a multilingual voice assistant and a fine tuned large language model trained on vetted refugee claim data for convenient legal education.',
    link: 'https://github.com/geraldyywang/ARIA',
  },
  {
    iconUrl: fridge,
    theme: 'btn-back-pink',
    name: 'PocketFridge',
    description:
      'A cute virtual pantry for all of your groceries. Scan a receipt, and a trained ML model takes care of uploading the items. Utilizes Google Gemini for tailored AI recipes and expiry date estimation.',
    link: 'https://github.com/genai-genesis/frontend',
  },
];
