import React, { useCallback } from 'react';
import './Cities.scss';

import { useDispatch } from 'react-redux';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';

import removeIcon from '../../../assets/icons/remove.svg';
import { forecastElemType } from '../../../types/forecast';
import clsx from 'clsx';
import { activeForecastSelector, forecastArraySelector } from '../../../redux/selectots/citiesArrayOption';
import { useAppSelector } from '../../../redux/reducer/rootReducer';

const Cities: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useAppSelector(forecastArraySelector);
  const activeForecast = useAppSelector(activeForecastSelector);

  const normalizeCity = useCallback(
    (data: forecastElemType) => {
      return data.request[0].query.split(' ')[0].replace(',', '');
    },
    [activeForecast]
  );

  const deleteCity = (city: string, index: number) => {
    if (forecastArray.length > 1) {
      let list = forecastArray.filter((data: forecastElemType) => data.request[0].query !== city);
      dispatch(editForecastArray(list, activeForecast));

      if (activeForecast === forecastArray.length - 1) {
        console.log('if activeForecast', activeForecast);
        const newIndex = activeForecast - 1;
        dispatch(editActiveForecast(newIndex));
      }
    }
  };

  console.log('activeForecast', activeForecast);

  const chooseCity = (index: number) => {
    console.log('chooseCity activeForecast', activeForecast);
    dispatch(editActiveForecast(index));
  };

  return (
    <section className="cities">
      {forecastArray.map((data: forecastElemType, index: number) => (
        <div
          className={clsx('city', { active: index === activeForecast })}
          key={index}
          onClick={() => {
            chooseCity(index);
          }}>
          <h2 className="city_name">{normalizeCity(data) || ''} </h2>
          <img
            className={clsx('city_remove-icon', { disable: forecastArray.length === 1 })}
            src={removeIcon}
            alt="remove icon"
            onClick={(event: any) => {
              event.preventDefault();
              event.stopPropagation();
              deleteCity(data.request[0].query, index);
            }}></img>
        </div>
      ))}
    </section>
  );
};

export default Cities;
