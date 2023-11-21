import ParticlesContainer from '../components/ParticlesContainer';
import ResumeBtn from '../components/ResumeBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='  bg-earth bg-cover bg-right bg-no-repeat w-full h-full  absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
        <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit={'hidden'} className='h1 text-4xl md:text-5xl font-mono'>
            {`Hello, It's `}
            <br />
            <span className='text-accent'>{`Hemant Soni`}</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit={'hidden'} className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg md:text-xl font-mono text-[30px]'>
            {`I am `}
            <span className='text-accent font-bold '>
              <TypeAnimation
                sequence={[
                  ' Frontend Developer',
                  1100,
                  ' Data Analyst',
                  1100,
                  ' Python Developer',
                  1100
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </motion.p>
          
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
            className='hidden xl:flex'>
            <ResumeBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <ParticlesContainer />
        <motion.div variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit={'hidden'}
          transition={{ duration: 1, ease: 'easeInOut' }} className='w-full h-full max-w-[578px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[6%]'><Avatar /></motion.div>
      </div>
    </div>
  );
};

export default Home;
