import React from 'react'
import './contact.css'
import {MdMail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5c3h0kn', 'template_cpz9b41', form.current, 'BDpQ9qIdxRhuiQaDM')
    e.target.reset()
    notify()
  };
const notify = () => {
  toast.success('Message have been sent!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};
  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>arielyag10@gmail.com</h5>
            <a href="mailto:arielyag10@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+972533357527</h5>
            <a href="https://wa.me/972533357527" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" placeholder='Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary' >
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact