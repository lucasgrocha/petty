import React from 'react';

import './styles.css';

interface Props {
  petName: string;
  age: number;
  address: string;
  pictureURL: string;
  id: number;
  status: number;
  clicked: (url: string) => void;
}

const DropdownItem: React.FC<Props> = (props) => {
  const STATUSES = ['Lost', 'Adoption'];
  const parsedStatus = STATUSES[props.status];

  return (
    <div
      className="dropdown-item"
      onClick={() => props.clicked(`/pets/${props.id}`)}
    >
      <div className="pet-picture">
        <img src={`http://192.168.15.11:3000${props.pictureURL}`} alt="Pet" />
      </div>
      <div className="dropdown-pet-info">
        <h3>{props.petName}</h3>

        <span>
          {props.age} {props.age > 1 ? 'anos' : 'ano'} | {props.address}
        </span>
        <p
          id="status-info"
          style={{
            color: props.status === 0 ? 'red' : 'green',
          }}
        >
          {parsedStatus}
        </p>
      </div>
    </div>
  );
};

export default DropdownItem;
