import React, { Component } from 'react';

import { connect } from 'react-redux';
import './App.css';





class App extends Component {
  render() {
    const {posts} = this.props;
    return <div className="wall">
      {posts.map((post, i) => {
        return <div key={i} className="post">
            
        
        <div className="gauche">
          <figure><img src={post.user.profile_picture} alt="" /></figure>
          <h2>@{post.user.name}</h2>
        </div>
          
        <div className="droite">
          <p>{post.text}</p>
          <em>from {post._source}</em>
        </div>
          
    </div>;
          
          
          
          
      })}
    </div>;
  }
}





export default connect(store => ({
  posts: store
}))(App);
