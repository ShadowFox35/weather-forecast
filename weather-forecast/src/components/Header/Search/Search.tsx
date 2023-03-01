import React from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';

const Search: React.FC = () => {
  return (
    <section className="search">
      <div className="wrapper">
        <input className="search_input" placeholder="Search for location" autoComplete="off" autoFocus name="search" value={''} />
        <div className="search_icon">
          <img src={search} alt="search icon" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Search;
