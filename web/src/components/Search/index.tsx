import React from 'react';

import './styles.css';

import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';

const Search: React.FC = () => {
  return (
    <form id="search-box">
      <input type="text" />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
