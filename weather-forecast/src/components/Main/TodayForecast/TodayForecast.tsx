import React from 'react';

import './TodayForecast.scss';

const TodayForecast: React.FC = () => {
  return (
    <section className="today cart">
      <div className="today_main-info">
        <h2 className="city">Main city name</h2>
        <time className="today-date">Today date</time>
        <figure className="today-forecast">
          <img className="today-forecast_icon" src={`${process.env.PUBLIC_URL}/assets/cards/windy.svg`} alt="windy weather" />
          <figcaption className="today-forecast_info">
            <div className="today-weather">Windy</div>
            <div className="today-temp">16C</div>
          </figcaption>
        </figure>
      </div>

      <div className="today_secondary-info">
        <div>Ощущ как</div>
        <div>Сила ветра</div>
        <div>Влажность</div>
        <div>Давление</div>
      </div>
    </section>
  );
};

export default TodayForecast;
