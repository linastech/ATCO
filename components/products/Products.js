import {Link, Router} from 'router'
import uuidv1 from  'uuid/v1'
import classNames from 'classnames'
import CSS from './ProductsList.scss'

export default ({products}) => (
  <div className={classNames(CSS.productsWrapper)}>
    <ul className={CSS.products}>
      {products.map(item =>
        <li key={uuidv1()}>
          <Link href={`/product/${item.slug}`}>
            <a>{item.name}</a>
          </Link>
        </li>
      )}
    </ul>
  </div>
)