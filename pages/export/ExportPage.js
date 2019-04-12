import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Plx from 'react-plx'
import NextSeo from 'next-seo'
import Form from 'components/export/Form'
import CSS from './ExportPageStyle.scss'

class ExportPage extends React.Component {
  render() {
    const { pageType } = this.props

		const Settings = [
			{
				start: 'self',
				duration: '50vh',
				properties: [
					{
						startValue: 0,
						endValue: 150,
						property: 'backgroundPositionY',
					},
				],
			},
		];

		const truckSettings = [
			{
				start: 0,
				duration: 600,
				easing: 'easeInOut',
				properties: [
					{
						startValue: 100,
						endValue: 40,
						unit: 'vw',
						property: 'translateX',
					},
				],
			},
		]

    return (
      <main>
        <NextSeo
          config={{
            title: 'Export',
            description: '',
          }}
        />

				<Plx
					className={CSS.hero}
					parallaxData={ Settings }
				>
					<Plx
						parallaxData={ truckSettings }
						className={CSS.truck}
					>
						<img src={'/static/images/export/truck_'+pageType+'.png'} />
					</Plx>
				</Plx>

				<div className={CSS.pageWrapper}>
					<h1 className={CSS.title} >Export</h1>
					<img className={CSS.exportLogo} src={'/static/images/export/export_'+pageType+'.png'} alt="Export logo" />

					<p>
						Atco Pharma&apos;s dominant position in the domestic market for veterinary medicines remains unchallenged, and we have grown in the past several years, broaching the market for human medication and expanding our territory throughout the MENA region. We are proud to be counted among the top five companies in Egypt, and we have our sights set even higher.
					</p>
					<p>
						Our export team is committed to the task of bringing our diverse line of products to people who need them, wherever that may be. Our company continues to thrive, and we were even awarded the International Quality Crown Award in 2015, presented in London. 
					</p>
					<p>
						We are actively pursuing our goals to continue expanding our reach, and our product offering continues to grow as we research and develop new therapies. 
					</p>

					<h1 className={CSS.requestTitle} >
						<span>Agency</span> Request
					</h1>

					<p>
						If you are a clinic, pharmacy, or health care provider, and are interested in ordering ATCO products, use this request form to get in touch with us. Out of country orders are welcome! 
					</p>

					<Form />
				</div>
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
  })
)(ExportPage)