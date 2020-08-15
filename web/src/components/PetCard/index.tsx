import React from 'react';

// import { LocationOn as LocationPoint } from '@styled-icons/material';
import locationPoint from '../../assets/images/icons/gps.svg';

import './styles.css';

interface Props {
  pictureURL: string;
  petName: string;
  age: number;
  description: string;
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

            <div id="petcard-pet-title-space" />

            <span>
              {props.age} {props.age > 1 ? 'anos' : 'ano'}
            </span>
          </div>

          <div id="petcard-pet-description">
            <span>{props.description}</span>
          </div>

          <div id="petcard-pet-location">
            <img src={locationPoint} alt={`${props.petName} location`} />
            <span>{props.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
