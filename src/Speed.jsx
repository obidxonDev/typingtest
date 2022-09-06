import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  if (props.symbols !== 0 && props.sec !== 0) {
    const wpm = (props.symbols/5) / (props.sec/60);
    return (
      <div>{Math.round(wpm) ? Math.round(wpm) : 0} wpm</div>
    )
  }
  
  return null;
}