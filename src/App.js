import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  render() {
    const {posts} = this.props;
    return <div className="wall">
      {posts.map((post, i) => {

        var thumb;
        if(post.media && post.media[0] && post.media[0].images){
          thumb = <div className="media">
            <img src={post.media[0].images.large.url} alt="" />
          </div>;
        }


        return <div key={i} className="post">
          <img src={post.user.profile_picture} alt="" className="profile-picture" />
          <h2>@{post.user.name}</h2>
          <em>from {post._source}</em>
          <p>{post.text}</p>
          {thumb}
        </div>;
      })}
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
