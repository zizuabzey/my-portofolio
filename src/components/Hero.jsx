import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import placeholderImage from '../assets/herobg.png';

const Astronaut1Canvas = lazy(() => import('./canvas/Astronaut1'));

const Hero = () => {
  const text = 'A Fullstack Developer \nwith a Creative Edge in Design & Digital Content';
  const [key, setKey] = useState(0);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);

  // Memicu ulang animasi setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Ubah key untuk memulai ulang animasi
    }, 5000); // Durasi animasi + jeda

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  // Set textLoaded to true after a short delay or when canvas is loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextLoaded(true);
    }, 1500); // Delay in ms, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Waktu jeda antar huruf
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 relative`}>
        <div>
          {!textLoaded ? (
            <img
              src={placeholderImage}
              alt="Hero Text Placeholder"
              className="w-full h-auto"
            />
          ) : (
            <>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm<span className="text-[#E52020]"> Zizu!</span>
              </h1>
              <motion.div
                key={key} // Gunakan key untuk memulai ulang animasi
                className={`${styles.heroSubText} text-white]`}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {text.split('\n').map((line, index) => (
                  <span key={index}>
                    {line.split('').map((char, charIndex) => (
                      <motion.span key={charIndex} variants={child}>
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                    <br /> {/* Tambahkan baris baru */}
                  </span>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
      {!canvasLoaded && (
        <img
          src={placeholderImage}
          alt="3D Model Placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <Suspense fallback={<div>Loading 3D Canvas...</div>}>
        <Astronaut1Canvas onLoad={() => setCanvasLoaded(true)} />
      </Suspense>
      <div className="absolute xs:bottom-20 bottom-32 w-full flex flex-col justify-center items-center">
        {/* Planet & Link */}
        <a href="#about" className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }} // Awal: transparan
            animate={{ opacity: 1 }} // Akhir: terlihat
            transition={{ duration: 1.5, ease: 'easeInOut' }} // Durasi dan easing
            className="relative flex flex-col items-center"
          >
            {/* Planet */}
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-black-150 rounded-full shadow-lg flex flex-col items-center justify-center">
              <p className="text-white text-[8px] font-bold">C L I C K</p>
              {/* Titik Berjalan */}
              <div className="dot"></div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;