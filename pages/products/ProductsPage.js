import React from 'react'
import classNames from 'classnames'
import {withRouter} from 'next/router'
import { connect } from 'react-redux'
import NextSeo from 'next-seo'
import uuidv1 from  'uuid/v1'
import Hero from 'heroComponent'
import SearchField from 'components/head/SearchField'
import _ from 'lodash'
import { loadCategories, loadCategoryProducts, loadCategoryProdAlphabet } from 'reduxActions/products'
import List from 'components/products/List'
import CSS from './ProductsPageStyle.scss'

class Products extends React.Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(loadCategories())

    if(_.has(query, 'marketstatus')){
      await store.dispatch(loadCategoryProducts(query.marketstatus, query.category, query.letter))
      await store.dispatch(loadCategoryProdAlphabet(query.marketstatus, query.category))
    }
  }
  render(){
    const { pageType, categories } = this.props

    return (
      <main>
				<Hero 
					imageSrc="/static/images/products/intro.jpg"
					height="570px"
				/>

        <NextSeo
          config={{
            title: 'Products',
            description: '',
          }}
        />

        <div className={CSS.wrapper}>
					<div className={CSS.search}>
						<SearchField className={CSS.searchStyle} />
					</div>

					<div className={CSS.categoryWrapper}>
						<h2>On the Market</h2>
						<ul className={CSS.catList}>
							{categories[pageType].coming_soon.map((category) => (
								<li key={uuidv1()}>
                  <List 
                    {...category} 
                    isOnMarket="on-market" 
                    active={this.props.router.query.category == category.slug} />
								</li>
							))}
						</ul>
					</div>

					<div className={classNames(CSS.categoryWrapper, CSS.comingSoon)}>
						<h2>Coming soon</h2>
						{/* <ul className={CSS.catList}>
							{categoriesSoon.map((category) => (
								<li className={classNames({'scrollTo': selectedCategory == category.name})} key={uuidv1()}>
									<ProductsList  
										showProducts={
											selectedMarket === 'coming-soon' && selectedCategory == category.slug
										} 
										slug={category.slug} 
										name={category.name} 
										img={category.image} 
										isOnMarket="coming-soon"
										selectedLetter={selectedLetter}
									/>
								</li>
							))}
						</ul> */}
					</div>
				</div>
			</main>
    )
  }
}

export default withRouter(connect(
  state => ({
    pageType: state.project.pageType,
    categories: state.products.categories,
  })
)(Products))