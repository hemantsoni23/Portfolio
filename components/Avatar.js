import Image from 'next/image';


const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image src={'/file.png'} width={578} height={578} alt='' className='translate-z-0 w-full h-full' loading='lazy'/>
  </div>
  );
};

export default Avatar;
