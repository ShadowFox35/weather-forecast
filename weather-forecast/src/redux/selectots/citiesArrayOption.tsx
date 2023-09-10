import { RootState } from "../store";

export const forecastArraySelector = (state: RootState) =>  state.citiesArrayRedicer.forecastArray;
export const activeForecastSelector = (state: RootState) =>  state.citiesArrayRedicer.activeForecast;
export const currentCitySelector = (state: RootState) =>  state.citiesArrayRedicer.currentCity;
export const loaderSelector = (state: RootState) =>  state.citiesArrayRedicer.loader;
export const invalidNameSelector = (state: RootState) =>  state.citiesArrayRedicer.invalidName;