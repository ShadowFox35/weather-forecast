import React from 'react';
import './Cities.scss';

import { useDispatch, useSelector } from 'react-redux';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';
import { RootState } from '../../../redux/store';

import removeIcon from '../../../assets/icons/remove.svg';
import { forecastElemType } from '../../../types/objects';
import clsx from 'clsx';

const Cities: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useSelector((state: RootState) => state.citiesArrayRedicer.forecastArray);
  const activeForecast = useSelector((state: RootState) => state.citiesArrayRedicer.activeForecast);

  const normalizeCity = (data: forecastElemType) => data.request[0].query.split(' ')[0].replace(',', '');

  const deleteCity = (city: string, index: number) => {
    if (forecastArray.length > 1) {
      let list = forecastArray.filter((data: forecastElemType) => data.request[0].query !== city);
      dispatch(editForecastArray(list));
      localStorage.setItem('citiesForecast', JSON.stringify(list));

      if (activeForecast !== 0 && index <= activeForecast) {
        dispatch(editActiveForecast(activeForecast - 1));
      }
    }
  };

  const chooseCity = (index: number) => {
    dispatch(editActiveForecast(index));
  };

  return (
    <section className="cities">
      {forecastArray.map((data: forecastElemType, index: number) => (
        <div className={clsx('city', { active: index === activeForecast })} key={index}>
          <h2
            className="city_name"
            onClick={() => {
              chooseCity(index);
            }}>
            {normalizeCity(data) || ''}{' '}
          </h2>
          <img
            className={clsx('city_remove-icon', { disable: forecastArray.length === 1 })}
            src={removeIcon}
            alt="remove icon"
            onClick={() => {
              deleteCity(data.request[0].query, index);
            }}></img>
        </div>
      ))}
    </section>
  );
};

export default Cities;
