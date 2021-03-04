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
      <div className="grid-component-item red" key="dog" />
      {_.range(8).map((n) => (
        <div
          className="grid-component-item blue"
          key={`grid-component-item-${n}`}
        >
          {n}
        </div>
      ))}
    </div>
  );
};

export default Grid;
