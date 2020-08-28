import React, { useEffect, useState } from 'react';
import PetCard, { Pet as PetInterface } from '../../components/PetCard';
import petsService from '../../services/petsService';

const Adopt: React.FC = () => {
  const [pets, setPets] = useState<PetInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    petsService.index('adoption', page).then((res) => {
      setPets((prevPets) => [...prevPets, ...res.data]);
      document.getElementsByTagName('html')[0].scrollTop = scrollPosition;

      if (res.data.length === 0) {
        setLastPage(true);
      }
    });
  }, [page, scrollPosition]);

  const handlePageChange = () => {
    setScrollPosition(retrieveCurrentScrollPosition());
    setPage((prevPage) => prevPage + 1);
  };

  function retrieveCurrentScrollPosition() {
    return document.getElementsByTagName('html')[0].scrollTop;
  }

  return (
    <div className="container">
      <div id="adopt-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pets?.map((pet) => (
          <PetCard key={pet.id} petData={pet} />
        ))}
      </div>

      <button disabled={lastPage} type="button" onClick={handlePageChange}>
        Load more
      </button>
    </div>
  );
};

export default Adopt;
