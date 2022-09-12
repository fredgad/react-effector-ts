import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
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
    </footer>
  );
};
