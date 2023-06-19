import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Rating from '../components/Rating';

function LocationListItem({ location }) {
	return (
		<>
			<div className="card-block">
				<h4>
					<Link to={`locations/${location._id}`}>{location.name}</Link>
					<Rating rating={location.rating} />
					<Badge pill className="float-end">
						5m
					</Badge>
				</h4>
				<p className="address">{location.address}</p>
				<div className="facilities">
					{location.facilities.map((facility) => {
						return <Badge bg="danger">{facility}</Badge>;
					})}
				</div>
			</div>
		</>
	);
}

export default LocationListItem;
