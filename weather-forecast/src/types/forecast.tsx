export interface forecastElemType {
  current_condition: {
    FeelsLikeC: string;
    humidity: string;
    temp_C: string;
    weatherDesc: { value: string };
    weatherIconUrl: { value: string };
  }[];
  request: {
    query: string;
    type: string;
  }[];
  weather: weatherType[];
}

export interface weatherType {
  date: string;
  avgtempC: string;
  hourly: { weatherDesc: { value: string }[] }[];
}
