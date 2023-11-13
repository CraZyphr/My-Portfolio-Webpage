import './hero.scss';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'; // Import React and other necessary dependencies
import Typed from 'typed.js'; // Import Typed.js

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

function Hero() {
  const textInputRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textInputRef.current, {
      strings: ["Web Developer",  "Front-End", "Back-End"],
      typeSpeed: 120,
      backSpeed: 110,
      showCursor: false,
      loop: true,
      
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <motion.div className="blob" variants={textVariants} initial="initial" animate="animate" />
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>NILADRI HOWLADAR</motion.h2>
          <motion.h1 variants={textVariants} className='input' ref={textInputRef}></motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See My Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll" />
          </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Front-End & Back-End Developer
        </motion.div>
      </div>
      <motion.div className="imageContainer" variants={textVariants} initial="initial" animate="animate">
        <img src="/hero.png" alt="Hero" />
      </motion.div>
    </div>
  );
}

export default Hero;
