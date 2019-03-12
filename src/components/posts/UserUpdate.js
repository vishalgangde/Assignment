import React from 'react';
import { Field,reduxForm} from 'redux-form';

class UserUpdate extends React.Component{
    renderError({touched,error}){
        console.log({error});
        
        if(touched && error ){
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

    onSubmit(formValues){
        console.log(formValues);
        
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h2>User Update</h2 >
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
                    name="user_name" 
                    component={this.renderInput} 
                    label="UserName" 
                />
                <Field  
                    type="email" 
                    name="email_id" 
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
                <button type="submit" className="ui button primary">Submit</button>
            </form>
            </div>
            
        );
    }
}

const validate = (formValues) => {
    const error = {};

    if(!formValues.first_name){
        error.first_name = 'Please Enter First Name';
    }

    if(!formValues.last_name){
        error.last_name = 'Please Enter Last Name ';
    }

    if(!formValues.user_name){
        error.user_name = 'Please Enter Username';
    }

    if(!formValues.email_id){
        error.email_id = 'please enter email id';
    }

    if(!formValues.password){
        error.password = 'Please Enter password';
    }

    if(!formValues.cfm_password){
        error.cfm_password = 'Please confirm password';
    }

    return error;

}

export default reduxForm({
    form : 'User Upadte',
    validate
})(UserUpdate);
//export default Register;