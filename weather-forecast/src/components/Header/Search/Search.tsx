import React, { useState } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { addCity } from '../../../redux/action/citiesArrayOption';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const citiesArray = useSelector((state: any) => state.citiesArrayRedicer.citiesArray);
  const [inputCity, setInputCity] = useState<string>('');

  const enterCity = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      let list = [...citiesArray];
      list.length === 5 && list.pop();
      !citiesArray.includes(inputCity) && list.unshift(inputCity);

      dispatch(addCity(list));
    }
  };

  console.log('citiesArray', citiesArray);

  const readInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value);
  };

  return (
    <section className="search">
      <div className="wrapper">
        <input
          className="search_input"
          placeholder="Search for location"
          autoComplete="off"
          autoFocus
          name="search"
          value={inputCity}
          tabIndex={0}
          onKeyDown={enterCity}
          onChange={readInput}
        />
        <div className="search_icon">
          <img src={search} alt="search icon" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Search;
