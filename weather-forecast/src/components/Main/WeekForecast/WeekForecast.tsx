import React from 'react';

import './WeekForecast.scss';

import { weatherWeekElemType } from '../../../types/objects';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import moment from 'moment';
import { imagesArray } from '../../../constants/weatherImages';

const WeekForecast: React.FC = () => {
  const forecastArray = useSelector((state: RootState) => state.citiesArrayRedicer.forecastArray);
  const activeForecast = useSelector((state: RootState) => state.citiesArrayRedicer.activeForecast);

  console.log('111', forecastArray[activeForecast]?.weather);

  return (
    <section className="week ">
      {forecastArray[activeForecast]?.weather.map((elem: weatherWeekElemType, index: number) => (
        <div className="week_main-info cart" key={index}>
          <p className="date">{moment(elem.date).format('ddd')}</p>
          <img className="icon" src={imagesArray[elem.hourly[4].weatherDesc[0].value] || imagesArray.default} alt="windy weather" />
          <div className="temp">{elem.avgtempC}°C</div>
        </div>
      ))}
    </section>
  );
};

export default WeekForecast;
