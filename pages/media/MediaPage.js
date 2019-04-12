import React from 'react'
import {Link} from 'router'
import { connect } from 'react-redux'
import * as d3 from 'd3-time-format'
import { loadMediaPosts } from 'reduxActions/media'
import uuidv1 from  'uuid/v1'
import NextSeo from 'next-seo'
import CSS from './MediaPageStyle.scss'

class Media extends React.Component {
  static async getInitialProps ({store}) {
    await store.dispatch(loadMediaPosts(20))
  }
  render() {
    const { pageType, posts } = this.props

    return (
      <main>
        <NextSeo
          config={{
            title: 'Media',
            description: '',
          }}
        />

        <div className={CSS.wrapper}>
          <h1>Recent news & events</h1>

          <ul className={CSS.listWrapper}>
            {posts.map(post => 
              <li key={uuidv1()}>
                <div 
                  className={CSS.image}
                  style={{backgroundImage: `url(${post.image})`}}
                />
                <div className={CSS.footer}>
                  <h2 className={CSS.title}>{post.title}</h2>
                  <div className={CSS.footerInfo}>
                    { d3.timeFormat('%Y %m %d')( new Date(post.date) ) }
                    <Link href={`/media/post/${post.slug}`}><a>Read more &#10137;</a></Link>
                  </div>
                </div>
                <div className={CSS.type}>{post.type}</div>
              </li>
            )}
          </ul>
        </div> 
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
    posts: state.media.posts,
  })
)(Media)