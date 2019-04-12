import React from 'react'
import Swiper from 'swiper'
import classNames from 'classnames'
import CSS from './Carousel.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    new Swiper(`.${CSS.wrapper}`, {
      pagination: {
        el: `.${CSS.buttons}`,
        bulletClass: CSS.button,
        bulletActiveClass: CSS.buttonActive,
        type: 'bullets',
        clickable: true
      },
      loop: true,
      autoplay: {
        delay: 10000,
      },
      speed: 1800,
      slidesPerView: 1
    })

    return ( 
      <div className={CSS.wrapper}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div 
              style={{background: 'url(/static/images/home_slides/slide_one.jpg)'}}
              className={CSS.slide} 
            />
          </div>
          <div className="swiper-slide">
            <div 
              style={{background: 'url(/static/images/home_slides/slide_two.jpg)'}}
              className={CSS.slide}   
            />
          </div>
          <div className="swiper-slide">
            <div 
              style={{background: 'url(/static/images/home_slides/slide_three.jpg)'}}
              className={CSS.slide} 
            />
          </div>
          <div className="swiper-slide">
            <div 
              style={{background: 'url(/static/images/home_slides/slide_four.jpg)'}}
              className={CSS.slide} 
            />
          </div>
        </div>
        <div className={CSS.buttons}></div>
      </div>
    )
  }
}
