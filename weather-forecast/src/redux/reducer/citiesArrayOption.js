const ininialState = {
  citiesArray: [],
};

export default function citiesArrayRedicer(state = ininialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return { ...state, citiesArray: action.value };
    default:
      return state;
  }
}
