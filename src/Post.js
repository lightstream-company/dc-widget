import React from 'react';
import './Post.css';

export default function Post(post){
  const {index, user, size, text} = post;
  const opacity = (size - index) / size;
  const rotate = index/size * 360;
  const translate =  60;
  const style = {
    transform: `rotate(${rotate}deg) translate(${translate}px)`
  };
  const txtStyle = {
    opacity
  };
  return <div className="post" style={style}>
    <div style={txtStyle} className="content">
      <div className="line"></div>
      <h2>@{user.name}</h2>
      <p>{text}</p>
    </div>
  </div>;
}
