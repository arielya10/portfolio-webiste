import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio/AliExpressBot.png'
import IMG2 from '../../assets/Portfolio/Garage.png'
import IMG3 from '../../assets/Portfolio/wine.jpg'
import IMG4 from '../../assets/Portfolio/shein.jpg'
import {motion} from 'framer-motion'

const Portfolio = () => {
  let time = 0;
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">

      <motion.article className="portfolio__item" whileHover={{scale: 1.05}}>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Wine Ranking Prediction</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/Wine-Ranking-Prediction" className='btn btn-primary' target='_blank'>Github</a>
          </div>
          </motion.article>

        <motion.article className="portfolio__item" whileHover={{scale: 1.05}}>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AliExpress Bot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/AliExpressBot" className='btn btn-primary' target='_blank'>Github</a>
          </div>
          </motion.article>

          <motion.article className="portfolio__item" whileHover={{scale: 1.05}}>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Shein Bot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/SheinBot" className='btn btn-primary' target='_blank'>Github</a>
          </div>
          
        </motion.article>
        <motion.article className="portfolio__item" whileHover={{scale: 1.08}}>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Garage</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/Garage" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </motion.article>

      </div>
    </section>

  )
}

export default Portfolio