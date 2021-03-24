import DailyForecast from 'components/atoms/dailyForecast/dailyForecast';
import { Container } from 'components/molecules/forecastSection/forecastSection.styles';

const week = [
  'Monday',
  'Thusday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const ForecastSection = (): JSX.Element => {
  return (
    <Container>
      {week.map((item) => (
        <DailyForecast day={item} />
      ))}
    </Container>
  );
};
export default ForecastSection;
