import React from 'react';

import './styles.css';

interface Props {
  petName: string;
  age: number;
  address: string;
  pictureURL: string;
  id: number;
}

const DropdownItem: React.FC<Props> = (props) => {
  return (
    <a
      href={`/pets/${props.id}`}
      className="dropdown-item"
      onClick={() => console.log(123)}
    >
      <img src={`http://192.168.15.11:3000${props.pictureURL}`} alt="Pet" />
      <div className="dropdown-pet-info">
        <h4>{props.petName}</h4>
        <span>
          {props.age} {props.age > 1 ? 'anos' : 'ano'} | {props.address}
        </span>
      </div>
    </a>
  );
};

export default DropdownItem;
