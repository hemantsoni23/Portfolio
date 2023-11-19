import WorkSlider from '../../components/WorkSlider'
import BottomLeftImg from "../../components/BottomLeftImg";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full  py-36 flex items-center'>
      <div className='w-full h-full right-0 bottom-0 bg-galaxyNight md:brightness-150 bg-cover bg-center bg-no-repeat  absolute mix-blend-color-dodge translate-z-0'>
        <BottomLeftImg />
      </div>
      <div className='container mx-auto' >
        <div className='flex flex-col xl:flex-row gap-x-8 '>
          <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit={'hidden'}
              className='h2 xl:mt-12'>
              My Projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit={'hidden'}
              className='hidden xl:flex lg:flex md:flex xl:max-w-[500px] lg:max-w-[900px] xl:mx-0 xl:mb-12 px-2 xl:px-0 xl:leading-loose xl:tracking-wide mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Explore a diverse range of projects that showcase my passion and expertise. From crafting seamless frontend experiences to diving into data analysis, Python development, and intricate machine learning projects, each endeavor reflects my commitment to innovation and problem-solving. Join me on this journey through technology, where every project is a step forward in creating impactful solutions.
            </motion.p>
            <motion.p variants={fadeIn('right', 0.4)} initial={'hidden'} animate='show' exit='hidden' className=" xl:hidden lg:hidden md:hidden max-w-[500px] mb-6 leading-loose">
              Explore my diverse projects, spanning seamless frontend experiences, data analysis, Python development, and intricate machine learning. Each reflects my commitment to innovation. Join me on this tech journey, where every project is a step towards impactful solutions.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit={'hidden'} className='w-full xl:w-[65%] '>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
