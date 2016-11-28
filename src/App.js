import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  render() {
    const {posts} = this.props;
    return <div className="wall">

      <h1> Live tweet ! </h1>

      {posts.map((post, i) => {
        return <div key={i} className="post">
          <img src={post.user.profile_picture} alt="" />
          <h2>@{post.user.name}</h2>
          <p>{post.text}</p>
          <em>from {post._source}</em>
        </div>;
      })}
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
