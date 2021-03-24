import Nav from 'components/organisms/navigation/nav';
import { Provider } from 'react-redux';
import store from 'store';
import WeatherForecast from 'components/organisms/weatherForecast/weatherForecast';

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
      <WeatherForecast />
    </Provider>
  );
};

export default App;
