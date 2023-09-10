const ininialState = {
  forecastArray: [],
  activeForecast: 0,
  loader: false,
  currentCity: null,
  invalidName: false,
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
    case 'FORECAST_REQUEST':
      return { ...state, loader: true };
    case 'GET_CURRENT_CITY_SUCCESS':
      return { ...state, currentCity: action.city };
    case 'CHANGE_INVALID_NAME':
      return { ...state, invalidName: action.status, loader: false };
    case 'CHANGE_FORECAST':
      return { ...state, forecastArray: action.city, loader: false, activeForecast: action.index || 0 };
    case 'CHANGE_ACTIVE':
      return { ...state, activeForecast: action.value };
    default:
      return state;
  }
}
