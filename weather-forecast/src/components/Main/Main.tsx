import moment from 'moment';
import React, { useEffect } from 'react';
import { editForecastArray, getCurrentLocation, getNewForecast } from '../../redux/action/citiesArrayOption';
import { useAppDispatch, useAppSelector } from '../../redux/reducer/rootReducer';
import { currentCitySelector, forecastArraySelector, invalidNameSelector, loaderSelector } from '../../redux/selectots/citiesArrayOption';
import './Main.scss';

import TodayForecast from './TodayForecast/TodayForecast';
import WeekForecast from './WeekForecast/WeekForecast';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const forecastArray = useAppSelector(forecastArraySelector);
  const currentCity = useAppSelector(currentCitySelector);
  const loader = useAppSelector(loaderSelector);
  const invalidName = useAppSelector(invalidNameSelector);

  useEffect(() => {
    if (currentCity && !forecastArray.length) {
      dispatch(getNewForecast(currentCity?.city + ' ' + currentCity?.country, [...forecastArray]));
    }
  }, [currentCity]);

  useEffect(() => {
    if (forecastArray.length) {
      localStorage.setItem('citiesForecast', JSON.stringify(forecastArray));
    }
  }, [forecastArray]);

  useEffect(() => {
    if (isForecastActual()) {
      dispatch(editForecastArray(JSON.parse(localStorage.getItem('citiesForecast') || '[]')));
    } else {
      dispatch(getCurrentLocation());
    }
  }, []);

  const isForecastActual = () => {
    let forecast = JSON.parse(localStorage.getItem('citiesForecast') || '[]');
    return forecast[0]?.weather[0]?.date === moment().add(1, 'days').format('YYYY-MM-DD');
  };

  return (
    <main className="main">
      {loader ? (
        <div className="cart loading">LOADING...</div>
      ) : (
        <>
          {' '}
          {invalidName && <p className='invalid'>Unable to find any matching weather location to the query submitted</p>}
          <TodayForecast />
          <WeekForecast />
        </>
      )}
    </main>
  );
};

export default Main;
