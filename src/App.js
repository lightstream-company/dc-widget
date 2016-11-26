import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Post from './Post';
import './App.css';


class App extends Component {
  render() {
    const {posts} = this.props;
    const style = {};
    const lastPostWithImg = _.find(posts, (post) => {
      return post.media[0] !== undefined;
    });
    if(lastPostWithImg){
      style.backgroundImage = `url(${lastPostWithImg.media[0].images.large.url})`;
    }
    return <div className="wrapper">
      <div className="bg" style={style}></div>
      <div className="wall">
        {posts.map((post, i) => <Post key={post._id} index={i} size={posts.length} {...post} />)}
      </div>
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
