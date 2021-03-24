import axios from 'axios';
import { Weather } from 'components/molecules/firstSection/firstSection.types';
import Cloudy from 'assets/icons/cloudy.png';
import Sunny from 'assets/icons/sunrise.png';
import Rainy from 'assets/icons/rain.png';
import Stormy from 'assets/icons/storm.png';
import Snow from 'assets/icons/snow.png';
import ClearSky from 'assets/icons/clear_sky.png';
import { Icon } from 'components/molecules/firstSection/firstSection.styles';

export const getWeatherData = ({
  weather,
  setWeather,
  city,
}: Weather): void => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}
        `
    )
    .then(({ data }) => {
      setWeather(data);
    })
    .catch((error) => console.log(error));
};

export const kelvinToCelsius = (kelvin: number | undefined): number => {
  if (kelvin === undefined) {
    return 0;
  }
  return Math.round(kelvin - 273);
};

export const chooseWeatherIcon = (description: string | undefined): any => {
  // const icons = [Cloudy, Sunny, Rainy, Stormy];
  if (description === undefined) {
    return 0;
  }
  if (description.includes('cloud')) {
    return <Icon src={Cloudy} alt="img" />;
  }
  if (description.includes('sun')) {
    return <Icon src={Sunny} alt="img" />;
  }
  if (description.includes('rain')) {
    return <Icon src={Rainy} alt="img" />;
  }
  if (description.includes('storm')) {
    return <Icon src={Stormy} alt="img" />;
  }
  if (description.includes('snow')) {
    return <Icon src={Snow} alt="img" />;
  }
  if (description.includes('clear')) {
    return <Icon src={ClearSky} alt="img" />;
  }
};
