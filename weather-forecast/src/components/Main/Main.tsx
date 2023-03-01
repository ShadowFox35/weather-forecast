import React from 'react';
import './Main.scss';

import windy from '../../assets/carts/windy.svg';

const Main: React.FC = () => {
  return (
    <main className="main">
      <section className="today cart">
        <div className="today_main-info">
          <h2 className="city">Main city name</h2>
          <time className="today-date">Today date</time>
          <figure className="today-forecast">
            <img className="today-forecast_icon" src={windy} alt="windy weather" />
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
      <section className="week ">
        <div className="week_main-info cart">
          <p className="week-date">вт</p>
          <img className="week-forecast_icon" src={windy} alt="windy weather" />
          <div className="week-temp">19C</div>
        </div>
        <div className="week_main-info cart">
          <p className="week-date">вт</p>
          <img className="week-forecast_icon" src={windy} alt="windy weather" />
          <div className="week-temp">19C</div>
        </div>
      </section>
    </main>
  );
};

export default Main;
