import React from 'react';

import './WeekForecast.scss';

import {weatherType } from '../../../types/forecast';
import moment from 'moment';
import { imagesArray } from '../../../constants/weatherImages';
import { activeForecastSelector, forecastArraySelector } from '../../../redux/selectots/citiesArrayOption';
import { useAppSelector } from '../../../redux/reducer/rootReducer';

const WeekForecast: React.FC = () => {
  const forecastArray = useAppSelector(forecastArraySelector);
  const activeForecast = useAppSelector(activeForecastSelector);

  return (
    <section className="week ">
      {forecastArray[activeForecast]?.weather.map((elem: weatherType, index: number) => (
        <div className="week_main-info cart" key={index}>
          <strong className="date">{moment(elem.date).format('ddd')}</strong>
          <img className="icon" src={imagesArray[elem.hourly[4].weatherDesc[0].value] || imagesArray.default} alt="windy weather" />
          <div className="temp">{elem.avgtempC}°C</div>
        </div>
      ))}
    </section>
  );
};

export default WeekForecast;
