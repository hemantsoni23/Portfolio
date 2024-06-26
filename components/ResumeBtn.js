import { RiGraduationCapLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ResumeBtn = () => {
  const handleViewResume = () => {
    const resumeUrl = '/Hemant_Soni_Resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    // <motion.div
    //   variants={fadeIn('up', 0.4)}
    //   initial='hidden'
    //   animate='show'
    //   exit='hidden'
    //   className='flex-1 flex flex-col gap-6 w-full mx-auto'
    // >
      <button
        className='btn rounded-full border border-white max-w-[170px] px-8 items-center justify-center overflow-hidden '
        onClick={handleViewResume}
      >
          View Resume
      </button>

    // </motion.div>
  );
};

export default ResumeBtn;
