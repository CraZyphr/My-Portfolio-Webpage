import'./whatiknow.scss'
import { motion,useInView } from 'framer-motion'
import React, { useRef } from 'react';

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}


function Whatiknow() {
  const ref=useRef()
  const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='whatiknow' variants={variants}
    initial="initial" ref={ref} animate={isInView&&"animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>With my unique blend of skills , making every challenge <br/>an opportunity to shine.</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{color:"orange"}}>Creative</motion.b> Strategist</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{color:"orange"}}>Trailblazing</motion.b> Visionary.</h1>
          <button>Want I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>HTML/CSS/JS</h2>
          <p>With expertise in HTML, CSS, and JavaScript, I create visually appealing and highly functional websites. My skills bring creativity and interactivity to the digital world, ensuring memorable online experiences.</p>
          <button href='https://github.com/CraZyphr/Virtual-Drum-Kit' >GO!</button>
          </motion.div>
          <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
          <h2>React JS/ThreeJS</h2>
          <p>Proficient in React JS and ThreeJS, I leverage cutting-edge technologies to craft immersive and interactive web applications, enhancing user experiences through dynamic, visually stunning design.</p>
          <button href='https://github.com/CraZyphr/Zetflix-A-Netflix-Clone'>GO!</button>
          </motion.div>
          <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
          <h2>NodeJS/GitHub</h2>
          <p>Skilled in NodeJS and proficient in GitHub, I specialize in server-side development and version control, contributing to robust, collaborative software projects and building scalable, efficient web applications.</p>
          <button  href='https://github.com/CraZyphr/URL-to-QR-Converter'>GO!</button>
          </motion.div><motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
          <h2>MongoDB/ExpressJS</h2>
          <p>Experienced in MongoDB and ExpressJS, I am good at database management and server-side development. My expertise ensures efficient, data-driven web applications that deliver seamless user experiences.</p>
          <button  href='https://github.com/CraZyphr/Zyphr-Estate'>GO!</button>
          </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Whatiknow