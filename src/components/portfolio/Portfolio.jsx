import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio/AliExpressBot.png'
import IMG2 from '../../assets/Portfolio/Garage.png'
const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>AliExpress Bot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/AliExpressBot" className='btn btn-primary' target='_blank'>Github</a>
          </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Garage</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arielya10/Garage" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>

      </div>
    </section>

  )
}

export default Portfolio