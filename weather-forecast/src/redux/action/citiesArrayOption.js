export function addCity(city) {
  return {
    type: 'ADD_CITY',
    value: city,
  };
}

export function determineLocation(loc) {
  return {
    type: 'DET_LOC',
    value: loc,
  };
}
