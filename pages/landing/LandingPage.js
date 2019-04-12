import React from 'react'
import {Link} from 'router'
import { connect } from 'react-redux'
import classNames from 'classnames'
import CSS from './LandingPageStyle.scss'

class Landing extends React.Component {
  state = {
    blurLeft: false,
    blurRight: false,
  }
  static async getInitialProps ({req, res, store}) {}
	componentDidMount(){
		this.wrapper.addEventListener('mousemove', function(e){
			this.setState({
				blurLeft: e.clientX > (window.innerWidth / 2),
        blurRight: e.clientX < (window.innerWidth / 2),
			})
		}.bind(this))
  }
  componentWillUnmount(){
    this.wrapper.removeEventListener('mousemove')
  }
  render() {
    const {domain} = this.props

		return (
			<div ref={ref => this.wrapper = ref} className={CSS.wrapper}>
				<div className={CSS.logo}>
					<img src="/static/images/logo.png" alt="ATCO Pharma" />
				</div>

				<div className={CSS.menuItem}>
					<div className={classNames(CSS.menuItemWrapper, CSS.human)}>
						<Link href={`http://human.${domain}`}><a className={CSS.menuButton}>Enter</a></Link>
						<div className={CSS.menuTitle}>Human</div>
					</div>
				</div>

				<div className={CSS.menuItem}>
					<div className={classNames(CSS.menuItemWrapper, CSS.vet)}>
						<Link href={`http://vet.${domain}`}><a className={CSS.menuButton}>Enter</a></Link>
						<div className={CSS.menuTitle}>Vet</div>
					</div>
				</div>
				
				<div className={CSS.background} />
				<div className={classNames(CSS.bluredLeft, {[CSS.blured]: this.state.blurLeft})} />
				<div className={classNames(CSS.bluredRight, {[CSS.blured]: this.state.blurRight})} />
			</div>
		)
  }
}

export default connect(
  state => state
)(Landing)