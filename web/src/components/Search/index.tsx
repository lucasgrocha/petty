import React, { FormEvent, useRef } from 'react';

import './styles.css';

import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';
import DropdownItem from './DropdownItem';
import searchService from '../../services/searchService';

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    const searchTerm = inputRef.current?.value || '';
    const filteredNumbers = searchTerm?.match(/\d+/) || [];

    const ageSearch = filteredNumbers[0]?.length === searchTerm?.length;

    const searchType = ageSearch ? 'age' : 'address';

    searchService.search(searchTerm, searchType).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div id="search">
      <form id="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquise por localidade ou idade"
          ref={inputRef}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      <div id="dropdown">
        {[1, 2, 3, 4, 5].map((i) => (
          <DropdownItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
