import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoGit, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { TbBrandMysql } from 'react-icons/tb'
import { } from 'react-icons/'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiJavascriptFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoGit className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsGithub className="experience__details-icon" />
              <div>
                <h4>Github</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Frontend Completed */}
        <div className='experience__backend'>
          <h3>Backend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BiLogoNodejs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoMongodb className="experience__details-icon" />
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
