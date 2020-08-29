import React from 'react';

import './styles.css';

const CreatePet: React.FC = () => {
  return (
    <div className="container">
      <form>
        <div id="form-wrapper">
          <div className="input-block">
            <label htmlFor="pet_name">Nome do pet</label>
            <br />
            <input type="text" id="pet_name" required />
          </div>

          <div className="input-block">
            <label htmlFor="age">Idade</label>
            <br />
            <input type="number" id="age" min={0} required />
          </div>

          <div className="input-block">
            <label htmlFor="description">Descrição</label>
            <br />
            <textarea rows={3} id="description" required />
          </div>

          <div className="input-block">
            <p>Selecione o tipo</p>
            <div className="radio-input">
              <label htmlFor="lost">
                Desaparecido
                <input
                  type="radio"
                  id="lost"
                  name="status"
                  value="lost"
                  required
                />
                <div className="checkmark"></div>
              </label>
            </div>
            <div className="radio-input">
              <label htmlFor="adoption">
                Adoção
                <input
                  type="radio"
                  id="adoption"
                  name="status"
                  value="adoption"
                  required
                />
                <div className="checkmark"></div>
              </label>
            </div>
          </div>

          <div className="input-block">
            <label htmlFor="last_seen">Visto por último</label>
            <textarea rows={3} id="last_seen" />
          </div>

          <div className="input-block">
            <label htmlFor="pictures">Fotos do pet</label>
            <input type="file" multiple id="pictures" />
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

//   pet_name: null,
//   description: null,
//   age: null,
//   location: null,
//   status: null,
//   last_seen: null,
//   pictures: [],
