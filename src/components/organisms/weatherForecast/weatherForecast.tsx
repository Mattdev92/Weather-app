import { Container } from 'components/organisms/weatherForecast/weatherForecast.styles';
import FirstSection from 'components/molecules/firstSection/firstSection';
import ForecastSection from 'components/molecules/forecastSection/forecastSection';
import { connect, ConnectedProps } from 'react-redux';
import { FirstSectionReducer } from 'components/molecules/forecastSection/forecastSection.types';

const WeatherForecast = (props: PropsFromRedux): JSX.Element => {
  const { forecast } = props;
  return (
    <>
      <Container>
        <FirstSection />
      </Container>
      {forecast && (
        <Container>
          <ForecastSection />
        </Container>
      )}
    </>
  );
};
const mapStateToProps = ({ firstSectionReducer }: FirstSectionReducer) => {
  const { forecast } = firstSectionReducer;
  return { forecast };
};
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(WeatherForecast);
