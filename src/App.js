import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './gridlex.min.css';

class App extends Component {
  render() {
    const {posts} = this.props;

    return <div className=" grid-center wall">
      {posts.map((post, i) => {
        var thumb;
        if(post.media && post.media[0] && post.media[0].images){
          thumb = <div className="media">
            <img src={post.media[0].images.large.url} alt="" />
          </div>;
        }
        console.log(post);
        return <div key={i} className="col-3_md-12 post">
        <div className="header-post">
          <img className="profile-pic" src={post.user.profile_picture} alt="" />
          <h2>{post.user.name}</h2>
        </div>
          <p>{post.text}</p>
          <div className="thumb">{thumb}</div>
          <em>from {post._source}</em>
        </div>;
      })}
    </div>;
  }
}

export default connect(store => ({
  posts: store
}))(App);
