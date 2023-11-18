import React, { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BsCCircle } from "react-icons/bs";
import { RiFileExcel2Fill } from 'react-icons/ri';
import {
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiPowerbi,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiStreamlit,
  SiJupyter,
  SiMysql,
  SiExpress,
  SiPostgresql
} from "react-icons/si";
import BottomLeftImg from "../../components/BottomLeftImg";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs />,
          <SiExpress />,
        ],
      },
      {
        title: 'Programming Languages',
        icons: [
          <FaPython />,
          <TbBrandCpp />,
          <FaJava />,
          <BsCCircle />,
        ],
      },
      {
        title: 'Libraries',
        icons: [
          <SiPandas />,
          <SiNumpy />,
          <SiFlask />,
          <SiStreamlit />,
        ],
      },
      {
        title: 'Databases',
        icons: [
          <SiMongodb />,
          <SiMysql />,
          <SiPostgresql />,
        ],
      },
      {
        title: 'Data Visualization',
        icons: [
          <SiPowerbi />,
          <SiJupyter />,
          <RiFileExcel2Fill />,
        ],
      },
      {
        title: 'Tools',
        icons: [
          <FaGithub />,
          <FaDocker />,
          <SiFramer />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Python & NodeJS Developer (Internship) - Partypal Solutions Pvt Ltd.',
        stage: 'July 2023 - Sep. 2023',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Bachelor of Technology in Computer Science and Engineering - Global Institute of Technology, Jaipur (Rajasthan)',
        stage: '2020-2024',
      },
      {
        title: 'Higher Secondary Education - Jai Durga Sr. Sec. School, Jaipur (Rajasthan)',
        stage: '2019',
      },
      {
        title: 'Secondary Education - Jai Durga Sr. Sec. School, Jaipur (Rajasthan)',
        stage: '2017',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='py-32 text-center xl:text-left'>
      <div className="w-full h-full center bottom-0 bg-planetEarth bg-cover bg-center bg-no-repeat absolute  mix-blend-color-dodge translate-z-0">
        <BottomLeftImg />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2">
            About <span className='text-accent'>Me</span>
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial={'hidden'} animate='show' exit='hidden' className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:leading-loose xl:tracking-wide">
            Hello! I&apos;m Hemant Soni, a tech enthusiast exploring coding and technology. Beyond the screen, you&apos;ll find me indulging in my curiosity about space exploration. In my downtime, I enjoy movies, anime, and web series, finding storytelling a wellspring of creativity. Thanks !
          </motion.p>

        </div>
        <motion.div variants={fadeIn('left', 0.2)} initial='hidden' animate='show' exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className=" py-2 xl:py-6  flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
