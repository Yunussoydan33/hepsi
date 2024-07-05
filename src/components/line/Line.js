import React from 'react';
import './Line.css';

const Line = () => {
  return (
    <div className="line-container">
      <div className="line segment orange"></div>
      <div className="line segment lightblue"></div>
      <div className="line segment purple"></div>
      <div className="line segment green"></div>
      <div className="line segment red"></div>
    </div>
  );
};

export default Line;
