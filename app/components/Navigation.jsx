import React from 'react';
import { IndexLink } from 'react-router';

export default () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React-Boilerplate</li>
        <li>
          <IndexLink to="/" activeClassName="active-link">Example</IndexLink>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">Created by somebody</li>
      </ul>
    </div>
  </div>
);
