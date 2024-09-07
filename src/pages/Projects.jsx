import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
// import { CTA } from "../components";
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }} // Starts as transparent and blurry
      animate={{ opacity: 1, filter: "blur(0px)" }} // Fades in and clears the blur
      exit={{ opacity: 0, filter: "blur(10px)" }} // Fades out and adds blur
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} // Customize the duration, easing, and delay
      className="about-page"
    >
      <section className="max-container">
        <h1 className="head-text  text-white">
          My{' '}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          I'm deeply committed to project based learning, continuously seeking
          opportunities to expand my knowledge and skillset. Listed below are some
          highlights that I have thoroughly enjoyed working on.
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full text-white" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <hr className="border-slate-200" /> */}

        {/* <CTA /> */}
        <Footer />
      </section>
    </motion.div>
  );
};

export default Projects;
