import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/Search';
import TodayOverview from '../components/TodayOverview';
import { useWeatherApp } from '../hooks/useWeatherApp';
import { WeatherAppProvider } from '../context/context';

const Layout = () => {

	// useEffect(() => {
	// 	if (location.latitude === 0) {
	// 		getLocation();
	// 	}
  // }, [location]);

	return (
		<Container>	
					<Row>
						<Col className="" md={8}>
							<Search />
							{/* https://github.com/vercel/next.js/issues/42292 */}
							{/* 
							@ts-expect-error Server Component 
							ds
							*/}
							<TodayOverview />
						</Col>
						<Col className="" md={4}>Sidebar</Col>
					</Row>
		</Container>
	);

} 

export default Layout;