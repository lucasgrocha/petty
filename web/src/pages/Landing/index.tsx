import React, { useEffect, useState } from 'react';

import './styles.css';
import landingService from '../../services/landingService';
import PetCard, { Pet } from '../../components/PetCard';
import banner from '../../assets/images/banner.jpg';

const Landing: React.FC = () => {
  const [landingPets, setLandingPets] = useState<Pet[]>([]);

  useEffect(() => {
    landingService.index(6).then((res) => {
      setLandingPets(res.data);
    });
  }, []);

  if (landingPets.length === 0) {
    return null;
  }

  return (
    <div id="landing">
      <div id="landing-banner">
        <img src={banner} alt="banner" />
        <div className="centered">
          <h1>Welcome to Petty!</h1>
          <h5>Look below the latest registered pets</h5>
        </div>
      </div>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {landingPets.map((pet) => (
            <PetCard key={pet.id} petData={pet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
