import {
  meta,
  shopify,
  starbucks,
  tesla,
  zoomers,
  mcgill,
  orbital,
  ta,
} from '../assets/images';
import {
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
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
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
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
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
    date: 'Jan 2024 - Present',
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
    theme: 'btn-back-green',
    name: 'IMY',
    description:
      'A wholesome, retro-themed social media experience to relive nostalgic snapshots of the past. Designed to rekindle genuine user connection through gamified elements.',
    link: 'https://github.com/se28-vs-uoftHacks/frontend',
  },
  {
    iconUrl: asl,
    theme: 'btn-back-blue',
    name: 'SignEase',
    description:
      'A 3D animated search engine for American Sign Language. Bridging communication gaps with an innovative learning experience, meticulously crafted to foster ASL education and awareness.',
    link: 'https://github.com/DeerHacks2024/frontend',
  },
  {
    iconUrl: nlp,
    theme: 'btn-back-pink',
    name: 'Witcher Net',
    description:
      'A visualized, data driven exploration the Witcher book series through Natural Language Processing. A character relationship deep dive using web scraping, NER, and immersive network analysis.',
    link: 'https://github.com/brian-w-zhang/witcher_project.git',
  },
];
