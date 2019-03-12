import React from 'react';
import { Field,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createpost } from '../../actions/index';


class CreatePost extends React.Component{

    renderError({touched,error}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,label,meta,inputType,idLable }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        //console.log(meta);
        
        return(
                <div className={className}>
                    <label>{label}</label>
                    
                    <input {...input}  autoComplete="off" />
                    {this.renderError(meta)}
            </div>
        );
        
    }
    /*if(inputType === "select") {
        /* onScroll={this.onScrollThatCallsPreventDefault}
      onScrollPassive={this.onScrollThatJustListens} */
       

    onSubmit = (formValues) => {
        this.props.createpost(formValues);
        
    }

    render(){
        //console.log(this.props);
        //if(localStorage.getItem("authToken")){
        return(
            <div>
                <h2>Create Post</h2 >
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field inputType="text" name="title" component={this.renderInput} label="Enter Title" />
                <Field inputType="text" name="content" component={this.renderInput} label="Enter Description" />
                <Field inputType="select" name="status" component={this.renderInput} label="Status">
            <option component="publish">publish</option>
            <option component="future">future</option>
            <option component="draft">draft</option>
            <option component="pending">pending</option>
            <option component="private">private</option>
          </Field>
          
                <button className="ui button primary">Submit</button>
            </form>
            </div>
            
        );
    }
}
//publish, future, draft, pending, private


const validate = (formValues) => {
    const error = {};

    if(!formValues.title){
        error.title = 'Please Enter a title';
    }

    if(!formValues.content){
        error.content = 'Please Enter a description';
    }

    if(!formValues.status){
        error.status = 'Please Enter a Status';
    }

    return error;
}


const fromWrapped = reduxForm({
    form : 'CreatePost',
    validate:validate
})(CreatePost);

export default connect(null,{createpost})(fromWrapped);   