const ininialState = {
  citiesArray: [],

  location: '',
  inputCity: '',
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return { ...state, citiesArray: action.value };

    case 'DET_LOC':
      return { ...state, location: action.value };
    default:
      return state;
  }
}
