import { Details } from 'components/atoms/dailyForecast/dailyForecast.types';

export interface WeatherData {
  daily?: Details[];
}
export type FirstSectionReducer = {
  firstSectionReducer: {
    coord: {
      lat: number;
      lon: number;
    };
    forecast?: boolean;
  };
};
export type Weather = {
  setDetails: (details: WeatherData) => void;
  lon: number;
  lat: number;
  current?: boolean;
};
