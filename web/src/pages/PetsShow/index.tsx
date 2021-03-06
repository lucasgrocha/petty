import React, { useState, useEffect, useCallback } from 'react';

import './styles.css';

import ImageGallery from 'react-image-gallery';
import { Pet } from '../../components/PetCard';
import petsService from '../../services/petsService';
import { useParams, useNavigate } from 'react-router-dom';
import LeafletMap from '../../components/LeafletMap';

const PetsShow: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [petData, setPetData] = useState<Pet>(window.history.state.usr);

  const loadPets = useCallback(() => {
    petsService
      .show(id)
      .then((res) => {
        setPetData(res.data);
      })
      .catch(() => {
        navigate('/adopt');
      });
  }, [id, navigate]);

  useEffect(() => {
    if (!petData) {
      loadPets();
    }
  }, [id, petData, loadPets]);

  useEffect(() => {
    loadPets();
  }, [id, loadPets]);

  if (!petData) {
    return null;
  }

  const IMAGES = petData.pictures_url
    .map((pic) => `http://192.168.15.11:3000/${pic}`)
    .map((pic) => ({
      original: pic,
      thumbnail: pic,
    }));

  return (
    <div className="container">
      <div id="pets-wrapper">
        <div id="pets-photo-gallery">
          <ImageGallery
            items={IMAGES}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={petData.pictures_url.length > 1}
          />
        </div>

        <div id="pets-info">
          <div id="pets-title">
            <header>
              <h1>{petData.pet_name}</h1>
              <h4>
                {petData.address} | {petData.age} anos
              </h4>
            </header>
          </div>

          <div className="pets-info-description">
            <p>
              <strong>Descrição</strong>
            </p>
            <p>{petData.description}</p>
          </div>

          {petData.last_seen_coords && (
            <div className="pets-info-description">
              <p style={{ textAlign: 'left' }}>
                <strong>Ultimo avistamento</strong>
              </p>
              <LeafletMap markerPosition={petData.last_seen_coords} />
            </div>
          )}

          <p id="pets-info-owner">
            <small>{petData.owner_name} ~</small>
          </p>
        </div>

        <div id="pet-info-buttons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${petData.contacts.phone_number}`}
          >
            Phone
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${petData.contacts.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetsShow;
