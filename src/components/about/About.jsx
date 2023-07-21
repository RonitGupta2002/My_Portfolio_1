import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import { LiaAwardSolid } from 'react-icons/lia'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About_Pic" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about__cards'>
            <article className='about__card'>
              <LiaAwardSolid className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Users</h5>
              <small>Clients</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>6+</small>
            </article>
          </div>
          <p>
            Loren ipsum
          </p>
          <a href='#contact' className='btn btn-primary target-button'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
