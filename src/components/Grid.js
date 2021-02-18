import './Grid.style.css';
import _ from 'lodash';
import faker from 'faker';
import React from 'react';

// const components = [
//   { type: 'header' },
//   { type: 'content' },
//   { type: 'sidebar', content: faker.lorem.paragraph(5) },
//   { type: 'footer' },
// ];

const Grid = () => {
  return (
    <div className="grid-component">
      {_.range(20).map((n) => (
        <div className="grid-component-item" key={`grid-component-item-${n}`}>
          {n}
        </div>
      ))}
    </div>
  );
};

export default Grid;
