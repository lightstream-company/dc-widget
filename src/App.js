import React, { Component } from 'react';
import './App.css';
import posts from './data.json';

console.log(posts);

class App extends Component {
  render() {
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

export default App;
