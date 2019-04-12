import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import Hero from 'heroComponent'
import CSS from './pageStyles.scss'

class ResearchAndDevelopement extends React.Component {
  static async getInitialProps ({req, res, store}) {
    return {}
  }
  render() {
    const { pageType } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'Research & developement',
            description: 'Research and development must be at the heart of every pharmaceutical company, not only for the sake of competing in an ever-changing scientific world, but for the continued benefit of our clients and their patients.',
          }}
        />

				<Hero 
					imageSrc="/static/images/research_dev_bg.jpg"
					height="590px"
				/>

				<div className={CSS.wrapper}>
					<h1 className={CSS.title} >
						<span>Our R&D</span> Goals
					</h1>
					<img className={CSS.goalsLogo} src={`/static/images/research_dev_values_${pageType}.png`} alt="Our Goals logo" />
					<p>
						Research and development must be at the heart of every pharmaceutical company, not only for the sake of competing in an ever-changing scientific world, but for the continued benefit of our clients and their patients. Our goal is to create products that improve health, and thereby improve lives. This is a lofty goal, and one we take very seriously, so we are constantly engaged in rigorous research, testing, and development to ensure our products are top of the line and offer the very best in quality care.
					</p>
					<p>
						For information on our upcoming products, please see the Coming Soon section of our Products page. For any further questions, please contact us.
          </p>
        </div>
			</main>
    )
  }
}

export default connect(
  state => state
)(ResearchAndDevelopement)