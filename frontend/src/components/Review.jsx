import dateFormat, { masks } from 'dateformat';
import Rating from '../components/Rating';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

function Review({ review }) {
	return (
		<>
			<Row className="review-header">
				<Col className="no-gutters">
					<Rating rating={review.rating} style={{ color: '#fff' }} />
					&nbsp;&nbsp;
					<span>{review.author}</span>&nbsp;&nbsp;
					<small>{dateFormat(review.createdOn, 'paddedShortDate')}</small>
				</Col>
			</Row>
		</>
	);
}

export default Review;
