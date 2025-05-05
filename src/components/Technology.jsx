import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import { AsteroidCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { programmingTechnologies, graphicDesignTechnologies, otherTechnologies } from '../constants';

const Technology = () => {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn('up', 'spring', 0.5, 1)} className="flex flex-col items-center gap-10">
      <motion.div variants={fadeIn('', 'tween', 0, 0.8)} className="w-full">
        <h3 className="text-white font-bold text-[24px]">Development Technologies</h3>
        <p className="text-white-400 text-[16px] mb-3">I have experience in various programming technologies.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {programmingTechnologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
              <AsteroidCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn('', 'tween', 0.2, 0.8)} className="w-full">
        <h3 className="mt-5 text-white font-bold text-[24px]">Design Tools and Techniques</h3>
        <p className="text-white-400 text-[16px] mb-3">I utilize graphic design tools for creating visual content.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {graphicDesignTechnologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
              <AsteroidCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn('', 'tween', 0.4, 0.8)} className="w-full">
        <h3 className="mt-5 text-white font-bold text-[24px]">Additional Technologies</h3>
        <p className="text-white-400 text-[16px] mb-3">I have worked with a variety of other technologies.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {otherTechnologies.map((tech) => (
            <div key={tech.name} className="w-28 h-28">
              <AsteroidCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Technology, '');
