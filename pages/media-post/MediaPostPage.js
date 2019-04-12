import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import NextSeo from 'next-seo'
import * as d3 from 'd3-time-format'
import { loadMediaPost } from 'reduxActions/media'
import CSS from './MediaPostStyle.scss'

class MediaPost extends React.Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(loadMediaPost(query.slug))

    return {
      slug: query.slug
    }
  }
  render(){
    const post = this.props.loadedPosts[this.props.slug]
    
    return (
      <main>
        <NextSeo
          config={{
            title: 'media',
            description: '',
          }}
        />

        <div className={CSS.hero}>
          <img src={post.image} />
        </div>
        <div className={CSS.wrapper}>
          <div className={CSS.date}>{ d3.timeFormat('%Y %m %d')( new Date(post.date) ) }</div>
          <h1>{post.title}</h1>
          <div className={CSS.content}>{post.content}</div>
        </div>
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
    loadedPosts: state.media.loadedPosts,
  })
)(MediaPost)