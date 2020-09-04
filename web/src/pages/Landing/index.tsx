import React, { useEffect, useState } from 'react';

import './styles.css';
import landingService from '../../services/landingService';
import PetCard, { Pet } from '../../components/PetCard';

const Landing: React.FC = () => {
  const [landingPets, setLandingPets] = useState<Pet[]>([]);

  useEffect(() => {
    landingService.index(6).then((res) => {
      setLandingPets(res.data);
    });
  }, []);

  return (
    <div id="landing">
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
