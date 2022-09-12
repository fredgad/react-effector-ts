import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ui">Ui-Kit</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
