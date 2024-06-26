// AboutMe.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Image from 'next/image';
import Profile from "../../public/profile.jpg";

const AboutMe = () => {
  return (
    <div className='py-32 text-center xl:text-left relative min-h-screen flex items-center justify-center'>
      <div className="w-full h-full center bottom-0 bg-planetEarth bg-cover bg-center bg-no-repeat absolute mix-blend-screen translate-z-0">
        {/* Background Image */}
      </div>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="relative bg-gray-800 p-8 rounded-lg max-w-2xl text-white shadow-lg mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full lg:-top-1 lg:-left-8 lg:w-40 lg:h-40 lg:rounded-lg bg-gray-700 overflow-hidden border-2 border-white shadow-md">
            <Image src={Profile} alt="Profile" width={200} height={200} className="w-full h-full object-cover"/>
          </div>
          <div className='lg:ml-6 lg:-pt-6 pt-8'>
            <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="text-4xl font-bold mb-4">
              About <span className='text-accent'>Me</span>
            </motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} initial={'hidden'} animate='show' exit='hidden'>
              Hey there! I&apos;m Hemant Soni, a passionate tech enthusiast with a love for exploring the world of coding and technology. Beyond the screen, you&apos;ll find me indulging in my curiosity about space exploration, diving into articles and videos on the latest missions and discoveries. When not immersed in the tech world, I enjoy spending downtime watching movies, anime, and web series. I find storytelling in all its forms not only entertaining but also a source of creativity and new perspectives.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
