import { useState, useEffect } from 'react';
import { SearchBarReducer } from 'components/molecules/firstSection/firstSection.types';
import {
  Container,
  CityTitle,
  TempTitle,
  DescriptionTitle,
  InnerContainer,
} from 'components/molecules/firstSection/firstSection.styles';
import { WeatherData } from 'components/molecules/firstSection/firstSection.types';
import { connect, ConnectedProps } from 'react-redux';
import {
  getWeatherData,
  kelvinToCelsius,
  chooseWeatherIcon,
} from 'components/molecules/firstSection/firstSection.helpers';
require('dotenv').config();

const FirstSection = (props: PropsFromRedux): JSX.Element => {
  const { city } = props;
  console.log(city);
  const [weather, setWeather]: [
    WeatherData,
    (weather: WeatherData) => void
  ] = useState({});
  const weatherData = { weather, setWeather, city };
  const temp = kelvinToCelsius(weather.main?.temp);
  const weatherDescription =
    weather.weather === undefined ? 'Loading' : weather.weather[0].description;
  useEffect((): void => {
    getWeatherData(weatherData);
  }, [city]);
  return (
    <Container>
      <InnerContainer>
        <CityTitle>{weather.name}</CityTitle>
        <TempTitle>
          {temp}
          <sup>o</sup>
        </TempTitle>
        <DescriptionTitle>{weatherDescription}</DescriptionTitle>
        {chooseWeatherIcon(weatherDescription)}
      </InnerContainer>
    </Container>
  );
};
const mapStateToProps = ({ searchBarReducer }: SearchBarReducer) => {
  const { city } = searchBarReducer;
  return { city };
};

const connector = connect(mapStateToProps);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FirstSection);
