import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editActiveForecast, editForecastArray } from '../../redux/action/citiesArrayOption';
import { RootState } from '../../redux/store';
import { getDayForecast, getLocation } from '../../services/getWeatherForecast';
import { forecastElemType } from '../../types/objects';
import './Main.scss';

import TodayForecast from './TodayForecast/TodayForecast';
import WeekForecast from './WeekForecast/WeekForecast';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const forecastArray = useSelector((state: RootState) => state.citiesArrayRedicer.forecastArray);

  const sendLocation = async () => {
    const result = await getLocation();
    if (result) {
      getFirstForecast(result.city + ' ' + result.country);
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
    const result = await getDayForecast(request);

    if (result.data.request[0].query) {
      list.push(result.data);
      list[0].weather.shift();
      dispatch(editForecastArray(list));
      localStorage.setItem('citiesForecast', JSON.stringify(list));
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
