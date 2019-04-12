import React from 'react'
import classNames from 'classnames'
import CSS from './style.scss'

const LoadingAnimation = ({className}) => (
	<div className={classNames(className, CSS['sk-cube-grid'])} title="Loading results">
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube1'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube2'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube3'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube4'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube5'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube6'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube7'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube8'])} />
		<div className={classNames(CSS['sk-cube'], CSS['sk-cube9'])} />
	</div>
)

export default LoadingAnimation