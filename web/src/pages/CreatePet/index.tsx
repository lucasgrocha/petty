import React, { useState, FormEvent } from 'react';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './styles.css';
import petsService from '../../services/petsService';

const CreatePet: React.FC = () => {
  const [status, setStatus] = useState<string>('adoption');
  const [pet_name, setPetName] = useState<string>('Jucinei');
  const [description, setDescription] = useState<string>('Blablabla');
  const [last_seen, setLastSeen] = useState<string>();
  const [age, setAge] = useState<number>(1);
  // const [location, setLocation] = useState<string>();
  const [files, setSelectedFiles] = useState<File[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<number[]>([0, 0]);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    const data = new FormData();

    data.append('pet[status]', status);
    data.append('pet[pet_name]', pet_name);
    data.append('pet[age]', String(age));
    data.append('pet[description]', description);
    data.append('pet[contacts][phone_number]', '+550112121311');
    if (files) {
      for (let file of files) {
        data.append('pet[pictures][]', file);
      }
    }

    if (last_seen) {
      data.append('pet[last_seen]', last_seen);
    }

    petsService.create(data).then((res) => {
      if (res.status === 201) {
        alert('Registro salvo com sucesso');
      }
    });
  }

  const position: LatLngTuple = [-22.8920565, -47.2079804];

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div id="form-wrapper">
          <div className="input-block">
            <label htmlFor="pet_name">Nome do pet</label>
            <br />
            <input
              type="text"
              id="pet_name"
              required
              value={pet_name}
              onChange={(evt) => setPetName(evt.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="age">Idade</label>
            <br />
            <input
              type="number"
              id="age"
              min={0}
              required
              value={age}
              onChange={(evt) => setAge(Number(evt.target.value))}
            />
          </div>

          <div className="input-block">
            <label htmlFor="description">Descrição</label>
            <br />
            <textarea
              rows={3}
              id="description"
              required
              value={description}
              onChange={(evt) => setDescription(evt.target.value)}
            />
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
                <label htmlFor="last_seen">Visto por último</label>
                <textarea
                  rows={3}
                  id="last_seen"
                  required
                  value={last_seen}
                  onChange={(evt) => setLastSeen(evt.target.value)}
                />
              </div>

              <div className="input-block">
                <p>Marque o local de ultimo avistamento do pet</p>
                <Map
                  center={position}
                  zoom={17}
                  id="map"
                  onClick={handleMapClick}
                >
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker position={selectedPosition as LatLngTuple} />
                </Map>
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
          <div id="btn-submit-wrapper">
            <button type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePet;
