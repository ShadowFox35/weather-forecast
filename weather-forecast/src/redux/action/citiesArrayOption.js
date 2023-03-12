import { AnyAction } from 'redux';
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

export const getCurrentLocation = (): AnyAction => {
  return (dispatch) => {
    //не трогать
    dispatch(request()); //не трогать

    getLocation().then(
      //поменять
      (weather) => {
        //не трогать

        dispatch(success(weather)); //не трогать
      },
      (error) => {
        //не трогать
        dispatch(failure(error)); //не трогать
      }
    );
  };

  function request() {
    //не трогать
    return { type: 'FORECAST_REQUEST' }; //поменять
  }
  function success(city) {
    //не трогать
    return { type: 'GET_CURRENT_CITY_SUCCESS', city }; //поменять
  }
  function failure(error) {
    //не трогать
    return { type: 'GET_CURRENT_CITY_FAILURE', error }; //поменять
  }
};

export const getNewForecast = (reqCity, forecastArray): AnyAction => {
  return (dispatch) => {
    //не трогать
    dispatch(request());

    getDayForecast(reqCity).then(
      (weather) => {
        //не трогать
        dispatch(success(weather)); //не трогать
      },
      (error) => {
        //не трогать
        dispatch(failure(error)); //не трогать
      }
    );
  };

  function request() {
    //не трогать
    return { type: 'FORECAST_REQUEST' }; //поменять
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
    //поменять
  }
  function failure(error) {
    //не трогать

    return { type: 'GET_FORECAST_FAILURE', error }; //поменять
  }
};
