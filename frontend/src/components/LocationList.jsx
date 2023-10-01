import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocations } from '../features/locations/locationSlice';
import LocationListItem from '../components/LocationListItem';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function LocationList() {
	const { locations } = useSelector((state) => state.locations);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLocations());
		console.log(locations);
	}, [dispatch]);

	if (locations && locations !== null) {
		return (
			<Card className="locations-card">
				<ListGroup>
					{locations.map((location) => (
						<LocationListItem key={location._id} location={location} />
					))}
				</ListGroup>
			</Card>
		);
	}

	return <h1>No Data</h1>;
}

export default LocationList;
