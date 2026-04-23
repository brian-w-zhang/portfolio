import {
  simplify,
  baycrest,
  watstreet,
  tesla,
  mcgill,
  orbital,
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
    company_name: 'Simplify',
    icon: simplify,
    iconBg: '#FFF',
    date: 'Sep 2025 - Feb 2026',
    points: [
      'Spearheaded email integration for 1M+ users, automating job tracking via FastAPI, PostgreSQL, and Redis caching',
      'Powered automatic status updates for 200M+ job applications through email intent classification using SpaCy NLP',
      'Streamlined discovery of 27.8M+ untracked applications with Elasticsearch multi-match queries and semantic similarity',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Wat Street',
    icon: watstreet,
    iconBg: '#000',
    date: 'Dec 2024 - May 2025',
    points: [
      'Engineered an options strategy builder in Next.js, enabling simulation of quantitative trading strategies with ML models',
      'Developed an interactive stock dashboard using Polygon.io, improving portfolio performance monitoring with price analytics',
      'Built a real-time stock heatmap via Next.js, visx, and live market data to quickly visualize sector movements and anomalies',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Baycrest',
    icon: baycrest,
    iconBg: '#FFF',
    date: 'Jan 2025 - Apr 2025',
    points: [
      'Launched a mobile app with React Native and Node.js for the Canadian-Caregiver Assessment and Resources Tool (C-CART), empowering caregivers with personalized resource recommendations to alleviate burnout and financial stress',
      'Streamlined C-CART resource quality monitoring with automated web scraping using Python, Playwright, and Docker',
      'Expanded user base of a cognitive rehab program by 23% by localizing a Vue.js + PostgreSQL platform for French speakers',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Cynorix',
    icon: cynorix,
    iconBg: '#ad6168',
    date: 'May 2024 - Aug 2024',
    points: [
      "Increased encryption speed by 64% with mathematically optimized compression for a MERN stack file sharing service",
      "Spearheaded novel two-factor authentication system using Node.js and Firebase Cloud Messaging, integrating Wifi, Bluetooth, and geolocation data with a React frontend, Electron desktop app, and Swift & Kotlin mobile apps",
      "Optimized authentication system through a 93% reduction in average wait time (20 seconds to 1.4 seconds) using asynchronous Node.js operations, Python-based child processes, and improved Firestore database handling",
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
    title: 'Web Developer',
    company_name: 'McGill University',
    icon: mcgill,
    iconBg: '#fbc3bc',
    date: 'Jan 2024 - May 2024',
    points: [
      "Individually designed and developed a website using React for McGill University's East Asian Studies Department, servicing 250+ undergraduate students and supporting 20+ professors",
      'Compiled input from student association executives to elevate their branding rooted in East Asian aesthetics, while prioritizing seamless UI/UX design, resulting in a 200% increase in website traffic',
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
