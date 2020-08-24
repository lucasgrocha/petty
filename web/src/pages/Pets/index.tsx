import React, { useState, useEffect } from 'react';

import './styles.css';

import ImageGallery from 'react-image-gallery';
import { Pet } from '../../components/PetCard';
import petService from '../../services/petService';
import { useParams, useNavigate } from 'react-router-dom';

const Pets: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [petData, setPetData] = useState<Pet>(window.history.state.usr);

  useEffect(() => {
    if (petData === undefined) {
      petService
        .show(id)
        .then((res) => {
          setPetData(res.data);
        })
        .catch(() => {
          navigate('/adopt');
        });
    }
  }, [id, petData, navigate]);

  if (petData === undefined) {
    return null;
  }

  const IMAGES = petData.pictures_url.map((pic, index) => ({
    original: pic,
    thumbnail: pic,
  }));

  return (
    <div className="container">
      <div id="pets-wrapper">
        <div id="pets-info-top">
          <div id="pets-photo-gallery">
            <ImageGallery
              items={IMAGES}
              showFullscreenButton={false}
              showPlayButton={false}
              showThumbnails={false}
              showBullets={petData.pictures_url.length > 1}
            />
          </div>
          <div id="pets-info-infos">
            <div className="pet-info-prop">
              <h3>
                Name: <span>{petData.pet_name}</span>
              </h3>

              <h3>
                Age: <span>{petData.age}</span>
              </h3>

              <h3>
                Location: <span>{petData.location}</span>
              </h3>
            </div>
          </div>
        </div>
        <hr />

        <div id="pets-info-bottom">
          <div id="pets-info-description">
            <p>{petData.description}</p>
          </div>
        </div>

        <div id="pet-info-buttons">
          <a
            target="_blank"
            href={`https://wa.me/${petData.contacts.whatsapp}`}
          >
            Whatsapp
          </a>
          <a target="_blank" href={`mailto:${petData.contacts.email}`}>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pets;
