import React from 'react'
import './experience.css'
import {FiCheckCircle} from 'react-icons/fi'
const Experience = () => {
  return (
    <section id ='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        {/* LANGUAGE EXPERIENCE */}

        <div className="experience__language">
          <h3>Programing Languages</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon" />
                <h4>C</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>C++</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>C#</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Python</h4>
              </article>
          </div>
        </div>

        {/* OTHER EXPERIENCE */}

        <div className="experience__other">
          <h3>Other</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Linux</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Wireshark</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Vmware</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>OOP</h4>
              </article>
              <article className="experience__details">
                <FiCheckCircle className="experience__details-icon"/>
                <h4>Data structures</h4>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience