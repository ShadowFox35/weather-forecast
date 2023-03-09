export interface forecastElemType {
  current_condition: currentConditionType;
  request: requestType;
  weather: weatherElemType;
}

export interface currentConditionType {
  0: currentConditionFirstElemType;
}

export interface currentConditionFirstElemType {
  FeelsLikeC: string;
  humidity: string;
  temp_C: string;
  weatherDesc: weatherDescType;
  weatherIconUrl: weatherIconUrlType;
}

export interface weatherDescType {
  value: string;
}

export interface weatherIconUrlType {
  value: string;
}

export interface requestType {
  0: requestFirstElemType;
}

export interface requestFirstElemType {
  query: string;
  type: string;
}

export interface weatherElemType {
  0: weatherWeekElemType;
  1: weatherWeekElemType;
  2: weatherWeekElemType;
  3: weatherWeekElemType;
  4: weatherWeekElemType;
  5: weatherWeekElemType;
}

export interface weatherWeekElemType {
  date: string;
  avgtempC: string;
  hourly: hourlyElemType;
}
export interface hourlyElemType {
  4: hourlyAverageElemType;
}

export interface hourlyAverageElemType {
  weatherDesc: weatherDescThirdElemType;
}

export interface weatherDescThirdElemType {
  0: weatherDescType;
}
