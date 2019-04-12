import React from 'react'
import Zenscroll from 'zenscroll'
import CSS from './ScrollTopArrow.scss'

const handleClick = () => {
	Zenscroll.toY(0)
}

const handleKey = (e) => {
	if(e.keyCode === 13)
		Zenscroll.toY(0)
}

export default () => (
	<div 
		className={CSS.wrapper} 
		onClick={handleClick} 
		onKeyDown={handleKey}
		role="button" 
		tabIndex={0}
	/>
)