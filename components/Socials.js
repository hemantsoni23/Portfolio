import Link from 'next/link';
import { RiGithubLine, RiMailLine, RiLinkedinLine} from 'react-icons/ri';
import {FaKaggle} from 'react-icons/fa';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.linkedin.com/in/hemant-soni-052199205/'} target='/blank' className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine className='w-[25px] h-[25px]'/>
    </Link>
    <Link href={'https://github.com/hemantsoni42'} target='/blank' className='hover:text-accent transition-all duration-300'>
      <RiGithubLine className='w-[25px] h-[25px]'/>
    </Link>
    <Link href={'/contact'} className='hover:text-accent transition-all duration-300'>
      <RiMailLine className='w-[25px] h-[25px]'/>
    </Link>
    <Link href={'https://www.kaggle.com/hemantsoni042'} target='/blank' className='hover:text-accent transition-all duration-300'>
      <FaKaggle className='w-[22px] h-[22px]'/>
    </Link>
  </div>
  );
};

export default Socials;
