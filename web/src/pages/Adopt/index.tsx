import React, { useEffect, useState } from 'react';
import PetCard from '../../components/PetCard';
import petService from '../../services/petService';

interface Pet {
  id: number;
  age: number;
  description: string;
  location: string;
  pet_name: string;
  picture_url: string;
}

const Adopt: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>()

  useEffect(() => {
    petService.index().then(res => {
      setPets(res.data)
    })
  }, [])

  return (
    <div className="container">
      <div id="adopt-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pets?.map((pet) => (
          <PetCard
            key={pet.id}
            pictureURL={pet.picture_url}
            age={pet.age}
            petName={pet.pet_name}
            description={pet.description}
            location={pet.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
