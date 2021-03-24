import { Container } from 'components/organisms/weatherForecast/weatherForecast.styles';
import FirstSection from 'components/molecules/firstSection/firstSection';
import ForecastSection from 'components/molecules/forecastSection/forecastSection';

const WeatherForecast = (): JSX.Element => {
  return (
    <>
      <Container>
        <FirstSection />
      </Container>
      <Container>
        <ForecastSection />
      </Container>
    </>
  );
};
export default WeatherForecast;
