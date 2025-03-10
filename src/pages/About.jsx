import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// test github configuration
// import { CTA } from "../components";
import { experiences, skills } from '../constants';

import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }} // Starts as transparent and blurry
      animate={{ opacity: 1, filter: "blur(0px)" }} // Fades in and clears the blur
      exit={{ opacity: 0, filter: "blur(10px)" }} // Fades out and adds blur
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} // Customize the duration, easing, and delay
      className="about-page"
    >
      <section className="max-container bg-custom-background">
        <h1 className="head-text text-white">
          Hi, I'm{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {' '}
            Brian!
          </span>{' '}
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            A full stack developer studying Software Engineering at the University
            of Waterloo. Driven by a passion for leveraging technology to create
            meaningful and impactful solutions. In my free time, I enjoy playing
            badminton, chess, cello, and also like to experiment with graphic
            design.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text text-white">Technical Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <p className="text-sm text-center mt-20 py-1 text-slate-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text text-white">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've collaborated with diverse companies, refining my skills
              alongside talented teams. Here's an overview:
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                  dateClassName="text-white mx-3"
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500 font-normal pl-1 text-sm"
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

        {/* <hr className="border-slate-200" /> */}

        {/* <CTA /> */}
        <Footer />
      </section>
    </motion.div>
  );
};

export default About;
