import Image from 'next/image';

const TopLeftImg = () => {
  return (
  <div className='absolute left-0 top-0 md:brightness-150 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
    <Image src={'/top-left-img-3.jpg'} width={400} height={400} alt=''/>
    {/* <Image src={'/top-left-img.png'} width={400} height={400} alt=''/> */}
  </div>
  );
};

export default TopLeftImg;
