import React, { useState } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useDispatch } from 'react-redux/es/exports';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';
import { forecastElemType } from '../../../types/forecast';
import { getDayForecast } from '../../../services/getWeatherForecast';
import { forecastArraySelector } from '../../../redux/selectots/citiesArrayOption';
import { useAppSelector } from '../../../redux/reducer/rootReducer';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useAppSelector(forecastArraySelector);
  const [inputCity, setInputCity] = useState<string>('');

  const getForecast = async (request: string) => {
    if (
      forecastArray.findIndex((elem: forecastElemType) =>
        elem.request[0].query.toLocaleLowerCase().includes(request.toLocaleLowerCase())
      ) === -1
    ) {
      let list = [...forecastArray];

      try {
        const result = await getDayForecast(request);
        if (result.data.request[0].query) {
          list.length === 5 && list.pop();
          list.unshift(result.data);
          list[0].weather.shift();
          dispatch(editForecastArray(list));
          dispatch(editActiveForecast(0));
          localStorage.setItem('citiesForecast', JSON.stringify(list));
        }
      } catch (error) {
        console.log(error);
      }
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
