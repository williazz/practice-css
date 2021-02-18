import './Grid.style.css';
import _ from 'lodash';
import faker from 'faker';
import React from 'react';

const components = [
  { type: 'header' },
  { type: 'content' },
  { type: 'sidebar', content: faker.lorem.paragraph(5) },
  { type: 'footer' },
];

const Grid = () => {
  return (
    <div className="grid-component">
      {components.map(({ type, content }, n) => (
        <div
          key={`${type}-${n}`}
          className={[type, 'grid-component-item'].join(' ')}
        >
          {type}: {content}
        </div>
      ))}
    </div>
  );
};

export default Grid;
