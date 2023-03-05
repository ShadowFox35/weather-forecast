import moment from 'moment';
import React from 'react';

import './TodayForecast.scss';

const TodayForecast: React.FC = () => {

  return (
    <section className="today cart">
      <div className="today_main-info">
        <h2 className="city">Main city name</h2>
        <time className="today-date">{moment().format('LLLL')}</time>
        <figure className="today-forecast">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/cards/windy.svg`} alt="windy weather" />
          <figcaption className="info">
            <strong className="today-temp">16C</strong>
            <strong className="today-weather">windy</strong>
          </figcaption>
        </figure>
      </div>

      <div className="today_secondary-info">
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/temperature.svg`} alt="windy weather" />
          <p className="info">Feels like</p>
          <strong className="value">0000 °C</strong>
        </div>
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/wind.svg`} alt="windy weather" />
          <p className="info">Wind</p>
          <strong className="value">00 km/h</strong>
        </div>
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/humidity.svg`} alt="windy weather" />
          <p className="info">Humidity</p>
          <strong className="value">00 %</strong>
        </div>
        <div className="today_secondary-info_item">
          <img className="icon" src={`${process.env.PUBLIC_URL}/assets/weatherOptions/pressure.svg`} alt="windy weather" />
          <p className="info">Pressure</p>
          <strong className="value">0000 mb</strong>
        </div>
      </div>
    </section>
  );
};

export default TodayForecast;
