import React from 'react'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import Hero from 'heroComponent'
import CSS from './CareersPageStyle.scss'

class Careers extends React.Component {
  render() {
    const { pageType } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'Careers', 
            description: '',
          }}
        />

			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
  })
)(Careers)