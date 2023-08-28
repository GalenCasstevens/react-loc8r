import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Rating from '../components/Rating';
import Review from '../components/Review';
import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import LocationData from '../data/LocationData';
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Details() {
	const { id } = useParams();
	const [location, setLocation] = useState([]);
	const [formVisible, setFormVisible] = useState(false);
	const [formError, setFormError] = useState(false);
	const [locationName, setLocationName] = useState('');

	useEffect(() => {
		setLocation(LocationData.locations.find((loc) => loc._id === id));
	}, []);

	const getAverageRating = (reviews) => {
		return Math.floor(
			reviews.reduce((total, next) => total + next.rating, 0) / reviews.length
		);
	};

	const onChange = (e) => {
		setLocationName(e.target.value);
	};

	const onSubmit = (e) => {
		console.log('Submitting form...');
	};

	if (location && location !== null) {
		return (
			<>
				<Header title={location.name} />
				<Row>
					<Col md={8}>
						<Row>
							<Col md={6}>
								<p className="rating">
									<Rating
										rating={
											location.reviews && getAverageRating(location.reviews)
										}
										style={{ color: '#f7bc65' }}
									/>
								</p>
								<p className="details-address">{location.address}</p>
								<Card className="details-card opening-times">
									<ListGroup>
										<ListGroup.Item>
											<h3 className="card-title">Opening hours</h3>
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
											<h3 className="card-title">Facilities</h3>
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
								<Card className="details-card">
									<h3 className="card-title map-title">Location map</h3>
									<Map />
								</Card>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Card className="details-card customer-reviews">
									<ListGroup>
										<ListGroup.Item>
											<div className="outer-floating-right">
												<div className="inner-floating-right">
													<Button
														className="add-review-btn"
														variant="light"
														onClick={() => setFormVisible(true)}
													>
														Add review
													</Button>
												</div>
											</div>
											<h3 className="card-title">Customer reviews</h3>
										</ListGroup.Item>
										{formVisible && (
											<ListGroup.Item>
												<Form onSubmit={onSubmit}>
													<h5>Add your review</h5>
													{formError && <div>{formError}</div>}
													<Form.Group className="mb-3">
														<Row>
															<Col sm={2}>
																<Form.Label>Name</Form.Label>
															</Col>
															<Col sm={10}>
																<Form.Control
																	type="text"
																	id="locationName"
																	name="locationName"
																	onChange={onChange}
																	value={locationName}
																/>
															</Col>
														</Row>
													</Form.Group>
													<Form.Group className="mb-3">
														<Row>
															<Col sm={2}>
																<Form.Label>Rating</Form.Label>
															</Col>
															<Col sm={10} md={2}>
																<Form.Select>
																	<option value="5">5</option>
																	<option value="4">4</option>
																	<option value="3">3</option>
																	<option value="2">2</option>
																	<option value="1">1</option>
																</Form.Select>
															</Col>
														</Row>
													</Form.Group>
													<Form.Group className="mb-3">
														<Row>
															<Col sm={2}>
																<Form.Label>Review</Form.Label>
															</Col>
															<Col sm={10}>
																<textarea
																	name="review"
																	id="review"
																	rows="5"
																	className="form-control"
																></textarea>
															</Col>
														</Row>
													</Form.Group>
													<Form.Group>
														<Row className="float-end mb-3">
															<Col className="float-end" md={12}>
																<Button id="cancel-review-btn" variant="danger">
																	Cancel
																</Button>
																<Button
																	id="submit-review-btn"
																	type="submit"
																	variant="success"
																>
																	Submit review
																</Button>
															</Col>
														</Row>
													</Form.Group>
												</Form>
											</ListGroup.Item>
										)}
										{location.reviews &&
											location.reviews.map((review) => {
												return (
													<ListGroup.Item>
														<Review review={review} />
													</ListGroup.Item>
												);
											})}
									</ListGroup>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col md={4}>
						<Sidebar location={location} />
					</Col>
				</Row>
			</>
		);
	}

	return <h1>No Data</h1>;
}

export default Details;
