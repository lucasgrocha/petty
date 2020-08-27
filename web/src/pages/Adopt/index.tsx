import React, { useEffect, useState } from 'react';
import PetCard, { Pet as PetInterface } from '../../components/PetCard';
import petsService from '../../services/petsService';

const Adopt: React.FC = () => {
  const [pets, setPets] = useState<PetInterface[]>();

  useEffect(() => {
    petsService.index('adoption').then((res) => {
      setPets(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div id="adopt-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pets?.map((pet) => (
          <PetCard key={pet.id} petData={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
