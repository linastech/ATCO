import React from 'react'
import {withRouter} from 'next/router'
import {Link, Router} from 'router'
import { connect } from 'react-redux'
import { loadCategoryProducts, loadCategoryProdAlphabet} from 'lib/redux/actions/products'
import classNames from 'classnames'
import _ from 'lodash/core'
import CSS from './ProductsList.scss'
import LoadingAnimation from 'components/loadingAnimation/Spinner'
import Products from './Products'
import Alphabet from './Alphabet'

class ProductsList extends React.PureComponent{
  selecCategory = (e) =>{
    try{
      e.preventDefault()

      const url = e.target.attributes.getNamedItem('href').value
      const category = url.split('/').pop()

      this.props.dispatch(loadCategoryProducts(this.props.isOnMarket, category))
      this.props.dispatch(loadCategoryProdAlphabet(this.props.isOnMarket, category, 'A'))

      Router.pushRoute(
        'productsSelectedCat', 
        {
          marketstatus: 'on-market',
          category: category,
        }, 
        { shallow: true }
      )
    }catch(err){ console.log(err)}
  }
  render () {
    const {
      name, image, slug, pageType, isOnMarket, productsList, 
      productsListFetching, alphabetFetching, alphabet
    } = this.props
    const {query} = this.props.router
    const active = _.isEqual(query.category, slug)
    let activeLetter
    let products = []

    if((active && !productsListFetching && !alphabetFetching)){
      activeLetter = _.isUndefined(query.letter) ? 'A' : query.letter
      products = productsList[pageType][query.marketstatus][query.category]
    }

    return (
      <>
        <div className={CSS.category}>
          <a onClick={this.selecCategory} href={`/products/${isOnMarket}/${slug}`}>{name}</a>
          <img src={image} alt={name} />
        </div>

        {(active && (productsListFetching || alphabetFetching)) &&
          <LoadingAnimation />
        }

        {active && !alphabetFetching && products.total > 10 &&
          <Alphabet 
            alphabet={alphabet[pageType][query.marketstatus][query.category]}
            activeLetter={activeLetter}
            marketstatus={isOnMarket}
            category={slug}
          />
        }

        {active && !productsListFetching && products.total > 0 &&
          <Products products={products[activeLetter]} />
        }
        
        {active && !productsListFetching && products.total == 0 &&
          <div className={CSS.notFound}>No products</div>
        }
      </>
    )
  }
}

export default withRouter(connect(
  state => ({
    pageType: state.project.pageType,
    productsList: state.products.productsList,
    productsListFetching: state.products.productsListFetching,
    alphabetFetching: state.products.alphabetFetching,
    alphabet: state.products.alphabet,
  })
)(ProductsList))