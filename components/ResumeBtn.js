import { RiGraduationCapLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ProjectsBtn = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Hemant Soni Resume.pdf'; 
    downloadLink.download = 'Hemant Soni Resume.pdf'; 
    downloadLink.click();
  };

  return (
    <motion.div variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
      <button
        className='btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center
        justify-center overflow-hidden hover:before-accent group'
        onClick={handleDownloadResume}
      >
        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-normal'>Download Resume</span>
        <RiGraduationCapLine className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
      </button>
    </motion.div>
  );
};

export default ProjectsBtn;
