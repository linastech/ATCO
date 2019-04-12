import React from 'react'
import { Form, Text, TextArea, Select } from 'informed'
import classNames from 'classnames'
import Validator from 'validator'
import Axios from 'axios'
import LoadingAnimation from 'components/loadingAnimation/Spinner'
import CountriesOptionsList from 'components/forms/CountriesOptionsList'
import FORM from 'css/form.scss'

export default class PartnershipForm extends React.Component {
	state = {
    loading: false,
    responseMessage: null,
  }
	setFormApi = (formApi) =>{
		this.formApi = formApi
	}
	validateCountry(value){
		return typeof value === 'undefined' ? 'Please select country' : null
	}
	validateCompanyName(value){
		return !value || value.length < 1 ? 'Company must be at least one characters long' : null
	}
	validateCompanyPhone(value){
		return !value || !Validator.isMobilePhone(value) ? 'Please enter valid phone number' : null
	}
	validateCompanyFax(value){
		const regex = /^\+?[0-9]+$/
		
		return !value || !value.match(regex) ? 'Please enter valid fax number' : null
	}
	validateCompanyAddress(value){
		return !value || value.length < 5 ? 'Please enter valid address' : null
	}
	validateCompanyActivities(value){
		return !value || value.length < 5 ? 'Please describe company activities' : null
	}
	validateContactPerson(value){
		return !value || value.length < 3 ? 'Enter contact person name' : null
	}
	validatePosition(value){
		return !value || value.length < 3 ? 'Please enter your position' : null
	}
	validateEmail(value){
		return !value || !Validator.isEmail(value) ? 'Please enter valid email address' : null
	}
	validateMobile(value){
		return !value || !Validator.isMobilePhone(value) ? 'Please enter valid mobile phone number' : null
	}
	validateMessage(value){
		return !value || value.length < 20 ? 'Your message should be at least 20 characters long' : null
	}
	submit = (formData) => {
		//show loading icon
		this.setState({loading: true})

		Axios.post('/_form/submit/partnership', formData)
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
			<div className="wrapper">
				<Form className={FORM.labeled} onSubmit={this.submit} getApi={this.setFormApi}>
					{({ formState }) => (
						<React.Fragment>
							<label className={FORM.label} htmlFor="country">Country<span className={FORM.required}>*</span></label>
							{formState.errors.country && <div className={FORM.errorBox}>{formState.errors.country}</div> }
							<Select className={FORM.input} field="country" id="country" validate={this.validateCountry}>
								<CountriesOptionsList />
							</Select>  

							<label className={FORM.label} htmlFor="company-name">Company Name<span className={FORM.required}>*</span></label>
							{formState.errors['company-name'] && <div className={FORM.errorBox}>{formState.errors['company-name']}</div> }
							<Text className={FORM.input} field="company-name" id="company-name" validate={this.validateCompanyName} />
							
							<label className={FORM.label} htmlFor="company-phone">Company Phone<span className={FORM.required}>*</span></label>
							{formState.errors['company-phone'] && <div className={FORM.errorBox}>{formState.errors['company-phone']}</div> }
							<Text className={FORM.input} field="company-phone" id="company-phone" validate={this.validateCompanyPhone} />
							
							<label className={FORM.label} htmlFor="company-fax">Company Fax<span className={FORM.required}>*</span></label>
							{formState.errors['company-fax'] && <div className={FORM.errorBox}>{formState.errors['company-fax']}</div> }
							<Text className={FORM.input} field="company-fax" id="company-fax" validate={this.validateCompanyFax} />
							
							<label className={FORM.label} htmlFor="company-address">Company Address<span className={FORM.required}>*</span></label>
							{formState.errors['company-address'] && <div className={FORM.errorBox}>{formState.errors['company-address']}</div> }
							<Text className={FORM.input} field="company-address" id="company-address" validate={this.validateCompanyAddress} />
							
							<label className={FORM.label} htmlFor="company-activities">Company Activities<span className={FORM.required}>*</span></label>
							{formState.errors['company-activities'] && <div className={FORM.errorBox}>{formState.errors['company-activities']}</div> }
							<Text className={FORM.input} field="company-activities" id="company-activities" validate={this.validateCompanyActivities} />
							
							<label className={FORM.label} htmlFor="contact-person">Contact person<span className={FORM.required}>*</span></label>
							{formState.errors['contact-person'] && <div className={FORM.errorBox}>{formState.errors['contact-person']}</div> }
							<Text className={FORM.input} field="contact-person" id="contact-person" validate={this.validateContactPerson} />
							
							<label className={FORM.label} htmlFor="position">Position<span className={FORM.required}>*</span></label>
							{formState.errors['position'] && <div className={FORM.errorBox}>{formState.errors['position']}</div> }
							<Text className={FORM.input} field="position" id="position" validate={this.validatePosition} />
							
							<label className={FORM.label} htmlFor="email">E-mail<span className={FORM.required}>*</span></label>
							{formState.errors['email'] && <div className={FORM.errorBox}>{formState.errors['email']}</div> }
							<Text className={FORM.input} field="email" id="email" validate={this.validateEmail} />
							
							<label className={FORM.label} htmlFor="mobile">Mobile<span className={FORM.required}>*</span></label>
							{formState.errors['mobile'] && <div className={FORM.errorBox}>{formState.errors['mobile']}</div> }
							<Text className={FORM.input} field="mobile" id="mobile" validate={this.validateMobile} />

							<label className={FORM.label} htmlFor="message">Message<span className={FORM.required}>*</span></label>
							{formState.errors['message'] && <div className={FORM.errorBox}>{formState.errors['message']}</div> }
							<div className={FORM.row}>
								<TextArea field="message" className={classNames(FORM.input, FORM.textarea)} id="message" validate={this.validateMessage} />
							</div>

							{this.state.loading ? 
								<LoadingAnimation />
							:
								<button className={classNames(FORM.submit, 'g-submit')} type="submit">
									Send Request
								</button>
							}

							{this.state.responseMessage !== null &&
								<div className={CSS.responseMessage}>{this.state.responseMessage}</div>
							}
						</React.Fragment>
					)}
				</Form>
				<style jsx>{`
					.wrapper{
						margin-top: 60px;
					}
				`}</style>
			</div>
		)
	}
}