import React from 'react'
import './about.css'
import ME from '../../assets/about-pic.png'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>A highly motivated student in Computer Science, second year at HIT.<br/>
            I am a skilled multitasker with work ethic, good teamwork, and with thinking out of the box attitude. Fast learner 
            and enthusiastic person with a desire to evolve and develop my skills.<br/>
            My passion is cybersecurity and I am willing to take on any task with a hardworking and resourceful approach.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about