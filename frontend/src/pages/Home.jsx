import Header from '../components/Header';
import LocationList from '../components/LocationList';

function Home() {
	return (
		<>
			<Header
				title="Loc8r"
				strapline="Find places to work with wifi near you!"
			/>
			<LocationList />
		</>
	);
}

export default Home;
