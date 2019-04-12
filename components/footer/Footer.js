import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { connect } from 'react-redux'
import CSS from './Footer.scss'

class Footer extends React.Component {
  state = {}
  componentDidMount() {
		this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 480 });
  }
	render(){
		const {pageType} = this.props.project
		const { isMobile } = this.state

		return (
			<footer className={CSS.footer}>
				{isMobile ? (
					<div className={CSS.mobileWrapper}>
						<div className={CSS.mobileCol}>
							<Link href="/about"><a>About us</a></Link>
							<Link href="/products"><a>Our products</a></Link>
							<Link href="/research-developement"><a>R&amp;D</a></Link>
							<Link href="/export"><a>Export</a></Link>
						</div>
						<div className={CSS.mobileCol}>
							<Link href="/partnership"><a>Partnership</a></Link>
							<Link href="/careers"><a>Careers</a></Link>
							<Link href="/contact"><a>Contact us</a></Link>
						</div>
					</div>
				):(
					<div className={CSS.wrapper}>
						<div className={CSS.logo}>
							<div className={CSS.logoInner}>
								<img src={'/static/images/menu_logo_'+pageType+'.svg'} alt="Logo" />
								<div className={CSS.stripes}>
									<div className={CSS.stripe} />
									<div className={CSS.stripe} />
									<div className={CSS.stripe} />
								</div>
							</div>
						</div>

						<div className={CSS.listWrapper}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/about"><a>About us</a></Link>
								</li>
								<li>
									<Link href="/about#values"><a>Our values</a></Link>
								</li>
								<li>
									<Link href="/about#facility"><a>Our facility</a></Link>
								</li>
								<li>
									<Link href="/about#mission"><a>Our mission</a></Link>
								</li>
								<li>
									<Link href="/about#objective"><a>Our objective</a></Link>
								</li>
							</ul>
						</div>
						<div className={CSS.listWrapper}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/products"><a>Our products</a></Link>
								</li>
								{pageType == 'atcovet' &&
									<React.Fragment>
										<li>
											<Link href="/products/on-market/antibacterials"><a>Antibacterials</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anticoccidials"><a>Anticoccidials</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anthelmintics"><a>Anthelmintics</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/metabolic-enhancers"><a>Metabolic Enhancers</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anti-inflammatories"><a>Anti-inflammatories</a></Link>
										</li>
										<li> 
											<Link href="/products/on-market/natural-solutions"><a>Natural Solutions</a></Link>
										</li>
									</React.Fragment>
								}
								{pageType == 'atcohuman' &&
									<React.Fragment>
										<li>
											<Link href="/products/on-market/antibacterials"><a>Antibacterials</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anti-histaminic"><a>Anti-Histaminic</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anti-epileptics"><a>Anti-epileptics</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/anti-hypertensives"><a>Anti-Hypertensives</a></Link>
										</li>
										<li>
											<Link href="/products/on-market/cough-suppressants"><a>Cough Suppressants</a></Link>
										</li>
										<li> 
											<Link href="/products/on-market/mucolytics"><a>Mucolytics</a></Link>
										</li>
										<li> 
											<Link href="/products/on-market/anti-coagulants"><a>Anti-coagulants</a></Link>
										</li>
									</React.Fragment>
								}
							</ul>
						</div>
						<div className={CSS.listWrapper}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/research-developement"><a>R&amp;D</a></Link>
								</li>
								<li>
									<Link href="/research-developement"><a>Our R&D goals</a></Link>
								</li>
								<li>
									<Link href="/"><a>Our strategy</a></Link>
								</li>
								<li>
									<Link href="/"><a>Our pipeline</a></Link>
								</li>
							</ul>
						</div>
						<div className={classNames(CSS.export, CSS.listWrapper)}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/export"><a>Export</a></Link>
								</li>
								<li className={CSS.title}>
									<Link href="/partnership"><a>Partnership</a></Link>
								</li>
							</ul>
						</div>

						<div className={classNames(CSS.listColRight, CSS.mediaList)}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/careers"><a>Careers</a></Link>
								</li>
								<li className={CSS.title}>
									<Link href="/news"><a>Media</a></Link>
								</li>
							</ul>
						</div>
						<div className={classNames(CSS.listColRight, CSS.contactList)}>
							<ul className={CSS.list}>
								<li className={CSS.title}>
									<Link href="/contact"><a>Contact us</a></Link>
								</li>
								<li className={CSS.title}>
									<Link href="/"><a>Terms of use</a></Link>
								</li>
								<li className={CSS.title}>
									<Link href="/"><a>Privacy policy</a></Link>
								</li>
							</ul>
						</div>

						<div className={CSS.social}>
							<ul className={CSS.list}>
								<li>
									<img src="/static/images/social_icons/in.png" alt="Linkedin" title="Linkedin" />
									<img src="/static/images/social_icons/twitter.png" alt="Twitter" title="Twitter" />
									<img src="/static/images/social_icons/insta.png" alt="Instagram" title="Instagram" />
									<img src="/static/images/social_icons/fb.png" alt="Facebook" title="Facebook" />
								</li>
							</ul>
						</div>
						
						<div className={CSS.copyrights}>
							<span>
								Copyright © {new Date().getFullYear()} ATCO. All rights reserved.
							</span>
						</div>
					</div>
				)}
			</footer>
		)
	} 
}

export default connect(
  state => ({project: state.project})
)(Footer)