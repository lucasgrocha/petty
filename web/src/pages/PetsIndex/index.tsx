import React, { useEffect, useState } from 'react';
import PetCard, { Pet as PetInterface } from '../../components/PetCard';
import petsService from '../../services/petsService';

const PetsIndex: React.FC = () => {
  const [pets, setPets] = useState<PetInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const query = new URLSearchParams(window.location.search);
  const status = query.get('status') || 'adoption';

  useEffect(() => {
    petsService
      .index(status, page)
      .then((res) => {
        setPets((prevPets) => [...prevPets, ...res.data]);
        document.getElementsByTagName('html')[0].scrollTop = scrollPosition;

        if (res.data.length === 0) {
          setLastPage(true);
        }
      })
      .catch(() => {
        window.location.href = '/pets?status=adoption';
      });
  }, [page, scrollPosition, status]);

  const handlePageChange = () => {
    setScrollPosition(retrieveCurrentScrollPosition());
    setPage((prevPage) => prevPage + 1);
  };

  function retrieveCurrentScrollPosition() {
    return document.getElementsByTagName('html')[0].scrollTop;
  }

  if (pets.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <div id="adopt-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pets.map((pet) => (
          <PetCard key={pet.id} petData={pet} />
        ))}
      </div>

      <button disabled={lastPage} type="button" onClick={handlePageChange}>
        Load more
      </button>
    </div>
  );
};

export default PetsIndex;
