import {Router} from 'router'
import { loadCategoryProducts } from 'reduxActions/products'
import { store } from 'reduxStore'
import uuidv1 from  'uuid/v1'
import classNames from 'classnames'
import CSS from './ProductsList.scss'

const selectLetter = (e, marketstatus, category) =>{
  try{
    e.preventDefault()

    const url = e.target.attributes.getNamedItem('href').value
    const letter = url.split('/').pop()


    window.__NEXT_REDUX_STORE__.dispatch(loadCategoryProducts(marketstatus, category, letter))

    Router.pushRoute(
      'productsSelectedLetter', 
      {
        marketstatus: marketstatus,
        category: category,
        letter: letter,
      },
      { shallow: true }
    )
  }catch(err){ console.log(err)}
}

export default ({alphabet, activeLetter, marketstatus, category}) => (
  <ul className={CSS.letters}>
    {alphabet.map(letter =>(
      <li key={uuidv1()}>
        <a 
          onClick={(e) => selectLetter(e, marketstatus, category)}
          href={`/products/${marketstatus}/${category}/${letter._id}`}
          className={classNames({[CSS.active]: (activeLetter == letter._id)})}
        >
          {letter._id}
        </a>
      </li>
    ))}
  </ul>
)