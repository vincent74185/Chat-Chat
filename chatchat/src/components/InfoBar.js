import React from 'react';

import './InfoBar.css';

const InfoBar = ({ name, color }) => {
  console.log('InfoBar: ' + name + " " + color);
  const style = {
    color: '#' + color
  }
  return (
    <div className="infoBar rounded text-white">
      <h3 style={style}>User: {name}</h3>
    </div>
  )
};

export default InfoBar;