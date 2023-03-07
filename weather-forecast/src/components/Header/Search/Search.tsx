import React, { useState, useEffect } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';
import { RootState } from '../../../redux/store';
import { forecastElemType } from '../../../types/objects';
import { fetchResult, locationResult } from '../../../services/getWeatherForecast';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useSelector((state: RootState) => state.citiesArrayRedicer.forecastArray);
  const [inputCity, setInputCity] = useState<string>('');

  const getLocation = async () => {
    const result = await locationResult();
    if (result) {
      getForecast(result.city + ' ' + result.country);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getForecast = async (request: string) => {
    let list = [...forecastArray];
    const result = await fetchResult(request);

    if (result.data.request[0].query) {
      list.length === 5 && list.pop();
      if (list.length === 0 || list.findIndex((elem: forecastElemType) => elem.request[0].query.includes(request)) === -1) {
        list.unshift(result.data);
      }
      dispatch(editForecastArray(list));
      dispatch(editActiveForecast(0));
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
