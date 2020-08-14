import React from 'react';

import './styles.css';

interface Props {
  show?: boolean;
  logoURL: string;
  ulList: JSX.Element;
}

const AsideMenuItems: React.FC<Props> = (props) => {
  return (
    <div
      id="aside-menu-items"
      className={props.show ? 'open' : props.show !== undefined ? 'close' : ''}
    >
      <header>
        <img src={props.logoURL} alt="Petty logo" className="navbar-logo" />
        <h2>Items available</h2>
      </header>

      {props.ulList}
    </div>
  );
};

export default AsideMenuItems;
