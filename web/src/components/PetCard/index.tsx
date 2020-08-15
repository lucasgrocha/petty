import React from 'react';

import { LocationOn as Gps } from '@styled-icons/material';

import './styles.css';

interface Props {
  pictureURL: string;
  petName: string;
  age: number;
  characteristics: string[];
  location: string;
}

const PetCard: React.FC<Props> = (props) => {
  return (
    <div className="petcard">
      <div id="petcard-info">
        <div id="petcard-pet-picture">
          <img src={props.pictureURL} alt={props.petName} />
        </div>

        <div id="petcard-pet-info">
          <div id="petcard-pet-title">
            <h2>{props.petName}</h2>
            <div id="petcard-pet-title-space"></div>
            <span>{props.age} anos</span>
          </div>

          <div id="petcard-pet-characteristics">
            <span>{props.characteristics.join(', ')}</span>
          </div>

          <div id="petcard-pet-location">
            <Gps />
            <span>{props.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
