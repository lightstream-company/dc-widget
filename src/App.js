import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import './App.css';


class App extends Component {
  render() {
    const {posts, viewport} = this.props;
    const style = {
      fontSize: 10 * viewport.width / 1200
    };
    return <div className="wrapper">
      <div className="wall" style={style}>
        {posts.map((post, i) => <Post key={post._id} index={i} size={posts.length} {...post} />)}
      </div>
    </div>;
  }
}

export default connect(store => ({
  posts: store.wall,
  viewport: store.viewport
}))(App);
