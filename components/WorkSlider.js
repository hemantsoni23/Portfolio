// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'ChatViz',
          path: '/chatviz.jpg',
          url:'https://github.com/hemantsoni42/ChatViz',
        },
        {
          title: 'CelebLook',
          path: '/celeblook.jpg',
          url:'https://github.com/hemantsoni42/CelebLook',
        },
        {
          title: 'Pneumonia Detection',
          path: '/pneumonia.jpg',
          url:'https://github.com/hemantsoni42/Pneumonia-detection',
        },
        {
          title: 'FarmHome',
          path: '/farmhome.jpg',
          url:'https://github.com/hemantsoni42/Farmhome',
        },
      ],
    },
    {
      images: [
        {
          title: 'Data Analysis',
          path: '/analysis.jpg',
          url:'https://github.com/hemantsoni42/Data-Science',
        },
        {
          title: 'Uno',
          path: '/uno.jpg',
          url:'https://github.com/hemantsoni42/Uno',
        },
      ],
    },
  ],
};

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';
import Link from 'next/link';
import { RiGithubLine} from 'react-icons/ri';

import {BsArrowRight} from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable:true,
    }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'>
        {workSlides.slides.map((slide, index)=>{
          return <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index)=>{
                return ( 
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden'>
                    <Image src={image.path} width={500} height={300} alt=''/>

                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                    <div className='absolute -bottom-6 md:bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex flex-col md:flex-row items-center gap-x-2 text-[15px] md:text-[20px] tracking-[0.1rem] md:tracking-[0.2rem]'>
                        <div className='delay-100'>{image.title}</div>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><Link href={image.url} aria-label={image.title} target='/blank' ><RiGithubLine/></Link></div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </SwiperSlide>
        })}
    </Swiper>
  );
};

export default WorkSlider;
