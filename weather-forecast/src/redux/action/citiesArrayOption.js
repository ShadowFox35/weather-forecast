export function editForecastArray(obj) {
  return {
    type: 'ADD_FORECAST',
    value: obj,
  };
}


export function editActiveForecast(num) {
  return {
    type: 'ADD_ACTIVE',
    value: num,
  };
}
