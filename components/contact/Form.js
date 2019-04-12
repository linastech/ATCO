import React from 'react'
import { Form, Text, TextArea } from 'informed'
import classNames from 'classnames'
import Validator from 'validator'
import Axios from 'axios'
import LoadingAnimation from 'components/loadingAnimation/Spinner'
import CSS from './ContactFormStyle.scss'
import FORM from 'css/form.scss'

export default class ContactForm extends React.Component {
  state = {
    loading: false,
    responseMessage: null
  }
	setFormApi = (formApi) =>{
		this.formApi = formApi
	}
	validateName(value){
		return !value || value.length < 5 ? 'Please enter your full name' : null
	}
	validateEmail(value){
		return !value || !Validator.isEmail(value) ? 'Please enter valid email' : null
	}
	validateSubject(value){
		return !value || value.length < 5 ? 'Please enter subject' : null
	}
	validateMessage(value){
		return !value || value.length < 20 ? 'Your message should be at least 20 characters long' : null
	}
	submit = (formData) =>{
		//show loading icon
		this.setState({loading: true})

		Axios.post('/_form/submit/contact', formData)
			.then(res => {
				if(res.data.err === false)
					this.formApi.reset()
				//hide loading icon
				this.setState({
					loading: false,
					responseMessage: res.data.err === true ? 'The message failed to be sent, please contact system administrator' : 'Your message has been submitted'
				})
			})
			.catch(error => {
				this.setState({
					loading: false,
					responseMessage: 'The message failed to be sent, please contact system administrator'
				})

				console.log(error)
			})
	}
	render(){
		return (
			<div>
				<Form id="complex-form" onSubmit={this.submit} getApi={this.setFormApi}>
					{({ formState }) => (
						<React.Fragment>
							{formState.errors.name && <div className={FORM.errorBox}>{formState.errors.name}</div> }
							<div className={FORM.row}>
								<label>Full Name<span className={FORM.required}>*</span></label>
								<Text className={FORM.input} field="name" validate={this.validateName} required />
							</div>

							{formState.errors.email && <div className={FORM.errorBox}>{formState.errors.email}</div> }
							<div className={FORM.row}>
								<label>E-mail Address<span className={FORM.required}>*</span></label>
								<Text className={FORM.input} field="email" validate={this.validateEmail} required />
							</div>

							{formState.errors.subject && <div className={FORM.errorBox}>{formState.errors.subject}</div> }
							<div className={FORM.row}>
								<label>Subject<span className={FORM.required}>*</span></label>
								<Text className={FORM.input} field="subject" validate={this.validateSubject} required />
							</div>

							<div className={FORM.row}>
								<label>Message<span className={FORM.required}>*</span></label>
								{formState.errors.message && <div className={FORM.errorBox}>{formState.errors.message}</div> }
								<TextArea field="message"  className={classNames(FORM.input, CSS.message)} validate={this.validateMessage} required />
							</div>

							{this.state.loading ? 
								<LoadingAnimation />
							:
								<button className={classNames(FORM.submit, CSS.submit, 'g-submit')} type="submit">
									Send Message
								</button>
							}

							{this.state.responseMessage !== null &&
								<div className={CSS.responseMessage}>{this.state.responseMessage}</div>
							}
						</React.Fragment>
					)}
				</Form>
			</div>
		)
	}
}