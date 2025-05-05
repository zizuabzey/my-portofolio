import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { fadeIn } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle = {{ background: '#C40C0C', color: '#ffffff'}}
    contentArrowStyle = {{ borderRight: '7px solid #C40C0C'}}
    date = { experience.date }
    iconStyle = {{ background: experience.iconBg }}
    icon = {
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={ experience.icon} 
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain" 
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience.point.${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))} 
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Have Accomplished</p>
        <h2 className={styles.sectionHeadText}>Professional Experience.</h2>
      </motion.div>
      
      <motion.p className='text-justify' variants={fadeIn('', '', 0.1, 1)}>
        Throughout my undergraduate studies, I proactively balanced work responsibilities in web development, design, and multimedia alongside my academic commitments. This experience strengthened my technical skills, time management, and problem-solving abilities, enabling me to produce high-quality work efficiently under tight deadlines. It reflects my readiness to thrive in dynamic, fast-paced IT environments and contributes to my strong work ethic and adaptability.
      </motion.p>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline className="vertical-timeline">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
