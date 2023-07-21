import React from 'react'
import './testimonials.css'
import T1 from "../../assets/testimonial.png"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: T1,
    name: "Avatar One",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    avatar: T1,
    name: "Avatar Two",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    avatar: T1,
    name: "Avatar Three",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    avatar: T1,
    name: "Avatar Four",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review for Clients</h5>
      <h2>Testmonials</h2>
      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Testimonial1" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

        {/* <article className='testimonial'>
          <div className='client__avatar'>
            <img src={T1} alt="Testimonial1" />
          </div>
          <h5 className='client__name'>Earnest</h5>
          <small className="client__review">
            Lorem ipsum
            loren
            ipsum
          </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={T1} alt="Testimonial1" />
          </div>
          <h5 className='client__name'>Earnest</h5>
          <small className="client__review">
            Lorem ipsum
            loren
            ipsum
          </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials
