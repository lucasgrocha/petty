import React, { useState, useEffect } from 'react';

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
        .catch((_) => {
          navigate('/adopt');
        });
    }
  }, [id, petData, navigate]);

  return (
    <div className="container">
      <h1>{petData?.id}</h1>
      <h1>{petData?.pet_name}</h1>
      <h1>{petData.contacts.whatsapp}</h1>
    </div>
  );
};

export default Pets;
