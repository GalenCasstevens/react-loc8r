import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function LocationListItem({ location }) {
	return (
		<ListGroup.Item>
			<h4>
				<Link className="list-name" to={`locations/${location._id}`}>
					{location.name}
				</Link>
				&nbsp;
				<Rating
					className="list-rating"
					rating={location.rating}
					style={{ color: '#aaa' }}
				/>
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
		</ListGroup.Item>
	);
}

export default LocationListItem;
