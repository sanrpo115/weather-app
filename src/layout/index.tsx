import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/Search';
import TodayOverview from '../components/TodayOverview';
import SideBar from '../components/Sidebar';
import { useWeatherApp } from '../hooks/useWeatherApp';
import { WeatherAppContext, WeatherAppProvider } from '../context/context';

const Layout = () => {

	const { getLocation, location } = useContext(WeatherAppContext);

	useEffect(() => {
		if (location.latitude === 0) {
			getLocation();
		}
  }, [location]);

	return (
		<Container>	
			<Row>
				<Col className="" md={8}>
					<Search />
					<TodayOverview />
				</Col>
				<Col className="side" md={4}>
					<SideBar />
				</Col>
			</Row>
		</Container>
	);

} 

export default Layout;