import React, { Component } from 'react';
import './Post.css';
import createConnection from 'tweetping-connect';
import getStreamId from './utils/getStreamId';

const {permalink} = createConnection(getStreamId());

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: Math.round(Math.random() * 100)
    };
  }
  render() {
    const {index, user, size, text, _id} = this.props;
    const {left} = this.state;
    const {profile_picture} = user;
    const opacity = index / size;
    const zIndex = (size + 1) - index;
    const style = {
      left: left + '%',
      zIndex,
      opacity
    };
    const txtStyle = {
    };
    return <div className="post" style={style}>
      <div style={txtStyle} className="content">
        <a href={permalink(_id)} target="_blank">
          <span className="pict" style={{
        backgroundImage: `url(${profile_picture})`
      }} />
        </a>
        <p>{text}</p>
      </div>
    </div>;
  }
}

export default Post;
