import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { LeafletMouseEvent } from 'leaflet';
import './styles.css';
import petsService from '../../services/petsService';
import LeafletMap from '../../components/LeafletMap';
import statesService from '../../services/ibgeApi/statesService';
import citiesService from '../../services/ibgeApi/citiesService';

const CreatePet: React.FC = () => {
  const [status, setStatus] = useState<string>('adoption');
  const [files, setSelectedFiles] = useState<File[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<number[]>([0, 0]);

  const [states, setStates] = useState<string[]>();
  const [cities, setCities] = useState<string[]>();
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();

  const ageRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const lastSeenCoordsRef = useRef<HTMLTextAreaElement>(null);
  const petNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ageRef.current) {
      ageRef.current.value = '1';
    }
  }, []);

  useEffect(() => {
    statesService.index().then((res) => {
      const siglas = res.data.map((estado: { sigla: '' }) => estado.sigla);
      setStates(siglas);
    });
  }, []);

  useEffect(() => {
    if (selectedState) {
      citiesService.index(selectedState).then((res) => {
        const cities = res.data.map((city: { nome: '' }) => city.nome);
        setCities(cities);
      });
    }
  }, [selectedState]);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    const age = ageRef.current?.value;
    const pet_name = petNameRef.current?.value || '';
    const description = descriptionRef.current?.value || '';
    const last_seen_coords = lastSeenCoordsRef.current?.value;
    const address = `${selectedCity}, ${selectedState}`;

    const data = new FormData();

    data.append('pet[status]', status);
    data.append('pet[pet_name]', pet_name);
    data.append('pet[address]', address);
    data.append('pet[age]', String(age));
    data.append('pet[description]', description);
    data.append('pet[contacts][phone_number]', '+550112121311');

    if (files) {
      for (let file of files) {
        data.append('pet[pictures][]', file);
      }
    }

    if (status === 'lost') {
      for (const coord of selectedPosition) {
        data.append('pet[last_seen_coords][]', String(coord));
      }
    }

    if (last_seen_coords) {
      data.append('pet[last_seen_coords]', last_seen_coords);
    }

    petsService.create(data).then((res) => {
      if (res.status === 201) {
        alert('Registro salvo com sucesso');
      }
    });
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div id="form-wrapper">
          <div id="pet-inputs">
            <h1 className="pet-inputs-title">Dados do pet</h1>
            <div className="input-block">
              <label htmlFor="pet_name">Nome do pet</label>
              <br />
              <input type="text" id="pet_name" required ref={petNameRef} />
            </div>

            <div className="input-block">
              <label htmlFor="age">Idade</label>
              <br />
              <input type="number" id="age" min={0} required ref={ageRef} />
            </div>

            <div className="input-block">
              <label htmlFor="description">Descrição</label>
              <br />
              <textarea
                rows={3}
                id="description"
                required
                ref={descriptionRef}
              />
            </div>

            <div className="input-block">
              <label htmlFor="description">Estado</label>
              <br />
              <select
                onChange={(e) => setSelectedState(e.target.value)}
                defaultValue={'DEFAULT'}
              >
                <option disabled hidden value={'DEFAULT'}>
                  Escolha o estado
                </option>
                {states?.map((estado) => (
                  <option value={estado} key={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="description">Cidade</label>
              <br />
              <select
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
                value={selectedCity}
                defaultValue={'DEFAULT'}
              >
                <option disabled hidden value={'DEFAULT'}>
                  Escolha a cidade
                </option>
                {cities?.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-block">
              <p>Selecione o tipo</p>
              <div className="radio-input">
                <label htmlFor="adoption">
                  Adoção
                  <input
                    type="radio"
                    id="adoption"
                    name="status"
                    required
                    onChange={() => setStatus('adoption')}
                    value={status}
                  />
                  <div className="checkmark"></div>
                </label>
              </div>
              <div className="radio-input">
                <label htmlFor="lost">
                  Desaparecido
                  <input
                    type="radio"
                    id="lost"
                    name="status"
                    required
                    onChange={() => setStatus('lost')}
                    value={status}
                  />
                  <div className="checkmark"></div>
                </label>
              </div>
            </div>

            {status === 'lost' && (
              <>
                <div className="input-block fadeIn">
                  <p>Marque o local de ultimo avistamento do pet</p>
                  <LeafletMap
                    mapClicked={handleMapClick}
                    markerPosition={selectedPosition}
                  />
                </div>
              </>
            )}

            <div className="input-block">
              <label htmlFor="pictures">Fotos do pet</label>
              <input
                type="file"
                id="pictures"
                name="pictures[]"
                multiple
                accept="image/*"
                onChange={(evt) => {
                  const selected = evt.target.files;
                  const filteredFiles: File[] = [];

                  if (selected) {
                    for (let c = 0; c < selected.length; c++) {
                      filteredFiles.push(selected[c]);
                    }

                    setSelectedFiles(filteredFiles);
                  }
                }}
              />
            </div>
          </div>
          <div id="btn-submit-wrapper">
            <button type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePet;
