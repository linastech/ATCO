import uuidv1 from  'uuid/v1'
import React from 'react'
import {Link} from 'router'
import CSS from './ProductCategoriesStyle.scss'

const Categories = ({data}) => (
	<ul className={CSS.wrapper}>
		{data.map(category => (
			<li key={uuidv1()} >
				<Link href={`/products/on-market/${category.slug}`}>
					<a>{category.name}</a> 
				</Link>
			</li>
		))}
	</ul>
)

export default Categories