import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'
import {motion} from 'framer-motion'

const Experience = () => {
  let time1 =0.2;
  let time2 =0.4;
  return (
    <section id ='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        {/* LANGUAGE EXPERIENCE */}

        <motion.div className="experience__language" initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration: 0.5,}} viewport={{once: true}}>
          <h3>Programing Languages</h3>
            <div className="experience__content">
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time1+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon" />
                <h4>C</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time1+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>C++</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time1+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>C#</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time1+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Python</h4>
              </motion.article>
          </div>
        </motion.div>

        {/* OTHER EXPERIENCE */}

        <motion.div className="experience__other" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:0.2}}  viewport={{once: true}}>
          <h3>Other</h3>
            <div className="experience__content">
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time2+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>OOP</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time2+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Networking</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time2+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Data Structures</h4>
              </motion.article>
              <motion.article className="experience__details" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5,delay:time2+=0.2}} viewport={{once: true}}>
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Algorithms</h4>
              </motion.article>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience