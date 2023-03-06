import React from 'react';
import './Cities.scss';

import remove from '../../../assets/icons/remove.svg';
import { useDispatch, useSelector } from 'react-redux';
import { editActiveForecast, editForecastArray } from '../../../redux/action/citiesArrayOption';

const Cities: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useSelector((state: any) => state.citiesArrayRedicer.forecastArray);

  const deleteCity = (city: string) => {
    if (forecastArray.length > 1) {
      let list = forecastArray.filter((data: any) => data.request[0].query !== city);
      dispatch(editForecastArray(list));
    }
  };

  const chooseCity = (index: any) => {
    dispatch(editActiveForecast(index));
  };

  return (
    <section className="cities">
      {forecastArray.map((data: any, index: number) => (
        <div className="city" key={index}>
          <h2
            className="city_name"
            onClick={() => {
              chooseCity(index);
            }}>
            {data.request[0].query}{' '}
          </h2>
          <img
            className="city_remove-icon"
            src={remove}
            alt="remove icon"
            onClick={() => {
              deleteCity(data.request[0].query);
            }}></img>
        </div>
      ))}
    </section>
  );
};

export default Cities;
