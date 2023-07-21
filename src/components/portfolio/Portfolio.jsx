import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/work1.png"
import IMG2 from "../../assets/work2.png"
import IMG3 from "../../assets/work3.png"
import IMG4 from "../../assets/work4.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'PORTFOLIO1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PORTFOLIO2',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PORTFOLIO3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PORTFOLIO4',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  },
  {
    id: 5,
    image: IMG1,
    title: 'PORTFOLIO1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  },
  {
    id: 6,
    image: IMG2,
    title: 'PORTFOLIO3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22048305-Super-app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Link</a>
                </div>
              </article>
            )
          })
        }
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='PORTFOLIO1' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article> */}
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='PORTFOLIO2' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='PORTFOLIO3' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='PORTFOLIO4' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='PORTFOLIO3' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='PORTFOLIO1' />
          </div>
          <h3>This is a porfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/shots/22048305-Super-app' className='btn btn-primary' target='_blank'>Live Link</a></div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
