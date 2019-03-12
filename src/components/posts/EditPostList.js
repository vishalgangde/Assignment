import React from 'react';
import { connect } from 'react-redux';
import { EditPost } from '../../actions/index';
import ListForm from './ListForm';
import _ from 'lodash';

class EditPostList extends React.Component {
  
        
        onSubmit = (formValue) => {
          // console.log(formValue)
           this.props.EditPost(this.props.match.params.id , formValue);
       };

       render(){
          /* if(!this.props.post){
               return<div>Loading...</div>
           }*/
          
           return(
            <div>
               
                <ListForm
                  /*  initialValues={_.pick(this.props.post.title.rendered)} */
                    onSubmit={this.onSubmit} 
                />
            </div>
           );
       }
   }


/*const mapStateToProps = ({post,ownProps}) => {
    console.log("mapStateToProps",post);
    return {
     posts: Object.values[post.match.params.id]
      //userId: post.localStorage.getItem('userId')
    };
  }*/

const mapStateToProps = (state,ownProps) => {
        console.log("mapStateToProps",ownProps);
        return {posts : state.post[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{EditPost})(EditPostList)
//import { Field,reduxForm} from 'redux-form';

