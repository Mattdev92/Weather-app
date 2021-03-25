import DailyForecast from 'components/atoms/dailyForecast/dailyForecast';
import { Container } from 'components/molecules/forecastSection/forecastSection.styles';
import { FirstSectionReducer } from 'components/molecules/forecastSection/forecastSection.types';
import { connect, ConnectedProps } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  getDatailWeather,
  makeNextDayList,
} from 'components/molecules/forecastSection/forecastSection.helpers';
import {
  WeatherData,
  Weather,
} from 'components/molecules/forecastSection/forecastSection.types';

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
const nextSevenDays = makeNextDayList(day, week);
console.log(nextSevenDays);
const ForecastSection = (props: PropsFromRedux): JSX.Element => {
  const [details, setDetails]: [
    WeatherData,
    (details: WeatherData) => void
  ] = useState({});
  const {
    coord: { lat, lon },
  } = props;
  const detailData: Weather = { setDetails, lon, lat };
  useEffect(() => {
    getDatailWeather(detailData);
  }, [detailData.lon, detailData.lat]);
  return (
    <Container>
      {nextSevenDays.map((item, i) => (
        <DailyForecast
          day={item}
          key={item}
          details={details.daily === undefined ? undefined : details.daily[i]}
        />
      ))}
    </Container>
  );
};
const mapStateToProps = ({ firstSectionReducer }: FirstSectionReducer) => {
  const { coord } = firstSectionReducer;
  return { coord };
};
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ForecastSection);
