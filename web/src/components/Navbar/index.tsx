import React, { useState, ReactNode } from 'react';
import { Pets } from '@styled-icons/material';

import './styles.css';
import logo from '../../assets/images/icons/logo.svg';
import HamburgerMenu from '../HamburgerMenu';
import Backdrop from '../Ui/Backdrop';
import AsideMenuItems from '../AsideMenuItems';
import { Link } from 'react-router-dom';
import Search from '../Search';

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
      url: '/pets?status=adoption',
    },
    {
      icon: <Pets className="list-icon" />,
      label: 'Ver desaparecidos',
      url: '/pets?status=lost',
    },
    {
      icon: <Pets className="list-icon" />,
      label: 'Anunciar pet',
      url: '/pets/create',
    },
  ];

  const menuUlList = (
    <ul>
      {menuItems.map((item) => (
        <li key={item.label}>
          <a
            className="link"
            href={item.url}
            onClick={() =>
              hamburgerMenuVisible && setHamburgerMenuVisible(false)
            }
          >
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
          <Link to="/" id="navbar-site-info">
            <img src={logo} alt="Petty logo" className="navbar-logo" />
            <span id="title">Petty</span>
          </Link>
          <Search />
          <div id="navbar-menu">
            <HamburgerMenu
              clicked={!!hamburgerMenuVisible}
              click={handleHamburgerClicked}
            />
            <div id="navbar-menu-items">{menuUlList}</div>
          </div>
        </div>
      </nav>

      <AsideMenuItems
        logoURL={logo}
        ulList={menuUlList}
        show={hamburgerMenuVisible}
      />

      <Backdrop
        clicked={handleHamburgerClicked}
        visible={hamburgerMenuVisible}
      />
    </>
  );
};

export default Navbar;
