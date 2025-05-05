import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaRocket } from 'react-icons/fa';

import { styles } from '../styles';
import { freelanceExperiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const FreelanceExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Have Explored</p>
        <h2 className={styles.sectionHeadText}>Freelance Experience.</h2>
      </motion.div>

      <motion.p className='text-justify' variants={fadeIn('', '', 0.1, 1)}>
      I have managed freelance projects focused on graphic design and digital content creation, utilizing tools like Canva, Photoshop, and Illustrator. These projects, undertaken alongside my academic and professional commitments, included designing social media graphics, banners, and branding materials, improving my aesthetics, visual storytelling, and communication skills. This experience also honed my UI design abilities, enabling me to create more user-friendly interfaces, while balancing multiple projects strengthened my time management and creativity.
      {/* I have managed various freelance projects outside of my academic and professional commitments, primarily focusing on graphic design and digital content creation using tools like Canva, Photoshop, and Illustrator. These projects involved designing social media graphics, banners, posters, and branding assets, which helped me develop a keen eye for aesthetics, visual storytelling, and effective communication. Additionally, these experiences have sharpened my UI design skills, allowing me to create more user-friendly and visually appealing interfaces. Balancing multiple projects has strengthened my time management, creativity, and ability to meet deadlines, demonstrating my dedication to delivering high-quality visual content tailored to diverse client needs beyond my formal education and employment. */}
      </motion.p>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn('up', 'spring', 0.5, 1)} className="relative mt-20 overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]} // Menggunakan modul Swiper dengan efek Coverflow
          navigation={true} // Mengaktifkan navigasi default Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="coverflow" // Menggunakan efek Coverflow
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full h-full"
        >
          {freelanceExperiences.map((freelanceExperience, index) => (
            <SwiperSlide key={index}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="min-w-full flex flex-col items-center bg-[#C40C0C] text-white rounded-lg shadow-lg p-5 border-b border-white"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-[#E6DEDD] rounded-full mb-4">
                  <img src={freelanceExperience.icon} alt={freelanceExperience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
                <h3 className="text-[24px] font-bold text-center">{freelanceExperience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold mb-4">{freelanceExperience.company_name}</p>
                <p className="text-[14px] mb-4">{freelanceExperience.date}</p>
                <ul className="list-disc ml-5 space-y-2">
                  {freelanceExperience.points.map((point, idx) => (
                    <li key={`experience.point.${idx}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigasi Default */}
        <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #F5F5F5; 
              font-size: 0.5rem;
            }
          `}
        </style>
      </motion.div>
    </>
  );
};

export default SectionWrapper(FreelanceExperience, '');
