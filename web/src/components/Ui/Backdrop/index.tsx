import React from 'react';

import './styles.css';

interface Props {
  clicked: () => void;
  visible: boolean;
}

const Backdrop: React.FC<Props> = (props) => {
  return (
    <div
      id="backdrop"
      onClick={props.clicked}
      className={props.visible ? 'show' : 'hide'}
    ></div>
  );
};

export default Backdrop;
