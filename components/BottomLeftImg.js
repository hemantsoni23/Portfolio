import Image from 'next/image';


const Circles = () => {
  return (
  <div className='w-[200px] xl:w-[300px] absolute bottom-0 left-0 md:brightness-150 mix-blend-color-dodge  z-10'>
    <Image src={'/stars.jpg'} width={260} height={200} alt='' className='w-full h-full' />
  </div>);
};

export default Circles;
