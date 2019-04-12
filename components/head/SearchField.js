import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import classNames from 'classnames'
import HeadCSS from './Head.scss'
import CSS from './SearchField.scss'

export default class SearchField extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			active: !props.searchBarHideable,
			query: props.value
		}
	}
	handleSubmit(e){
		e.preventDefault()
		//check if search bar is visible
		if(!this.state.active){
			this.setState({active: true})
			this.input.focus()
		//submit search instead of showing search bar
		}else{
			Router.push(`/search/${this.state.query}`)
		}
	}
	handleChange(e){
		this.setState({
			query: e.target.value
		})
	}
	handleCancel(e){
		e.preventDefault()
		
		this.setState({ 
			active: false,
			query: ''
		})
	}
	handleKeyPress(e){
		if(e.key == 'Enter' && this.state.query.length > 0)
			Router.push(`/search/${this.state.query}`)
	}
	render(){
		return(
      <div className={classNames(CSS.wrapper)}>
        <div className={classNames(CSS.inputWrapper, {[CSS.active]: this.state.active})}>
          <input 
            type="text" 
            ref={ref => this.input = ref}
            className={classNames(CSS.searchInput)} 
            onChange={(e) => this.handleChange(e)}
            onKeyPress={(e) => this.handleKeyPress(e)}
            value={this.state.query}
          />
        </div>
        <a href="#" className={CSS.submitWrapper} onClick={(e) => this.handleSubmit(e)} >
          <div className={classNames('g-reset-button',	 CSS.submit)} />
        </a>
        {this.props.searchBarHideable &&
          <a 
            href="#" 
            onClick={(e) => this.handleCancel(e)} 
            title="Cancel search" 
            className={classNames(CSS.close, {[CSS.active]: this.state.active})}
          >
            &times;
          </a>
        }
      </div>
		)
	}
}

SearchField.propTypes = {
	searchBarHideable: PropTypes.bool,
	value: PropTypes.string
}
SearchField.defaultProps = {
	searchBarHideable: false,
	value: ''
}