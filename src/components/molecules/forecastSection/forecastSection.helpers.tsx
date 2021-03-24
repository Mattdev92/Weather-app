import axios from 'axios';
import { Weather } from 'components/molecules/forecastSection/forecastSection.types';

export const getWeatherData = ({ setWeather, lon, lat }: Weather): void => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=curently,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}
        `
    )
    .then(({ data }) => {
      setWeather(data);
    })
    .catch((error) => console.log(error));
};
