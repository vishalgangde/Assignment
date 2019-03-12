import React from 'react';
import { Link } from 'react-router-dom';
import {signIn} from '../actions/index';
import {RegisterUser} from '../actions/index';
import { connect } from 'react-redux';


class Header extends React.Component{

    render(){
       // if(localStorage.getItem("authToken")){
        return(
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Posts</Link>
                <Link to="/posts/createpost" className="item">Create Post</Link>
                <Link to="/posts/userupdate" className="item">User Update</Link>
                <div className="right menu">
                    <button className="ui button negative">
                        <Link to="/user/logout" className="item">Log Out</Link>
                    </button>
                </div>
                      
                        <div className="right menu">
                            <button className="ui button primary">
                            <Link to="/user/register" className="item">Registration</Link>
                            </button>
                        </div>
                        <div className="right menu">
                            <button className="ui button primary">
                                <Link to="/user/signin" className="item">Sign In</Link>
                            </button>
                        
                        </div>
                        </div>
                    )
                }
                    
    

    

}

export default connect (null,{RegisterUser,signIn})(Header);