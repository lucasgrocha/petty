import React, { useState } from 'react';
import locationPoint from '../../assets/images/icons/gps.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export interface Pet {
  id: number;
  owner_name: string;
  pet_name: string;
  description: string;
  age: number;
  address: string;
  status: string;
  last_seen_coords: string | null;
  contacts: {
    phone_number: string;
    email: string;
  };
  pictures_url: string[];
}

interface Props {
  petData: Pet;
}

const PetCard: React.FC<Props> = ({ petData }) => {
  const [mouseOver, setMouseOver] = useState<boolean>();
  const coverPicture = petData.pictures_url[0];

  return (
    <Link
      to={`/pets/${petData.id}`}
      className={[
        'petcard',
        mouseOver
          ? 'bounceCardIn'
          : mouseOver === undefined
          ? ''
          : 'bounceCardOut',
      ].join(' ')}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      state={petData}
    >
      <div id="petcard-info">
        <div id="petcard-pet-picture">
          <img
            src={
              coverPicture
                ? `http://192.168.15.11:3000/${coverPicture}`
                : 'https://bit.ly/2YPLnoi'
            }
            alt={petData.pet_name}
          />
        </div>

        <div id="petcard-pet-info">
          <div id="petcard-pet-title">
            <h2>{petData.pet_name}</h2>

            <div id="petcard-pet-title-space" />

            <span>
              {petData.age} {petData.age > 1 ? 'anos' : 'ano'}
            </span>
          </div>

          <div id="petcard-pet-description">
            <span>{petData.description}</span>
          </div>

          <div id="petcard-pet-location">
            <img src={locationPoint} alt={`${petData.pet_name} location`} />
            <span>{petData.address}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
