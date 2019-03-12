import React from 'react';
import { connect } from 'react-redux';
import { postList } from '../../actions/'
import { Link } from 'react-router-dom';

class PostList extends React.Component{
    componentDidMount(){
        console.log("aa")
        this.props.postList();
    }

    renderAdminList (post) {
        console.log('renderAdminList',localStorage.getItem('userId'));
        if (post.author.toString() == localStorage.getItem('userId')) {
          return (
            <div className='right floated content'>
              <Link className='ui button primary' to={`/posts/edit/${post.id}`}> Edit
              </Link>
              <Link className='ui button negative   ' to={`/posts/delete/${post.id}`}> Delete
              </Link>
            </div>
          )
        }
      }


    renderPostList(){
        return this.props.posts.map(post => {
            return( 
                
                  <div className="item" key={post.id}>
                  {this.renderAdminList(post)}
                    <i className="large middle aligned icon user" />
                     <div className="content">
                      <Link to={`/posts/postview/${post.id}`} className="header">
                          {post.title.rendered}
                      </Link>
                          <div className="description">{post.content.rendered}</div>
                        </div>
                       
                </div>
            );
        });
    }

    render(){
        console.log(this.props.posts,"mapstatetoprops");
        return(
            <div>
                <h2>All Post List</h2>
               
                <div className="ui celled list">{this.renderPostList()}</div> 
            </div>
        ); 
    }
}

const mapStateToProps = ({post}) => {
    console.log(post)
    return {
      posts: Object.values(post)
      //userId: post.localStorage.getItem('userId')
    }
  }

export default connect(mapStateToProps, {postList})(PostList);