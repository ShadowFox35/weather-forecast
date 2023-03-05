import React, { useState, useEffect } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { addCity } from '../../../redux/action/citiesArrayOption';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const citiesArray = useSelector((state: any) => state.citiesArrayRedicer.citiesArray);

  const [inputCity, setInputCity] = useState<string>('');

  const API_KEY = 'b69290eb7d314300a97120031232802';

  const getLocation = async () => {
    const result = await fetch(`https://ipinfo.io/json?token=0e45e46a363d54`).then((response) => {
      return response.json();
    });
    if (result) {
      getForecast(result.city + ' ' + result.country);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getForecast = async (request: string) => {
    let list = [...citiesArray];
    const result = await fetch(
      `http://api.worldweatheronline.com/premium/v1/weather.ashx?q=${request}&num_of_days=1&key=${API_KEY}&format=json`
    ).then((response) => {
      return response.json();
    });

    if (result.data.request[0].query) {
      console.log(result.data);
      console.log(result.data.request[0].query);
      list.length === 5 && list.pop();
      !citiesArray.includes(result.data.request[0].query) && list.unshift(result.data.request[0].query);
      dispatch(addCity(list));
    }
  };

  const handleAddCity = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      getForecast(inputCity);
    }
  };

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
          onKeyDown={handleAddCity}
          onChange={readInput}
        />
        <div className="search_icon">
          <img
            src={search}
            alt="search icon"
            className="icon"
            onClick={() => {
              getForecast(inputCity);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
