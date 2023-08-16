import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

function Map() {
	const defaultProps = {
		center: {
			lat: 34.976398,
			lng: -81.028328,
		},
		zoom: 11,
	};

	return (
		<>
			<div style={{ height: '50vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.REACT_APP_API_KEY,
					}}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<Marker lat={34.976398} lng={-81.028328} />
				</GoogleMapReact>
			</div>
		</>
	);
}

export default Map;
