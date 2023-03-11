export function editForecastArray(obj) {
  return {
    type: 'CHANGE_FORECAST',
    value: obj,
  };
}

export function editActiveForecast(num) {
  return {
    type: 'CHANGE_ACTIVE',
    value: num,
  };
}
