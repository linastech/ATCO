import React from 'react'
import classNames from 'classnames'
import Plx from 'react-plx'
import CSS from './Hero.scss'
 
export default ({imageSrc, imageSrcMobile, children, height, cssClass}) => {
  let Settings = [
    {
      start: 'self',
      duration: '80vh',
      properties: [
        {
          startValue: 0,
          endValue: -150,
          property: 'translateY',
        },
        { 
          startValue: 1,
          endValue: 0.3,
          property: "opacity"
        },
        {
          startValue: 1.1,
          endValue: 1,
          property: "scale"
        }
      ],
    },
  ];

  return (
    <div style={{maxHeight: height}} className={classNames(CSS.wrapper, cssClass)}>
      <Plx
        className={CSS.hero}
        parallaxData={ Settings }
      >
        <img src={imageSrc} className={CSS.heroImg} />
        <img src={imageSrcMobile} className={CSS.heroImgMobile} />
        {children}
      </Plx>
    </div>
  )
}

