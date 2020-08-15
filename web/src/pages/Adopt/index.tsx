import React from 'react';
import PetCard from '../../components/PetCard';
import faker from 'faker';

const Adopt: React.FC = () => {
  return (
    <div className="container">
      <div id="adopt-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <PetCard
            key={i}
            pictureURL={
              [
                'https://bit.ly/3kNyZOQ',
                'https://bit.ly/2Fhifzd',
                'https://bit.ly/31U0wWh',
                'https://bit.ly/2PXBb8s',
              ][Math.floor(Math.random() * 4)]
            }
            age={Math.floor(Math.random() * 10 + 1)}
            petName={faker.name.firstName()}
            description={faker.lorem.sentences()}
            location={`${faker.address.city()}, ${faker.address.state()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
