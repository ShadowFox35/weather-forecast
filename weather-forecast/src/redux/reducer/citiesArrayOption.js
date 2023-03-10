const ininialState = {
  forecastArray: [],
  activeForecast: 0,
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
      case 'CHANGE_FORECAST':
        return { ...state, forecastArray: action.value };
        case 'CHANGE_ACTIVE':
        return { ...state, activeForecast: action.value };
    default:
      return state;
  }
}
