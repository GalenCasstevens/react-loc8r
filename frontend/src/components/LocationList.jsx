import React from 'react';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import LocationData from '../data/LocationData';
import LocationListItem from '../components/LocationListItem';

function LocationList() {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		setLocations(LocationData.locations);
	}, []);

	if (locations && locations !== null) {
		return (
			<div className="card">
				{locations.map((location) => (
					<LocationListItem location={location} />
				))}
			</div>
		);
	}

	return <h1>No Data</h1>;
}

export default LocationList;
