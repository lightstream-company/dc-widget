import React from 'react';

export default function VerticalText({text, style}) {
  if (text && text.length) {
    const letters = [...text];
    return <div className="VerticalText" style={style}>
      {letters.map((letter, i) => <div key={i} className="letter">{letter}</div>)}
    </div>;
  }else{
    return null;
  }
}
