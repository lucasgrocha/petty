import React from 'react';

import './styles.css';

const DropdownItem: React.FC = () => {
  return (
    <div className="dropdown-item">
      <img
        src="http://192.168.15.11:3000//uploads/pet/pictures/59/387q7nj1dm1xpe32jpv2.jpeg"
        alt="Pet"
      />
      <div className="dropdown-pet-info">
        <h4>Pet name</h4>
        <span>5 anos | Location</span>
      </div>
    </div>
  );
};

export default DropdownItem;
