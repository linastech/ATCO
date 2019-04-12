import React from 'react'
import CSS from './Promo.scss'

export default () =>
  <div className={CSS.wrapper}>
    <div className={CSS.section}>
      <img src="/static/images/home/experience.svg" />
      <div className={CSS.title}>30</div>
      <div className={CSS.subTitle}>Years of experience</div>
    </div>
    <div className={CSS.section}>
      <img src="/static/images/home/employees.svg" />
      <div className={CSS.title}>550+</div>
      <div className={CSS.subTitle}>Employees</div>
    </div>
    <div className={CSS.section}>
      <img src="/static/images/home/drugs.svg" />
      <div className={CSS.title}>15</div>
      <div className={CSS.subTitle}>Original drugs</div>
    </div>
  </div>
