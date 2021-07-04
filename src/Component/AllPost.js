import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Edito from '../Edito';
//import { Link } from 'react-router-dom';



class AllPost extends Component {
render() {
return (
 
<div>
  <h1 className="post_heading">Todas las Tareas</h1>
  {this.props.posts.map((post) => { 
    return (<div key={post.id}>
      {post.editing ? <Edito post={post} key={post.id} /> : <Post post={post}
      key={post.id} />}
    </div>)
  
})}
</div>
  
 
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(AllPost)