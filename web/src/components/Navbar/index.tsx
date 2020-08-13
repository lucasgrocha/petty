import React, { useState, ReactNode } from 'react';
import { Pets, Spa, GpsFixed } from '@styled-icons/material';

import './styles.css';
import logo from '../../assets/images/icons/logo.svg';
import HamburgerMenu from '../HamburgerMenu';
import Backdrop from '../Ui/Backdrop';

interface MenuItem {
  icon: ReactNode;
  label: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState<boolean>();

  function handleHamburgerClicked() {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  }

  const menuItems: MenuItem[] = [
    {
      icon: <Pets className="list-icon" />,
      label: 'Adotar',
      url: '/',
    },
    {
      icon: <Spa className="list-icon" />,
      label: 'Procurar cuidados',
      url: '/',
    },
    {
      icon: <GpsFixed className="list-icon" />,
      label: 'Anunciar desaparecimento',
      url: '/',
    },
  ];

  const menuUlList = (
    <ul>
      {menuItems.map((item) => (
        <li key={item.label}>
          <a className="link" href={item.url}>
            <div className="list-item">
              {item.icon}
              {item.label}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav id="navbar">
        <div id="navbar-content">
          <div id="navbar-site-info">
            <img src={logo} alt="Petty logo" className="navbar-logo" />
            <span id="title">Petty</span>
          </div>
          <div id="navar-menu">
            <HamburgerMenu
              clicked={!!hamburgerMenuVisible}
              click={handleHamburgerClicked}
            />
            <div id="navbar-menu-items">{menuUlList}</div>
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

        {menuUlList}
      </div>

      <Backdrop
        clicked={handleHamburgerClicked}
        visible={hamburgerMenuVisible}
      />
    </>
  );
};

export default Navbar;
