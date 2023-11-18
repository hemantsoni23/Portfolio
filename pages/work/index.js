import WorkSlider from '../../components/WorkSlider'
import BottomLeftImg from "../../components/BottomLeftImg";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
  <div className='h-full  py-36 flex items-center'>
    <div className='w-full h-full right-0 bottom-0 bg-galaxyNight md:brightness-150 bg-cover bg-center bg-no-repeat  absolute mix-blend-color-dodge translate-z-0'>
    <BottomLeftImg/>
    </div>
    <div className='container mx-auto' >
      <div className='flex flex-col xl:flex-row gap-x-8 '>
        <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className='h2 xl:mt-12'>
            My Projects <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo dolorum dolor fuga nulla eveniet illo, magnam blanditiis ipsum ad possimus nobis rerum vel corrupti deleniti repellat hic perferendis facilis.
          </motion.p>
        </div>
        <motion.div variants={fadeIn('up',0.6)}
          initial='hidden'
          animate='show'
          exit={'hidden'} className='w-full xl:w-[65%] '>
          <WorkSlider/>
        </motion.div>
      </div>
    </div>
    {/* <Bulb/> */}
  </div>
  );
};

export default Work;

// bg-none xl:bg-astronaut xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full md:brightness-100 absolute mix-blend-color-dodge translate-z-0
