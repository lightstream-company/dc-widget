import React from 'react';
import './Post.css';
import createConnection from 'tweetping-connect';
import getStreamId from './utils/getStreamId';

const {permalink} = createConnection(getStreamId());

export default function Post(post) {
  const {index, user, size, text, _id} = post;
  const {profile_picture} = user;
  const opacity = size - 1 === index ? 0 : 1; //0.5 + (size - index) / size * 0.5;
  const rotate = index / (size - 1) * -360 - 90;
  const zIndex = (size + 1) - index;
  const translate = 100;
  const style = {
    zIndex,
    opacity,
    transform: `rotate(${rotate}deg) translate(${translate}px)`
  };
  const txtStyle = {
  };
  return <div className="post" style={style}>
    <div style={txtStyle} className="content">
      <a href={permalink(_id)} target="_blank">
        <span className="pict" style={{backgroundImage:`url(${profile_picture})` }} />
      </a>
      <div className="line"></div>
      <h2>@{user.name}</h2>
      <p>{text}</p>
    </div>
  </div>;
}
