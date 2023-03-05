const ininialState = {
  forecastArray: [],
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
      case 'ADD_FORECAST':
        return { ...state, forecastArray: action.value };
    default:
      return state;
  }
}
