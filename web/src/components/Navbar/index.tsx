import React, { useState } from 'react';
import { Pets, Spa, GpsFixed } from '@styled-icons/material';

import './styles.css';
import logo from '../../assets/images/icons/logo.svg';
import HamburgerMenu from '../HamburgerMenu';
import Backdrop from '../Ui/Backdrop';

interface MenuItem {
  icon: string;
  label: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState<boolean>(
    true
  );

  function handleHamburgerClicked() {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  }

  return (
    <>
      <nav id="navbar">
        <div id="navbar-content">
          <div id="navbar-site-info">
            <img src={logo} alt="Petty logo" className="navbar-logo" />
            <span id="title">Petty</span>
          </div>
          <div id="navar-menu">
            <HamburgerMenu clicked={handleHamburgerClicked} />
          </div>
        </div>
      </nav>

      <div
        id="aside-menu-items"
        className={
          hamburgerMenuVisible
            ? 'on'
            : hamburgerMenuVisible !== undefined
            ? 'off'
            : ''
        }
      >
        <header>
          <img src={logo} alt="Petty logo" className="navbar-logo" />
          <h2>Items available</h2>
        </header>
        <ul>
          <li>
            <a className="link" href="/">
              <div className="list-item">
                <Pets className="list-icon" />
                Adotar
              </div>
            </a>
          </li>
          <li>
            <a className="link" href="/">
              <div className="list-item">
                <Spa className="list-icon" />
                Procurar cuidados
              </div>
            </a>
          </li>
          <li>
            <a className="link" href="/">
              <div className="list-item">
                <GpsFixed className="list-icon" />
                Anunciar desaparecimento
              </div>
            </a>
          </li>
        </ul>
      </div>

      <Backdrop
        clicked={handleHamburgerClicked}
        visible={hamburgerMenuVisible}
      />
    </>
  );
};

export default Navbar;
