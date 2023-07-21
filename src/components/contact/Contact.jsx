import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { BiLogoGmail } from 'react-icons/bi'
import { MdWhatsapp } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yxchxl9', 'template_698qs58', form.current, 'yUYY60klHHFslCkzZ')

    e.target.reset()
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <BiLogoGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ronitgupta0606@gmail.com</h5>
            <a href='mailto:ronitgupta0606@gmail.com' target='_blank'>Send a Mail</a>
          </article>
          <article className='contact__option'>
            <MdWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 86*****960</h5>
            <a href='https://api.whatsapp.com/send?phone=8668876960' target='_blank'>Message Me</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>ronit_gupta_2002</h5>
            <a href='https://www.instagram.com/ronit_gupta_2002/' target='_blank'>Follow on Instagram</a>
          </article>
        </div>
        {/* END OF PART-1 */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <input type="text" name='Subject' placeholder='Subject' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
