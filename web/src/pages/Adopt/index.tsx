import React from 'react';
import PetCard from '../../components/PetCard';

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
                'https://bit.ly/3gZDALG',
              ][Math.floor(Math.random() * 3)]
            }
            age={5}
            petName={'Chico'}
            characteristics={[
              'Cute',
              'Lovely',
              'Funny',
              'Beauty',
              'Young',
              'Lorem',
              'Bottle',
              '123',
              'Nothing',
            ]}
            location="Brasil"
          />
        ))}
      </div>
    </div>
  );
};

export default Adopt;
