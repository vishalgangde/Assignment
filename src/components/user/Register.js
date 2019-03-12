import React from 'react';
import _ from 'lodash';
import { Field,reduxForm} from 'redux-form';
import { RegisterUser } from '../../actions/index';
import { connect } from 'react-redux';
//import history from '../../history';
//import {toastr} from 'react-redux-toastr'
class Register extends React.Component{
    renderError({touched,error}){
        //console.log({errors});
        
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,type,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        
        return(
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}
            </div>
        );
        
    }

    onSubmit = (formValues) => {
        let role = {
            role :'author'
          }
          formValues = _.assign(formValues,role);
          console.log(role);
          formValues = _.omit(formValues, 'cfm_password');
          console.log(formValues);
        this.props.RegisterUser(formValues);
        
    }

    render(){
        //console.log(this.props);
       // if(!localStorage.getItem("authToken")){
        return(
            <div>
                <h2>Registeration Form</h2 >
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field  
                    type="text" 
                    name="first_name" 
                    component={this.renderInput} 
                    label="First Name" 
                />
                <Field  
                    type="text" 
                    name="last_name" 
                    component={this.renderInput} 
                    label="Last Name" 
                />
                <Field  
                    type="text" 
                    name="username" 
                    component={this.renderInput} 
                    label="UserName" 
                />
                <Field  
                    type="email" 
                    name="email" 
                    component={this.renderInput} 
                    label="Email ID" 
                />
                <Field  
                    type="password" 
                    name="password" 
                    component={this.renderInput} 
                    label="Password" 
                />

                <Field  
                    type="password" 
                    name="cfm_password" 
                    component={this.renderInput} 
                    label="Confirm Password" 
                />
                <button type="submit"  className="ui button primary">Submit</button>
            </form>
            </div>
            
        );
        }

       
    }


const validate = (formValues) => {
    const errors = {};

    if(!formValues.first_name){
        errors.first_name = 'Please Enter First Name';
    }
    else if (formValues.first_name.length > 15) {
    errors.first_name = 'Must be 15 characters or less'
  }

    if(!formValues.last_name){
        errors.last_name = 'Please Enter Last Name ';
    }
    else if (formValues.last_name.length > 15  ) {
        errors.last_name = 'Must be 12 characters or less'
      }

    if(!formValues.username){
        errors.username = 'Please Enter Username';
    }
    else if (formValues.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
      }

    if(!formValues.email){
        errors.email = 'please enter email id';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
      }

      if (!formValues.password) {
        errors.password = 'Required';
      }
      if (!formValues.cfm_password ) {
        errors.cfm_password = 'Required' ;
      } else if (formValues.cfm_password !== formValues.password) {
        errors.cfm_password = 'Password mismatched' ;
      }

    /*if(!formValues.role){
        errors.role = 'Please Enter Role';
    }*/


    return errors;

}

const Wrapped = reduxForm({
    form : 'Register',
    validate
})(Register);

export default connect(null,{RegisterUser})(Wrapped);