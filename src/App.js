import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import './App.css';


class App extends Component {
  render() {
    const {posts} = this.props;
    return <div className="wall">
      {posts.map((post, i) => <Post key={i} index={i} size={posts.length} {...post} />)}
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
