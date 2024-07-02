// SkillsExperienceEducation.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BsCCircle } from "react-icons/bs";
import { RiFileExcel2Fill } from 'react-icons/ri';
import { SiNextdotjs, SiFramer, SiMongodb, SiPowerbi, SiPandas, SiNumpy, SiFlask, SiStreamlit, SiJupyter, SiMysql, SiExpress, SiPostgresql } from "react-icons/si";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 key={1} color='black'/>, <FaCss3 key={2} color='black'/>, <FaJs key={3} color='black'/>, <FaReact key={4} color='black'/>, <SiNextdotjs key={5} color='black'/>, <FaNodeJs key={6} color='black'/>, <SiExpress key={7} color='black'/>],
      },
      {
        title: 'Programming Languages',
        icons: [<FaPython key={1} color='black'/>, <TbBrandCpp key={2} color='black'/>, <FaJava key={3} color='black'/>, <BsCCircle key={4} color='black'/>],
      },
      {
        title: 'Libraries',
        icons: [<SiPandas key={1} color='black'/>, <SiNumpy key={2} color='black'/>, <SiFlask key={3} color='black'/>, <SiStreamlit key={4} color='black'/>],
      },
      {
        title: 'Databases',
        icons: [<SiMongodb key={1} color='black'/>, <SiMysql key={2} color='black'/>, <SiPostgresql key={3} color='black'/>],
      },
      {
        title: 'Data Visualization',
        icons: [<SiPowerbi key={1} color='black'/>, <SiJupyter key={2} color='black'/>, <RiFileExcel2Fill key={3} color='black'/>],
      },
      {
        title: 'Tools',
        icons: [<FaGithub key={1} color='black'/>, <FaDocker key={2} color='black'/>, <SiFramer key={3} color='black'/>],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      { title: 'Software Development Intern - WizzInfoTech', stage: 'Nov. 2023 - Feb. 2024' },
      { title: 'Python & NodeJS Developer (Internship) - Partypal Solutions Pvt Ltd.', stage: 'July 2023 - Sep. 2023' },
    ],
  },
  {
    title: 'education',
    info: [
      { title: 'Bachelor of Technology in Computer Science and Engineering - Global Institute of Technology, Jaipur (Rajasthan)', stage: '2020-2024', cgpa: '8.95' },
      { title: 'Higher Secondary Education - Jai Durga Sr. Sec. School, Jaipur (Rajasthan)', stage: '2019', percentage: '77.40' },
      { title: 'Secondary Education - Jai Durga Sr. Sec. School, Jaipur (Rajasthan)', stage: '2017', percentage: '73.67' },
    ],
  },
];

const SkillsExperienceEducation = () => {
  const [selected, setSelected] = useState('skills');

  const renderContent = () => {
    const currentData = aboutData.find((data) => data.title === selected);
    if (!currentData) return null;

    return currentData.info.map((item, index) => (
      <div key={index} className="mb-4">
        {selected === 'skills' ? (
          <div className="flex flex-wrap">
            <h3 className="text-xl font-bold text-black">{item.title} - </h3>
            <div className='flex flex-row'>
              {item.icons.map((icon, iconIndex) => (
                <div key={iconIndex} className="mr-2 mt-2 text-2xl">
                  {icon}
                </div>
              ))}
          </div>
            </div>
        ) : (
          <div>
            <h3 className="text-xl text-black font-bold">{item.title}</h3>
            <p>
            {item.stage && <span className="text-sm text-gray-800">{item.stage} </span>}
            {item.cgpa && <span className="text-sm text-gray-800">  &nbsp; CGPA: {item.cgpa}</span>}
            {item.percentage && <span className="text-sm text-gray-800">  &nbsp; Percentage: {item.percentage}</span>}
            </p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="w-full h-full center bottom-0 bg-planetEarth bg-cover bg-center bg-no-repeat absolute mix-blend-screen translate-z-0">
        {/* Background Image */}
      </div>
      <div className="py-32 min-h-screen flex items-center justify-center relative flex-col xl:flex-row">
        <div className="flex xl:flex-col mb-4 xl:mb-0 xl:mr-4">
          {aboutData.map((data, index) => (
            <motion.div
              key={index}
              className={`p-4 mb-4 mr-4 xl:mb-0 xl:mr-0 xl:mt-4 rounded-lg shadow-lg cursor-pointer ${
                selected === data.title ? 'text-accent bg-white' : 'text-black bg-gray-200'
              }`}
              onClick={() => setSelected(data.title)}
              variants={fadeIn('right', 0.3)} initial='hidden' animate='show' exit={'hidden'}
            >
              <h2 className="text-lg font-bold">{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</h2>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex-1 p-4 rounded-lg shadow-lg bg-white max-w-3xl"
          variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit={'hidden'}
        >
          {renderContent()}
        </motion.div>
      </div>
    </>
  );
};

export default SkillsExperienceEducation;
