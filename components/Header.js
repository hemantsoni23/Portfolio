import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';
const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-3 py-4'>
        <Link href={'/'} aria-label="Logo"><Image src={'/logo.png'} width={2000} height={737} alt='' priority={true} className='w-[95px] h-[37px]'/></Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
