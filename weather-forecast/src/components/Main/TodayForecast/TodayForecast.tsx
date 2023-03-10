import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

import './TodayForecast.scss';

import { RootState } from '../../../redux/store';
import { imagesArray } from '../../../constants/weatherImages';
import { activeForecastSelector, forecastArraySelector } from '../../../redux/selectots/citiesArrayOption';
import { useAppSelector } from '../../../redux/reducer/rootReducer';


const TodayForecast: React.FC = () => {
  const forecastArray = useAppSelector(forecastArraySelector);
  const activeForecast = useAppSelector(activeForecastSelector);

  return (
    <section className="today cart">
      <div className="today_main-info">
        <h2 className="city">{forecastArray[activeForecast]?.request[0].query || ''} </h2>
        <time className="today-date">{moment().format('LLLL')}</time>
        <figure className="today-forecast">
          <img
            className="icon"
            src={imagesArray[forecastArray[activeForecast]?.current_condition[0].weatherDesc[0].value] || imagesArray.default}
            alt="weather"
          />
          <figcaption className="info">
            <strong className="today-temp">{forecastArray[activeForecast]?.current_condition[0].temp_C || ''}°C</strong>
            <strong className="today-weather">{forecastArray[activeForecast]?.current_condition[0].weatherDesc[0].value || ''}</strong>
          </figcaption>
        </figure>
      </div>

      <div className="today_secondary-info">
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/temperature.svg`} alt="weather" />
          <p className="info">Feels like</p>
          <strong className="value">{forecastArray[activeForecast]?.current_condition[0].FeelsLikeC || ''}°C</strong>
        </div>

        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/wind.svg`} alt="weather" />
          <p className="info">Wind</p>
          <strong className="value">{forecastArray[activeForecast]?.current_condition[0].windspeedKmph || ''}km/h </strong>
        </div>
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/humidity.svg`} alt="weather" />
          <p className="info">Humidity</p>
          <strong className="value">{forecastArray[activeForecast]?.current_condition[0].humidity || ''}%</strong>
        </div>
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/pressure.svg`} alt="weather" />
          <p className="info">Pressure</p>
          <strong className="value">{forecastArray[activeForecast]?.current_condition[0].pressure || ''} mb</strong>
        </div>
      </div>
    </section>
  );
};

export default TodayForecast;
