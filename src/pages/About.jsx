import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { experiences } from '../constants';

import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      className="about-page"
    >
      <section className="max-container">

        <div className="about-intro">
          <h1 className="head-text text-white">
            Hi, I&apos;m{' '}
            <span className="blue-gradient_text font-semibold">Brian.</span>
          </h1>
          <p className="about-body mt-6">
            A full stack developer studying Software Engineering at the University
            of Waterloo. Driven by a passion for leveraging technology to create
            meaningful and impactful solutions. In my free time, I enjoy playing
            badminton, chess, cello, and also like to experiment with graphic
            design.
          </p>
        </div>

        <div className="about-divider" />

        <div className="py-14">
          <h3 className="subhead-text text-white mt-1">Work Experience</h3>

          <div className="mt-10">
            <VerticalTimeline lineColor="rgba(255,255,255,0.08)">
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                    boxShadow: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className={`object-contain ${
                          experience.company_name === 'Baycrest'
                            ? 'w-[68%] h-[68%]'
                            : 'w-[60%] h-[60%]'
                        }`}
                      />
                    </div>
                  }
                  contentStyle={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderBottom: '2px solid rgba(255,255,255,0.12)',
                    boxShadow: 'none',
                    borderRadius: '8px',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.08)' }}
                  dateClassName="text-slate-400 mx-3 text-sm"
                >
                  <div>
                    <h3 className="text-white text-lg font-poppins font-semibold leading-snug">
                      {experience.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium mt-0.5" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-4 space-y-2 border-t border-white/5 pt-4">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-slate-400 text-sm leading-relaxed pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-slate-500"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <Footer />
      </section>
    </motion.div>
  );
};

export default About;
