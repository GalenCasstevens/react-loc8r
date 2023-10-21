import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation } from '../features/locations/locationSlice';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Marker = () => <FontAwesomeIcon icon={faMapPin} />;

function Map() {
	const { location } = useSelector((state) => state.locations);
	const { locationId } = useParams();
	const [lng, setLng] = useState(-81.028328);
	const [lat, setLat] = useState(34.97988);
	const defaultProps = {
		center: {
			lng: -81.028328,
			lat: 34.97988,
		},
		zoom: 11,
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLocation(locationId));
		setLng(location?.coords?.coordinates[0]);
		setLat(location?.coords?.coordinates[1]);
	}, [dispatch, locationId]);

	return (
		<>
			<div style={{ height: '25vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.REACT_APP_API_KEY,
					}}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<Marker lng={lng} lat={lat} />
				</GoogleMapReact>
			</div>
		</>
	);
}

export default Map;
