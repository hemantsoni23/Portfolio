import Link from 'next/link';
import { RiGithubLine, RiMailLine, RiLinkedinLine, RiGraduationCapLine } from 'react-icons/ri';
import { FaKaggle } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/hemant-soni-052199205/'} target='/blank' aria-label="LinkedIn" title="LinkedIn" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine className='w-[25px] h-[25px]' />
      </Link>
      <Link href={'https://github.com/hemantsoni23'} target='/blank' aria-label="Github" title="Github" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine className='w-[25px] h-[25px]' />
      </Link>
      <Link href={'/contact'} aria-label="Mail" title="Mail" className='hover:text-accent transition-all duration-300'>
        <RiMailLine className='w-[25px] h-[25px]' />
      </Link>
      <Link href={'https://www.kaggle.com/hemantsoni042'} target='/blank' aria-label="Kaggle" title="Kaggle" className='hover:text-accent transition-all duration-300'>
        <FaKaggle className='w-[22px] h-[22px]' />
      </Link>
      <Link href={'https://drive.google.com/file/d/16Ct89Y8AF4eoscdXNR2Upy8sr3-A3uQU/view?usp=sharing'} target='/blank' aria-label="Resume" title="View Resume" className='hover:text-accent transition-all duration-300'>
        <RiGraduationCapLine className='w-[25px] h-[25px]' />
      </Link>
    </div>
  );
};

export default Socials;
