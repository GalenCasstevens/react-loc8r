import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Rating from '../components/Rating';
import Map from '../components/Map';
import LocationData from '../data/LocationData';
import Badge from 'react-bootstrap/esm/Badge';

function Details() {
	const { id } = useParams();
	const [location, setLocation] = useState([]);

	useEffect(() => {
		setLocation(LocationData.locations.find((loc) => loc._id === id));
	}, []);

	if (location && location !== null) {
		return (
			<>
				<Header title={location.name} />
				<Row>
					<Col md={6}>
						<p className="rating">
							<Rating rating={location.rating} style={{ color: '#f7bc65' }} />
						</p>
						<p className="details-address">{location.address}</p>
						<Card className="details-card opening-times">
							<ListGroup>
								<ListGroup.Item>
									<h5 className="card-title">Opening hours</h5>
								</ListGroup.Item>
								{location.openingTimes &&
									location.openingTimes.length > 0 &&
									location.openingTimes.map((time) => (
										<ListGroup.Item>
											<p className="card-content">
												{time.days} :&nbsp;
												{!time.closed && (
													<span>
														{time.opening} - {time.closing}
													</span>
												)}
												{time.closed && <span>Closed</span>}
											</p>
										</ListGroup.Item>
									))}
							</ListGroup>
						</Card>
						<Card className="details-card facilities">
							<ListGroup>
								<ListGroup.Item>
									<h5 className="card-title">Facilities</h5>
									<div className="card-content">
										{location.facilities &&
											location.facilities.length > 0 &&
											location.facilities.map((facility) => (
												<Badge bg="warning">{facility}</Badge>
											))}
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
					<Col md={6} className="location-map">
						<Card>
							<h5 className="card-title">Location map</h5>
							<Map />
						</Card>
					</Col>
				</Row>
			</>
		);
	}

	return <h1>No Data</h1>;
}

export default Details;
