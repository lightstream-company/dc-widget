import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  render() {
    const {posts} = this.props;
    return <div className="wall">
      {posts.map((post, i) => {
        return <div key={i} className="post">
          <img src={post.user.profile_picture} alt="" />
          <h2>@{post.user.name}</h2>
          <em>from {post._source}</em>
          <p>{post.text}</p>
        </div>;
      })}
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
