import dateFormat from 'dateformat';
import Rating from '../components/Rating';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

function Review({ review }) {
	return (
		<>
			<Row className="review-header">
				<Col className="review-header-col">
					<Rating rating={review.rating} style={{ color: '#fff' }} />
					&nbsp;&nbsp;
					<span>{review.author}</span>&nbsp;&nbsp;
					<small>{dateFormat(review.createdOn, 'paddedShortDate')}</small>
				</Col>
			</Row>
			<Row className="review-body">
				<Col>
					<p>{review.reviewText}</p>
				</Col>
			</Row>
		</>
	);
}

export default Review;
