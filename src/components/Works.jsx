import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { styles } from '../styles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { miniProject, intermediateProject, advancedProject, academicProject } from '../constants';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'}
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" loading="lazy" width={360} height={230} />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, '_blank')} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0 }}
      >
        <p className={styles.sectionSubText}>What I Have Created</p>
        <h2 className={styles.sectionHeadText}>Project Experience.</h2>
      </motion.div>

      <motion.p
        className="text-justify"
        variants={fadeIn('down', '', 0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0 }}
      >
        I have independently developed a diverse range of projects across different levels, utilizing modern web development technologies such as React.js, Next.js, Node.js, and MongoDB. My experience spans creating static websites, dynamic web applications, and complex systems with user authentication and data management, all managed end-to-end by myself.
      </motion.p>




      {/* Render Mini Projects */}
      <div className="mt-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.3, 0)}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 variants={fadeIn('', 'tween', 0.2, 0.8)} className="text-white font-bold text-[24px] mb-1">
            Mini Projects
          </motion.h2>
          <motion.p variants={fadeIn('', 'tween', 0.2, 0.8)} className="text-white-400 text-[16px] mb-3">
            These are projects that I explored to develop my foundational skills.
          </motion.p>
          <div className="flex flex-wrap gap-7 justify-center mt-5">
            {miniProject.map((project, index) => (
              <ProjectCard key={`selfProject-${index}`} index={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Render Intermediate Projects */}
      <div className="mt-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.3, 0)}
          transition={{ delay: 0.5 }}
        >
          <motion.h2 variants={fadeIn('', 'tween', 0, 0.8)} className="text-white font-bold text-[24px] mb-1">
            Intermediate Projects
          </motion.h2>
          <motion.p variants={fadeIn('', 'tween', 0, 0.8)} className="text-white-400 text-[16px] mb-3">
            These projects represent the work I have completed at an intermediate level.
          </motion.p>
          <div className="flex flex-wrap gap-7 justify-center mt-5">
            {intermediateProject.map((project, index) => (
              <ProjectCard key={`mernProject-${index}`} index={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Render Advanced Projects */}
      <div className="mt-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.3, 0)}
          transition={{ delay: 0.7 }}
        >
          <motion.h2 variants={fadeIn('', 'tween', 0, 0.8)} className="text-white font-bold text-[24px] mb-1">
            Advanced Projects
          </motion.h2>
          <motion.p variants={fadeIn('', 'tween', 0, 0.8)} className="text-white-400 text-[16px] mb-3">
            These are advanced projects that showcase my capabilities in complex applications.
          </motion.p>
          <div className="flex flex-wrap gap-7 justify-center mt-5">
            {advancedProject.map((project, index) => (
              <ProjectCard key={`mernProject-${index}`} index={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Render Academic Projects */}
      <div className="mt-10">
        <motion.div
          className="mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.3, 0)}
          transition={{ delay: 0.9 }}
        >
          <motion.h2 variants={fadeIn('', 'tween', 0, 0.8)} className="text-white font-bold text-[24px] mb-1">
            Academic Projects
          </motion.h2>
          <motion.p variants={fadeIn('', 'tween', 0, 0.8)} className="text-white-400 text-[16px] mb-3">
            These projects were completed during my academic studies and highlight my learning experience.
          </motion.p>
          <div className="flex flex-wrap gap-7 justify-center mt-5">
            {academicProject.map((project, index) => (
              <ProjectCard key={`academicProject-${index}`} index={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
