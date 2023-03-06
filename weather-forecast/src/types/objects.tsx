export interface weekCardType {
  day: string;
  img: string;
  temp: string;
}

export interface forecastElemType {
  current_condition: currentConditionType;
  request: requestType;
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
