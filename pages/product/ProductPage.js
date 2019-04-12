import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import NextSeo from 'next-seo'
import ReactHtmlParser from 'react-html-parser'
import { loadProduct, loadCategories } from 'reduxActions/products'
import BackLink from 'components/backlink/BackLink'
import Categories from 'components/product/Categories'
import CSS from './ProductPageStyle.scss'

class Product extends React.Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(loadCategories())
    await store.dispatch(loadProduct(query.slug))

    return {
      slug: query.slug
    }
  }
  render(){
    const { products, slug, pageType, categories } = this.props
    const product = products[slug]
    const categoryData = categories[pageType][product['coming-soon'] ? 'coming_soon' : 'on_market']

    return (
      <main>
        <NextSeo
          config={{
            title: product.name,
            description: '',
          }}
        />

        <div className={CSS.wrapper}>	
					<div className={CSS.backLink}>
						<BackLink href="/products">Go back</BackLink>
					</div>

					<div className={CSS.productWrapper}>
						<div className={CSS.image}>
							<img src={'/static/images/products/listings/'+product.image} alt={product.name} />
						</div>

						<div className={CSS.composition}>
							<h1 className={CSS.title}>{product.name}</h1>

							<div className={CSS.section}>
								<h3>{product.prospect[0].title}</h3>
								{ReactHtmlParser(product.prospect[0].content)}
							</div>
						</div>
						
						<Categories data={categoryData} />
					</div>

					<a href="#" className={CSS.prospectLink}>Click here to read the prospect for doctors</a>
					
					{(function(rows){ 
						for (let index = 1; index < product.prospect.length; index++)
							rows.push(
								<div key={index} className={classNames(CSS.section, CSS.sections)}>
									<h3>{product.prospect[index].title}</h3>
									{ReactHtmlParser(product.prospect[index].content)}
								</div>
							)
						return rows
					})([])}
				</div>
			</main>
    )
  }
}

export default connect(
  state => ({
    pageType: state.project.pageType,
    products: state.products.products,
    categories: state.products.categories,
  })
)(Product)