import React from 'react';

import logo from '../../assets/images/icons/logo.svg';

import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav id="navar">
      <div id="navbar-content">
        <div id="navbar-site-info">
          <img src={logo} alt="Petty logo" id="navbar-logo" />
          <span id="title">Petty</span>
        </div>
        <div id="navar-menu">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
