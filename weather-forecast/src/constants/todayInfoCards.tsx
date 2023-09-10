import { todayInfoCardsType } from '../types/todayInfoCards';

export const todayInfoCardsArray: todayInfoCardsType[] = [
  {
    info: 'Feels like',
    value: '°C',
    parameter: 'FeelsLikeC',
    url: 'temperature.svg',
  },

  {
    info: 'Wind',
    value: 'km/h',
    parameter: 'windspeedKmph',
    url: 'wind.svg',
  },

  {
    info: 'Humidity',
    value: '%',
    parameter: 'humidity',
    url: 'humidity.svg',
  },

  {
    info: 'Pressure',
    value: 'mb',
    parameter: 'pressure',
    url: 'pressure.svg',
  },
];
