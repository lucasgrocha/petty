import React from 'react';

import './styles.css';

interface Props {
  clicked: () => void;
}

const HamburgerMenu: React.FC<Props> = (props) => {
  return (
    <>
      <div id="hamburger" onClick={props.clicked}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
