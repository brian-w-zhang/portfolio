import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
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
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'Jan 2024 - Present',
    points: [
      "Individually designed and developed a website using React for McGill University's East Asian Studies Department, servicing 250+ undergraduate students and supporting 20+ professors",
      'Compiled input from student association executives to elevate their branding rooted in East Asian aesthetics, while prioritizing seamless UI/UX design, resulting in a 200% increase in website traffic',
    ],
  },
  {
    title: 'Firmware Developer',
    company_name: 'UW Orbital',
    icon: tesla,
    iconBg: '#fbc3bc',
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
    icon: shopify,
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
    icon: meta,
    iconBg: '#a2d2ff',
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
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
