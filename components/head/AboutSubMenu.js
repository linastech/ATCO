import classNames from 'classnames'
import Router from 'next/router'
import CSS from './Head.scss'

function handleClick(e){
  if(Router.pathname !== '/about')
    Router.push(`/about${e.target.getAttribute('href')}`)
}

export default ({clickHandler}) => (
  <div className={classNames(CSS.subMenu)}>
    <a href="#values" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Our Values</a>
    <a href="#certifications" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Certifications and Awards</a>
    <a href="#facility" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Facility</a>
    <a href="#mission" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Our Mission</a>
    <a href="#vision" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Our Vission</a>
    <a href="#objective" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Our Objective</a>
    <a href="#partners" onClick={(e) => {clickHandler('/about'), handleClick(e)}}>Our Partners</a>
  </div>
)