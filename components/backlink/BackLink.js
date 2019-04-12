import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'router'
import CSS from './BackLinkStyle.scss'

const BackLink = ({href, children}) => (
	<div>
		<Link href={href}>
			<a>
				<div className={CSS.button} />
				{children}
			</a>
		</Link>
	</div>
)

 export default BackLink