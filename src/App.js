import React, { Component } from 'react';
import './App.css';
import posts from './data.json';

class App extends Component {
  render() {
    return <div className="wall">
      {posts.map((post, i) => {
        return <div key={i} className="post">
          <h2>@{post.user.name}</h2>
          <p>{post.text}</p>
          <em>from {post._source}</em>
        </div>;
      })}
    </div>;
  }
}

export default App;
