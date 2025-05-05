import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className="w-full red-white-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        className="bg-tertiary hover:bg-hoverTertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-colors duration-300"
      >
        <img
          src={icon}
          // alt='web-development'
          alt={title}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I Am</p>
        <h2 className={styles.sectionHeadText}>Snapshot.</h2>
      </motion.div>

      <motion.p className="text-justify" variants={fadeIn('', '', 0.1, 1)}>
         I am a fullstack developer with a strong background in graphic design, UI/UX, and multimedia content creation. Currently, I am expanding my skills into web development, focusing on technologies such as React.js, Next.js, and Node.js. My experience in visual design, combined with my growing technical expertise, enables me to create user-friendly, aesthetically appealing, and innovative digital solutions. I am passionate about bridging the gap between design and development to deliver comprehensive, efficient, and engaging applications. Eager to contribute my creativity and technical skills to a dynamic IT team dedicated to innovative technology solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))} */}
        {services.map((service, index) => (
          <React.Suspense key={service.title} fallback={<div className="w-[250px] h-[280px] bg-gray-200 rounded-[20px] animate-pulse"></div>}>
            <ServiceCard index={index} {...service} />
          </React.Suspense>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
