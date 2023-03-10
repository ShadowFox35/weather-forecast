import { RootState } from "../store";

export const forecastArraySelector = (state: RootState) =>  state.citiesArrayRedicer.forecastArray;
export const activeForecastSelector = (state: RootState) =>  state.citiesArrayRedicer.activeForecast;
