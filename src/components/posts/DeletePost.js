import React from 'react';
import Modal from '../Modal'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { DeletePostid, SinglePostList } from '../../actions/index'


 
class DeletePost extends React.Component{
    componentDidMount(){
        this.props.SinglePostList(this.props.match.params.id);
        
    }

    renderAction (){ 
        console.log(this.props.match.params);
    const id =  this.props.match.params.id; 
    return(
    <React.Fragment>
    <button 
    onClick = {() => this.props.DeletePostid(id)} 
    className="ui button negative"
    >
    Delete
    </button>
    <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
    }

    renderContent(){
    if(!this.props.posts){
     return `Are you sure to delete this post?`;
    }
    return `Are you sure to delete this post with Title : ${this.props.posts.title.rendered}`
    }

    render(){

    return (
        <Modal  
        title="Delete Post"
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss = {() => history.push('/')}
        />
    );
    }
    }

    const mapStateToProps = (state, ownProps) => {
        console.log("mapStateToProps",state.posts);
    return { posts : state.post[ownProps.match.params.id]}
    }


    export default connect(mapStateToProps,{ DeletePostid,SinglePostList })(DeletePost);