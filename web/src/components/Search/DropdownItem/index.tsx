import React from 'react';

import './styles.css';

interface Props {
  petName: string;
  age: number;
  address: string;
  pictureURL: string;
  id: number;
  clicked: (url: string) => void;
}

const DropdownItem: React.FC<Props> = (props) => {
  return (
    <div
      className="dropdown-item"
      onClick={() => props.clicked(`/pets/${props.id}`)}
    >
      <div className="pet-picture">
        <img src={`http://192.168.15.11:3000${props.pictureURL}`} alt="Pet" />
      </div>
      <div className="dropdown-pet-info">
        <h4>{props.petName}</h4>
        <span>
          {props.age} {props.age > 1 ? 'anos' : 'ano'} | {props.address}
        </span>
      </div>
    </div>
  );
};

export default DropdownItem;
