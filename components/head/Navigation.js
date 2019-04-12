import {Link, Router} from 'router'
import {withRouter} from 'next/router'
import classNames from 'classnames'
import AboutSubMenu from './AboutSubMenu'
import CSS from './Head.scss'

class Navigation extends React.Component {
  constructor(props){
    super(props)

    this.state = { selected: props.router.pathname }
  }
  handleClick = (e, route, path) =>{
    e.preventDefault()

    Router.pushRoute(route)

    this.setState({selected: path})
  }
  render(){
    const {selected} = this.state

    return (
      <nav>
        <ul className={classNames(CSS.menu, {[CSS.activeMob]: this.props.mobileActive} )}> 
          <li className={CSS.mobileHomeLink}>
            <Link route="home"><a>Home</a></Link>
          </li>
          <li>
          	<a onClick={(e) => this.handleClick(e, 'about', '/about/AboutPage')} className={classNames({[CSS.active]: selected == '/about/AboutPage'})}>About</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'products', '/products/ProductsPage')} className={classNames({[CSS.active]: selected == '/products/ProductsPage'})}>Our Products</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'researchAndDevelopement', '/research-developement/RnDPage')} className={classNames({[CSS.active]: selected == '/research-developement/RnDPage'})}>R&amp;D</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'careers', '/careers/CareersPage')} className={classNames({[CSS.active]: selected == '/careers/CareersPage'})}>Careers</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'partnership', '/partnership/PartnershipPage')} className={classNames({[CSS.active]: selected == '/partnership/PartnershipPage'})}>Partnership</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'export', '/export/ExportPage')} className={classNames({[CSS.active]: selected == '/export/ExportPage'})}>Export</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'media', '/media/MediaPage')} className={classNames({[CSS.active]: selected == '/media/MediaPage'})}>Media</a>
          </li>
          <li>
            <a onClick={(e) => this.handleClick(e, 'contact', '/contact/ContactPage')} className={classNames({[CSS.active]: selected == '/contact/ContactPage'})}>Contact Us</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Navigation)