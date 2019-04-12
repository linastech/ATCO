import React from 'react'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import Hero from 'heroComponent'
import Form from 'components/partnership/Form'
import CSS from './PartnershipPageStyle.scss'

class Partnership extends React.Component {
  render() {
    const { pageType } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'Partnership',
            description: '',
          }}
        />

        <Hero 
          imageSrc="/static/images/partnership_intro.jpg"
          height="550px"
        />

        <div className={CSS.wrapper}>
          <h1>Partnership</h1>
          <img className={CSS.sectionIcon} src={'/static/images/partnership_'+pageType+'.png'} alt="Our Goals logo" />

          <p className={CSS.introText}>
            Interested in partnering with ATCO Pharma?<br />
            We’d love to hear from you!
          </p>

          <h1 className={CSS.requestTitle} >
            <span>Partnership</span> Request
          </h1>
          <p className={CSS.introText}>
            Please use this form for business enquiries or reach out via our contact page.
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
)(Partnership)