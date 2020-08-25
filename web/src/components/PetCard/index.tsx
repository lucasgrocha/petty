import React from 'react';
import locationPoint from '../../assets/images/icons/gps.svg';
import { Link } from 'react-router-dom';

import './styles.css';

export interface Pet {
  id: number;
  owner_name: string;
  pet_name: string;
  description: string;
  age: number;
  location: string;
  contacts: {
    whatsapp: string;
    email: string;
  };
  pictures_url: string[];
}

interface Props {
  petData: Pet;
}

const PetCard: React.FC<Props> = ({ petData }) => {
  return (
    <Link to={`/pets/${petData.id}`} className="petcard" state={petData}>
      <div id="petcard-info">
        <div id="petcard-pet-picture">
          <img src={`http://192.168.15.11:3000/${petData.pictures_url[0]}`} alt={petData.pet_name} />
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
            <span>{petData.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
