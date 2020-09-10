import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { LeafletMouseEvent } from 'leaflet';
import './styles.css';
import petsService from '../../services/petsService';
import LeafletMap from '../../components/LeafletMap';
import statesService from '../../services/ibgeApi/statesService';
import citiesService from '../../services/ibgeApi/citiesService';

const PetCreate: React.FC = () => {
  const [status, setStatus] = useState<string>('adoption');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<number[]>([0, 0]);

  const [states, setStates] = useState<{ acronym: ''; name: '' }[]>();
  const [cities, setCities] = useState<string[]>();
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();

  const ageRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const petNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ageRef.current) {
      ageRef.current.value = '';
    }
  }, []);

  useEffect(() => {
    statesService.index().then((res) => {
      console.log(res.data);
      const filteredStates = res.data.map((estado: { sigla: ''; nome: '' }) => {
        return { name: estado.nome, acronym: estado.sigla };
      });
      setStates(filteredStates);
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

    const selectedStateName = states?.filter(
      (state) => state.acronym === selectedState
    )[0].name;

    const age = ageRef.current?.value;
    const pet_name = petNameRef.current?.value || '';
    const description = descriptionRef.current?.value || '';
    const address = `${selectedCity}, ${selectedStateName}`;

    const data = new FormData();

    data.append('pet[status]', status);
    data.append('pet[pet_name]', pet_name);
    data.append('pet[address]', address);
    data.append('pet[age]', String(age));
    data.append('pet[description]', description);
    data.append('pet[contacts][phone_number]', '+550112121311');

    if (selectedFiles) {
      for (let file of selectedFiles) {
        data.append('pet[pictures][]', file);
      }
    }

    if (status === 'lost') {
      for (const coord of selectedPosition) {
        data.append('pet[last_seen_coords][]', String(coord));
      }
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
      <form onSubmit={handleSubmit} id="pet-create-form">
        <div id="form-wrapper">
          <div id="pet-inputs">
            <h1 className="pet-inputs-title">Dados do pet</h1>
            <div className="pet-input-multiple">
              <div className="input-block">
                <label htmlFor="pet_name">Nome do pet</label>
                <br />
                <input
                  type="text"
                  name="pet_name"
                  maxLength={10}
                  required
                  placeholder="Digite o nome do pet"
                  ref={petNameRef}
                />
              </div>

              <div className="input-block">
                <label htmlFor="age">Idade</label>
                <br />
                <input
                  type="number"
                  name="age"
                  min={0}
                  max={25}
                  placeholder="Digite a idade do pet"
                  required
                  ref={ageRef}
                />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="description">Descrição</label>
              <br />
              <textarea
                rows={3}
                id="description"
                placeholder="Escreva uma descrição sobre o pet ;)"
                required
                ref={descriptionRef}
                maxLength={600}
              />
            </div>

            <div className="pet-input-multiple">
              <div className="input-block">
                <label htmlFor="state">Estado</label>
                <br />
                <select
                  onChange={(e) => setSelectedState(e.target.value)}
                  defaultValue={'DEFAULT'}
                  name="state"
                >
                  <option disabled hidden value={'DEFAULT'}>
                    Escolha o estado
                  </option>
                  {states?.map((state) => (
                    <option value={state.acronym} key={state.acronym}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-block">
                <label htmlFor="city">Cidade</label>
                <br />
                <select
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedState && cities !== null}
                  value={selectedCity}
                  defaultValue={'DEFAULT'}
                  name="city"
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
              <label htmlFor="pictures[]">Fotos do pet</label>
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

export default PetCreate;
