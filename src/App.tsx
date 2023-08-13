import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { WeatherAppProvider } from './context/context';
import { useWeatherApp } from './hooks/useWeatherApp';

function App() {
  const context = useWeatherApp();

  return (
    <WeatherAppProvider value={context}>
      <Layout />
    </WeatherAppProvider>
  );
}

export default App;
