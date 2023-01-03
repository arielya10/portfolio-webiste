import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Profile-pic.png'
import {motion} from 'framer-motion'
const Header = () => {
  let time = 0;
  return (
    <header>
      <div className="container header__container">
        <motion.h5 initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:time+=0.2,type:'spring',stiffness:60}}>Hello I'm</motion.h5>
        <motion.h1 initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:time+=0.2,type:'spring',stiffness:60}}>Ariel Cohen</motion.h1>
        <motion.h5 className="text-light" initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:time+=0.2,type:'spring',stiffness:60}}>Computer Science Student</motion.h5>
        <CTA />
        
        <motion.div className="me"  initial={{y:500, opacity:0}} transition={{duration:1,delay:time+=1.1}} animate={{y:0 ,opacity:1}}>
          <img src={ME} alt="me"/>
        </motion.div>
      </div>
    </header>
  )
}

export default Header