import React from 'react'
import CV from '../../assets/CV.pdf'
import {motion} from 'framer-motion'
const CTA = () => {
  let time = 1.1
  return (
    <div className="cta">
        <motion.a href={CV} download='Ariel-Cohen-Resume.pdf' className="btn" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:time+=0.2,duration:0.2}}>Download CV</motion.a>
        <motion.a href="#contact" className="btn btn-primary" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:time+=0.2,duration:0.2}}>Contact Me</motion.a>
    </div>
  )
}

export default CTA