import React, { useState } from 'react';

import logo from '../../assets/images/icons/logo.svg';

import './styles.css';
import HamburgerMenu from '../HamburgerMenu';
import Backdrop from '../Ui/Backdrop';

const Navbar: React.FC = () => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(true);

  function handleHamburgerClicked() {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  }

  return (
    <>
      <nav id="navbar">
        <div id="navbar-content">
          <div id="navbar-site-info">
            <img src={logo} alt="Petty logo" id="navbar-logo" />
            <span id="title">Petty</span>
          </div>
          <div id="navar-menu">
            <HamburgerMenu clicked={handleHamburgerClicked} />
          </div>
        </div>
      </nav>

      <div
        id="aside-menu-items"
        className={hamburgerMenuVisible ? 'on' : 'off'}
      ></div>

      <Backdrop
        clicked={handleHamburgerClicked}
        visible={hamburgerMenuVisible}
      />
    </>
  );
};

export default Navbar;
