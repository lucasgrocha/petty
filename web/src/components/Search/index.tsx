import React, { FormEvent, useRef, useState } from 'react';

import './styles.css';

import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';
import DropdownItem from './DropdownItem';
import searchService from '../../services/searchService';
import spinner from '../../assets/images/icons/spinner.gif';

interface SearchedPet {
  id: number;
  pet_name: string;
  age: number;
  address: string;
  status: number;
  picture_url: string;
}

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searching, setSearching] = useState(false);

  const [searchedPets, setSearchedPets] = useState<SearchedPet[]>([]);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    const searchTerm = inputRef.current?.value || '';
    const filteredNumbers = searchTerm?.match(/\d+/) || [];

    const ageSearch = filteredNumbers[0]?.length === searchTerm?.length;

    const searchType = ageSearch ? 'age' : 'address';

    if (searchTerm.length === 0) {
      return;
    }

    setSearching(true);

    searchService.search(searchTerm, searchType).then((res) => {
      setSearchedPets(res.data);
      setSearching(false);
    });
  }

  return (
    <div id="search">
      <form id="search-box" onSubmit={handleSubmit}>
        <div id="search-input">
          <div id="search-icon">
            {searching ? <img src={spinner} alt="spinner" /> : <SearchIcon />}
          </div>
          <input
            type="text"
            placeholder="Pesquise por localidade ou idade"
            ref={inputRef}
            required
          />
        </div>
      </form>

      {searchedPets.length > 0 && (
        <div id="dropdown">
          {searchedPets.map((pet, index) => (
            <DropdownItem
              key={index}
              petName={pet.pet_name}
              age={pet.age}
              address={pet.address}
              pictureURL={pet.picture_url}
              id={pet.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
