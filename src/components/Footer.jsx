import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';
import { socials } from '../constants';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Fungsi untuk memantau scroll dan menampilkan tombol
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll
    });
  };


  return (
    <>
      {/* Tombol Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-white text-red-500 p-2 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <FaRocket style={{ transform: 'rotate(312deg)' }} className="text-4xl" /> {/* Ikon roket */}
      </button>

      {/* Footer */}
      <footer className="bg-black-100 text-white py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Paragraf Footer */}
          <p className="text-[12px] text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-bold">Zizu Abzey 🚀</span> All rights reserved
          </p>

          {/* Garis Pembatas */}
          <div className="hidden md:block border-l border-white h-6"></div>

          {/* Ikon Media Sosial */}
          <div className="grid grid-cols-7 gap-4 md:flex md:space-x-4">
            {socials.map((social, index) => (
              <a key={index} href={`${social.url}`} target="_blank" rel="noopener noreferrer" className="p-0.5 rounded-full bg-transparent hover:bg-red-600 transition-colors duration-300">
                <img src={social.icon} alt={social.name} className="w-8 h-8 mx-auto" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
