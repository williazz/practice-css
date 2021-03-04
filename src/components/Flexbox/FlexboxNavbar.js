import React from 'react';
import './FlexboxNavbar.style.css';

const FlexboxNavbar = () => {
  return (
    <div class="bar">
      <div class="icon icon-1"></div>
      <div class="icon icon-2"></div>
      <div class="icon icon-3"></div>
      <div class="username">Emily Blunt</div>
      <div class="search">
        <input type="search" placeholder="search..." />
      </div>
    </div>
  );
};

export default FlexboxNavbar;
