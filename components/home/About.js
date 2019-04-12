import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Swiper from 'swiper'
import classNames from 'classnames'
import CSS from './About.scss'
// import 'css/components/swiper.scss'

const Slide = ({text, children, url, image}) => (
  <li className="swiper-slide">
    <h1 className="g-sectionTitle">{children}</h1>
    <div className={CSS.image}>
      <img src={image} alt="Slide"/>
    </div>
    <p>{text}</p>
    <Link href={url}>
      <a>Read more
      </a>
    </Link >
  </li>
)

export default ({pageType}) => {
  new Swiper('.'+CSS.aboutWrapper, {
    slidesPerView: 3,
    autoplay: {
      delay: 10000,
    },
    speed: 1200,
    clickable: true,
    navigation: {
      prevEl: '.'+CSS.aboutPrev,
      nextEl: '.'+CSS.aboutNext,
    },
    breakpoints: {
      1270: {
        slidesPerView: 1
      }
    }
  })

  return ( 
    <div className={CSS.wrapper}>
      <div className={CSS.about}>
        <div className={CSS.aboutPrev} />
        
        <div className={CSS.aboutWrapper}>
          <ul className={classNames('swiper-wrapper', CSS.aboutSlides)}>
            <Slide 
              image={`/static/images/home_slides/vision_${pageType}.png`}
              url="/about/#vision"
              text="To improve the quality of healthcare for both human beings and the pets they love through innovative and..."
            >
              <span>Our</span> Vision
            </Slide>
            <Slide 
              image={`/static/images/home_slides/mission_${pageType}.png`}
              url="/about/#mission"
              text="To dedicate our efforts and resources to the continuous development of high quality products to aid in better human welfare..."
            >
              <span>Our</span> Mission
            </Slide>
            <Slide 
              image={`/static/images/home_slides/objective_${pageType}.png`}
              url="/about/#objective"
              text="To be among the top pharmaceutical companies in the region, and to expand into further markets while maintaining our..."
            >
              Objective
            </Slide>
            <Slide 
              image={`/static/images/home_slides/values_${pageType}.png`}
              url="/about/#values"
              text="ATCO Pharma strongly believes in creating products that will vastly improve the lives of both humans and animals who..."
            >
              <span>Our</span> Values
            </Slide>
            <Slide 
              image={`/static/images/home_slides/facility_${pageType}.png`}
              url="/about/#facility"
              text="Our factory was established in 2011, and we have a production area of 12,500 meters squared, with room for..."
            >
              Facility
            </Slide>
          </ul>
        </div>
        <div className={CSS.aboutNext} />
      </div>
    </div>
  )
}