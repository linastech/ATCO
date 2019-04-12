import React from 'react'
import {Router} from 'router'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { store } from 'reduxStore'
import classNames from 'classnames'
import NProgress from 'nprogress'
import App, { Container } from 'next/app'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'
import Head from '../components/head/Head'
import Footer from '../components/footer/Footer'
import CSS from  'css/style.scss'

class ATCO extends App {
  static async getInitialProps({Component, ctx}){
    if(typeof ctx.query.projectData != 'undefined')
      ctx.store.dispatch({type: 'PROJECT_DATA', payload: ctx.query.projectData })

    let pageProps

    if (Component.getInitialProps)
      pageProps =  await Component.getInitialProps(ctx)
    
    return { pageProps }
  }

  componentDidMount(){
    Router.events.on('routeChangeStart', url => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', url => {
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }
  render() {
    const { Component, pageProps, store } = this.props
    const pageType = store.getState().project.pageType

    return (
      <Container>
        <NextSeo config={SEO} />
        <Provider store={store}>
          <div className={pageType}>
            {pageType == 'landing' ? (
              <Component {...pageProps} />
            ):(
              <>
                <Head  />
                <Component {...pageProps} />
                <Footer />
              </>
            )}
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(store)(ATCO)