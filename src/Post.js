import React, { Component } from 'react';
import _ from 'lodash';
import VerticalText from './VerticalText';
import './Post.css';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: Math.random() * 100,
      fontSize: Math.random(),
      timer: Math.round(Math.random() * 200) + 300,
      textIndex: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.incrementIndex(), this.state.timer);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  incrementIndex() {
    const newIndex = this.state.textIndex + 1;
    const textLength = _.get(this.props, 'text.length', 0);
    this.setState({
      textIndex: newIndex > textLength ? 0 : newIndex
    });
  }
  render() {
    const {index, user, size, text} = this.props;
    const {left, textIndex} = this.state;
    const {profile_picture} = user;
    const opacity = (size - index) / size;
    const zIndex = (size + 1) - index;
    const style = {
      left: left + '%',
      zIndex,
      opacity,
      fontSize: Math.round(opacity * 2 * 7) + 5
      //transform: `translateZ(${opacity * 1000}px)`
    };
    const txtStyle = {
    };
    return <div className="post" style={style}>
      <div style={txtStyle} className="content">
        <VerticalText text={(text || '').slice(0, textIndex)} />
        <div className="border">
          <span className="pict" style={{
          backgroundImage: `url(${profile_picture})`
        }} />
        </div>
      </div>
    </div>;
  }
}

export default Post;
