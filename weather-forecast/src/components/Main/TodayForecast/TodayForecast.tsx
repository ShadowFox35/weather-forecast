import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editActiveForecast } from '../../../redux/action/citiesArrayOption';

import './TodayForecast.scss';

import cloudy from '../../../assets/cards/cloudy.svg';
import snowy from '../../../assets/cards/snowy.svg';
import sunny from '../../../assets/cards/sunny.svg';
import rainy from '../../../assets/cards/rainy.svg';

const TodayForecast: React.FC = () => {
  const forecastArray = useSelector((state: any) => state.citiesArrayRedicer.forecastArray);
  const activeForecast = useSelector((state: any) => state.citiesArrayRedicer.activeForecast);
  const [weatherImg, setWeatherImg] = useState<string>('');

  const getImg = () => {
    switch (forecastArray[activeForecast]?.current_condition[0].weatherDesc[0].value) {
      case 'Light Snow':
      case 'Light Snow Shower, Mist':
        setWeatherImg(snowy);
        break;
      case 'Overcast':
      case 'Partly cloudy':
        setWeatherImg(cloudy);
        break;
      case 'Light Rain':
        setWeatherImg(rainy);
        break;
      case 'Clear':
      case 'Sunny':
        setWeatherImg(sunny);
        break;
      default:
        setWeatherImg('');
    }
  };

  console.log(activeForecast);

  useEffect(() => {
    getImg();
  }, [forecastArray]);

  return (
    <section className="today cart">
      <div className="today_main-info">
        <h2 className="city">{forecastArray[activeForecast]?.request[0].query || ''} </h2>
        <time className="today-date">{moment().format('LLLL')}</time>
        <figure className="today-forecast">
          <img className="icon" src={weatherImg} alt="weather" />
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
          <strong className="value">{forecastArray[activeForecast]?.current_condition[0].FeelsLikeC || ''}°C </strong>
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
