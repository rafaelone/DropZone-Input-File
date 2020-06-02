import React from 'react';

import { NavLink } from 'react-router-dom';
import { Header } from './styles';

function HeaderComponent() {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Input</NavLink>
          </li>
          <li>
            <NavLink to="/dropzone">Dropzone</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default HeaderComponent;
