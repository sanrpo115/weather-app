import { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/search';
import TodayOverview from '../components/TodayOverview';
import { useWeatherApp } from '../hooks/useWeatherApp';

const Layout = () => {

	const { handle: { setLocation} } = useWeatherApp();

	const getLocation = () => {
		if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
				console.log("Geolocation successfully :::>> ", position.coords)
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
	}

	useEffect(() => {
    getLocation();
  }, []);

	return (
		<Container>
			<Row>
				<Col className="" md={8}>
					<Search />
					<TodayOverview />
				</Col>
				<Col className="" md={4}>Sidebar</Col>
			</Row>
		</Container>
	);

} 

export default Layout;