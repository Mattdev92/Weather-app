import { useState, useEffect } from 'react';
import { SearchBarReducer } from 'components/molecules/firstSection/firstSection.types';
import {
  Container,
  CityTitle,
  TempTitle,
  DescriptionTitle,
  InnerContainer,
  Button,
} from 'components/molecules/firstSection/firstSection.styles';
import {
  WeatherData,
  ActualCoord,
} from 'components/molecules/firstSection/firstSection.types';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { setCoord, showForecast } from 'actions/firstSection-action';
import {
  getWeatherData,
  kelvinToCelsius,
  chooseWeatherIcon,
} from 'components/molecules/firstSection/firstSection.helpers';
require('dotenv').config();
let date = new Date();
let day = date.getDay();
const week = [
  'Monday',
  'Thusday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const FirstSection = (props: PropsFromRedux): JSX.Element => {
  const { city, setCoord, showForecast } = props;
  const [weather, setWeather]: [
    WeatherData,
    (weather: WeatherData) => void
  ] = useState({});
  const weatherData: {
    weather: WeatherData;
    setWeather: (weather: WeatherData) => void;
    city: string;
  } = { weather, setWeather, city };
  const temp: number = kelvinToCelsius(weather.main?.temp);
  const weatherDescription: string =
    weather.weather === undefined ? 'Loading' : weather.weather[0].description;
  const actualCoord: ActualCoord = {
    lat: weather.coord === undefined ? 52.2298 : weather.coord.lat,
    lon: weather.coord === undefined ? 21.0118 : weather.coord.lon,
  };
  setTimeout(() => setCoord(actualCoord), 1000);
  useEffect((): void => {
    getWeatherData(weatherData);
  }, [city]);
  return (
    <Container>
      <InnerContainer>
        <h1>{week[day - 1]}</h1>
        <CityTitle>{weather.name}</CityTitle>
        <TempTitle>
          {temp}
          <sup>o</sup>
        </TempTitle>
        <DescriptionTitle>{weatherDescription}</DescriptionTitle>
        {chooseWeatherIcon(weatherDescription, true)}
        <Button
          onClick={() => {
            setCoord(actualCoord);
            showForecast();
          }}
        >
          Show forecast for next 7 days
        </Button>
      </InnerContainer>
    </Container>
  );
};
const mapStateToProps = ({ searchBarReducer }: SearchBarReducer) => {
  const { city } = searchBarReducer;
  return { city };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCoord: (coord: ActualCoord) => dispatch(setCoord(coord)),
  showForecast: () => dispatch(showForecast()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FirstSection);
