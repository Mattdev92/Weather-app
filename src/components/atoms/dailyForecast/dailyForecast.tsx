// import { useState, useEffect } from 'react';
import { SearchBarReducer } from 'components/molecules/firstSection/firstSection.types';
import { connect, ConnectedProps } from 'react-redux';
import { Container } from 'components/atoms/dailyForecast/dailyForecast.styles';
import { kelvinToCelsius } from 'components/molecules/firstSection/firstSection.helpers';
import { OwnProps } from 'components/atoms/dailyForecast/dailyForecast.types';
import { chooseWeatherIcon } from 'components/molecules/firstSection/firstSection.helpers';
const DailyForecast = (props: PropsFromRedux): JSX.Element => {
  const { day, details } = props;
  const temp: number | string =
    details === undefined ||
    details.temp === undefined ||
    details.temp.day === undefined
      ? 'loading'
      : kelvinToCelsius(details.temp?.day);
  const weatherDescription: string | undefined =
    details === undefined || details.weather === undefined
      ? 'Loading'
      : details.weather[0].description;
  return (
    <Container>
      <h1>{day}</h1>
      <span>
        {temp}
        <sup>o</sup>C
      </span>

      {weatherDescription}
      {chooseWeatherIcon(weatherDescription, false)}
    </Container>
  );
};
const mapStateToProps = (
  { searchBarReducer }: SearchBarReducer,
  ownProps: OwnProps
) => {
  const { day, details } = ownProps;
  const { city } = searchBarReducer;
  return { city, day, details };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(DailyForecast);
