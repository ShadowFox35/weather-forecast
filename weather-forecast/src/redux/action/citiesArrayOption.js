import { getDayForecast, getLocation } from '../../services/getWeatherForecast';

export function editForecastArray(obj, activeForecast) {
  return {
    type: 'CHANGE_FORECAST',
    city: obj,
    index: activeForecast,
  };
}
export function offStatusInvalideName() {
  return {
    type: 'CHANGE_INVALID_NAME',
    status: false,
  };
}
export function editActiveForecast(value) {
  return {
    type: 'CHANGE_ACTIVE',
    value,
  };
}

export const getCurrentLocation = () => {
  return (dispatch) => {

    dispatch(request());

    getLocation().then(
      (weather) => {
        dispatch(success(weather));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: 'FORECAST_REQUEST' };
  }
  function success(city) {
    return { type: 'GET_CURRENT_CITY_SUCCESS', city };
  }
  function failure(error) {
    return { type: 'GET_CURRENT_CITY_FAILURE', error };
  }
};

export const getNewForecast = (reqCity, forecastArray) => {
  return (dispatch) => {
    dispatch(request());

    getDayForecast(reqCity).then(
      (weather) => {
        dispatch(success(weather));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: 'FORECAST_REQUEST' };
  }
  function success(city) {
    if (!city?.data?.error) {
      forecastArray.length === 5 && forecastArray.pop();
      forecastArray.unshift(city.data);

      forecastArray[0].weather.shift();
      return { type: 'CHANGE_FORECAST', city: [...forecastArray] };
    } else {
      return { type: 'CHANGE_INVALID_NAME', status: true };
    }
  }
  function failure(error) {

    return { type: 'GET_FORECAST_FAILURE', error };
  }
};
