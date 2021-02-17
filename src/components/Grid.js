import './Grid.style.css';
import _ from 'lodash';
import React from 'react';

const Grid = () => {
  return (
    <div className="Grid-component">
      {_.range(10).map((n) => (
        <div>{n}</div>
      ))}
    </div>
  );
};

export default Grid;
