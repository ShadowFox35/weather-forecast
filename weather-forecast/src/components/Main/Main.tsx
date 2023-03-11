import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editForecastArray } from '../../redux/action/citiesArrayOption';
import { useAppSelector } from '../../redux/reducer/rootReducer';
import { forecastArraySelector } from '../../redux/selectots/citiesArrayOption';
import { getDayForecast, getLocation } from '../../services/getWeatherForecast';
import './Main.scss';

import TodayForecast from './TodayForecast/TodayForecast';
import WeekForecast from './WeekForecast/WeekForecast';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useAppSelector(forecastArraySelector);

  const sendLocation = async () => {
    try {
      const result = await getLocation();
      if (result) {
        getFirstForecast(result.city + ' ' + result.country);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isForecastActual()) {
      dispatch(editForecastArray(JSON.parse(localStorage.getItem('citiesForecast') || '[]')));
    } else {
      sendLocation();
    }
  }, []);

  const isForecastActual = () => {
    let forecast = JSON.parse(localStorage.getItem('citiesForecast') || '[]');
    return forecast[0]?.weather[0].date === moment().add(1, 'days').format('YYYY-MM-DD');
  };

  const getFirstForecast = async (request: string) => {
    let list = [...forecastArray];
    try {
      const result = await getDayForecast(request);
      if (result.data.request[0].query) {
        list.push(result.data);
        list[0].weather.shift();
        dispatch(editForecastArray(list));
        localStorage.setItem('citiesForecast', JSON.stringify(list));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main">
      <TodayForecast />
      <WeekForecast />
    </main>
  );
};

export default Main;
