import React from 'react';

import './styles.css';

import { SearchAlt2 as SearchIcon } from '@styled-icons/boxicons-regular';
import DropdownItem from './DropdownItem';

const Search: React.FC = () => {
  return (
    <div id="search">
      <form id="search-box">
        <input type="text" />
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
