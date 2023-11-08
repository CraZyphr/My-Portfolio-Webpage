import './navbar.scss'
import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
function Navbar() {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1.5}} transition={{duration:0.5}}>Niladri Howladar</motion.span>
            <div className='social'>
                <motion.a initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} href='https://m.facebook.com/profile.php/?id=100013094055415'><img src='/facebook.png'/></motion.a>
                <motion.a initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} href='https://github.com/CraZyphr'><img src='/git.png'/></motion.a>
                <motion.a initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} href='https://twitter.com/Zyphr_yo'><img src='/twitter.png'/></motion.a>
                <motion.a initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} href='https://instagram.com/zyphr_ayo?igshid=MWtzMTB3dWl4cGp0bA=='><img src='/instagram.png'/></motion.a>

            </div>
        </div>
    </div>
  )
}

export default Navbar