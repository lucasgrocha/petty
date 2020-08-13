import React from 'react';

import './styles.css';

interface Props {
  click: () => void;
  clicked: boolean;
}

const HamburgerMenu: React.FC<Props> = (props) => {
  return (
    <>
      <div
        id="hamburger"
        onClick={props.click}
        className={props.clicked ? 'open' : ''}
      >
        <div id="line-1" className="hamburger-line"></div>
        <div id="line-2" className="hamburger-line"></div>
        <div id="line-3" className="hamburger-line"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
