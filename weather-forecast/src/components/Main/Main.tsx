import React from 'react';
import './Main.scss';

import TodayForecast from './TodayForecast/TodayForecast';
import WeekForecast from './WeekForecast/WeekForecast';

const Main: React.FC = () => {
  return (
    <main className="main">
      <TodayForecast />
      <WeekForecast />
    </main>
  );
};

export default Main;
