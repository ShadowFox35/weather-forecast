import React, { useState } from 'react';
import './Search.scss';

import search from '../../../assets/icons/search.svg';
import { useDispatch } from 'react-redux/es/exports';
import { editActiveForecast, editForecastArray, getNewForecast, offStatusInvalideName } from '../../../redux/action/citiesArrayOption';
import { forecastElemType } from '../../../types/forecast';
import { getDayForecast } from '../../../services/getWeatherForecast';
import { forecastArraySelector, invalidNameSelector } from '../../../redux/selectots/citiesArrayOption';
import { useAppSelector } from '../../../redux/reducer/rootReducer';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useAppSelector(forecastArraySelector);
  const invalidName = useAppSelector(invalidNameSelector);
  const [inputCity, setInputCity] = useState<string>('');

  const getForecast = async (request: string) => {
    if (
      forecastArray.findIndex((elem: forecastElemType) =>
        elem.request[0].query.toLocaleLowerCase().includes(request.toLocaleLowerCase())
      ) === -1
    ) {
      dispatch(getNewForecast(request, [...forecastArray]));
    }
  };

  const handleAddCity = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      getForecast(inputCity);
    }
  };

  const readInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    invalidName && dispatch(offStatusInvalideName());
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
