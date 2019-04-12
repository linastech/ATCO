import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import { loadRecentMedia } from 'reduxActions/media'
import Carousel from 'components/home/Carousel'
import Feed from 'components/home/Feed'
import About from 'components/home/About'
import Promo from 'components/home/Promo'
import PromoVideo from 'components/home/PromoVideo'
import CSS from './HomePageStyle.scss'

class Home extends React.Component {
  static async getInitialProps ({store}) {
    await store.dispatch(loadRecentMedia(3))
  }
  render() {
    const { recentPosts, pageType } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'ATCO Pharma',
            description: '',
          }}
        />

        <Carousel />
        <Promo />
        <Feed posts={recentPosts} />
        <PromoVideo />
        <About pageType={pageType} />
			</main>
    )
  }
}

export default connect(
  state => ({
    recentPosts: state.media.recentPosts,
    pageType: state.project.pageType,
  })
)(Home)