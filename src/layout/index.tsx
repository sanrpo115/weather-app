import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/Search';
import TodayOverview from '../components/TodayOverview';
import { useWeatherApp } from '../hooks/useWeatherApp';

const Layout = () => {

	const { handle: { getLocation }, value: { location } } = useWeatherApp();

	useEffect(() => {
    getLocation();
  }, []);

	return (
		<Container>
			{location.latitude !== 0 && 
				<Row>
					<Col className="" md={8}>
						<Search />
						{/* https://github.com/vercel/next.js/issues/42292 */}
						{/* @ts-expect-error Server Component */}
						<TodayOverview />
					</Col>
					<Col className="" md={4}>Sidebar</Col>
				</Row>
			}
		</Container>
	);

} 

export default Layout;