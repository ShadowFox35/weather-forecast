const ininialState = {
  forecastArray: [],
  activeForecast:[],
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
      case 'ADD_FORECAST':
        return { ...state, forecastArray: action.value };
        case 'ADD_ACTIVE':
        return { ...state, activeForecast: action.value };
    default:
      return state;
  }
}
