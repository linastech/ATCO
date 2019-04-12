import React from 'react'
import {Link} from 'router'
import SearchField from './SearchField'
import Switch from './Switch'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import CSS from './Head.scss'

class Head extends React.Component {
  state = {
    mobileActive: false
  }
  
	openMenu = (e) => {
		e.preventDefault()
		this.setState({mobileActive: !this.state.mobileActive})
	}
	closeMenu = () => {
		this.setState({mobileActive: false})
	}
	componentDidMount(){
		// Router.events.on('routeChangeStart', () => this.setState({mobileActive: false}))
	}
	render(){
    const {pageType} = this.props.project
    
		return (  
      <header>
        <div className={CSS.menuWrapper}>
          <div className={CSS.menuInnerWrapper}>
            <div className={CSS.mobileLogo}>
              <img className={CSS.logo} src={`/static/images/menu_logo_${pageType}.png`} alt="Logo" />
            </div>
            
            <Switch />

            <a href="" className={CSS.mobileMenu} onClick={this.openMenu}>
              <img src="/static/images/mobile-menu.svg" alt="open menu" />
            </a>

            <Navigation mobileActive={this.state.mobileActive} />

            <div className={CSS.rightCol}>
              {/* <div className={CSS.loginButton}>
                <Link href="/login"><a>Login</a></Link>
              </div> */}

              <div className={CSS.logoWrapper}>
                <Link route='home'>
                  <a>
                    <img className={CSS.logo} src={'/static/images/menu_logo_'+pageType+'.svg'} alt="Logo" />
                  </a>
                </Link>
              </div>

              {/* <SearchField searchBarHideable /> */}

              <div className={CSS.stripes}>
                <div className={CSS.stripe} />
                <div className={CSS.stripe} />
                <div className={CSS.stripe} />
              </div>
            </div>
          </div>

        </div>
      </header>
    )
	}
}

export default connect(
  state => ({project: state.project})
)(Head)