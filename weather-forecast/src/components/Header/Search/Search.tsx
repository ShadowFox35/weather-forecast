import React, { useState, useEffect } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';
import { RootState } from '../../../redux/store';
import { forecastElemType } from '../../../types/objects';
import { getDayForecast, getLocation } from '../../../services/getWeatherForecast';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useSelector((state: RootState) => state.citiesArrayRedicer.forecastArray);
  const [inputCity, setInputCity] = useState<string>('');

  const sendLocation = async () => {
    const result = await getLocation();
    if (result) {
      getForecast(result.city + ' ' + result.country);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('citiesForecast')) {
      dispatch(editForecastArray(JSON.parse(localStorage.getItem('citiesForecast') || '[]')));
    } else {
      sendLocation();
    }
  }, []);

  const getForecast = async (request: string) => {
    let list = [...forecastArray];
    const result = await getDayForecast(request);

    if (result.data.request[0].query) {
      list.length === 5 && list.pop();
      if (list.length === 0 || list.findIndex((elem: forecastElemType) => elem.request[0].query.includes(request)) === -1) {
        list.unshift(result.data);
      }
      list[0].weather.shift();

      dispatch(editForecastArray(list));
      dispatch(editActiveForecast(0));
      localStorage.setItem('citiesForecast', JSON.stringify(list));
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
