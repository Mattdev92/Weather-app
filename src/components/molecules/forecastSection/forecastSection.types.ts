export interface WeatherData {
  base?: string;
  name?: string;
  coord?: {
    lat: number;
    lon: number;
  };
  main?: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  snow?: {
    '1h': number;
  };
  sys?: {
    country: string;
  };
  weather?: [
    {
      main: string;
      description: string;
    }
  ];
}
export type Weather = {
  setWeather: (weather: WeatherData) => void;
  city: string;
  lon: number;
  lat: number;
};
