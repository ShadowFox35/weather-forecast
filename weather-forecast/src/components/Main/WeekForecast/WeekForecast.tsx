import React from 'react';

import './WeekForecast.scss';

import { weekCardArray } from '../../../constants/weekCard';
import { weekCardType } from '../../../types/objects';

const WeekForecast: React.FC = () => {
  return (
    <section className="week ">
      {weekCardArray.map((card: weekCardType, index: number) => (
        <div className="week_main-info cart" key={index}>
          <p className="week-date">{card.day}</p>
          <img className="week-forecast_icon" src={`${process.env.PUBLIC_URL}/assets/cards/${card.img}`} alt="windy weather" />
          <div className="week-temp">{card.temp}</div>
        </div>
      ))}
    </section>
  );
};

export default WeekForecast;
