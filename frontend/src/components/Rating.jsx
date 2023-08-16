import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Rating({ rating, style }) {
	return (
		<span style={style}>
			{rating < 1 ? (
				<FontAwesomeIcon icon={farStar} />
			) : (
				<FontAwesomeIcon icon={fasStar} />
			)}
			{rating < 2 ? (
				<FontAwesomeIcon icon={farStar} />
			) : (
				<FontAwesomeIcon icon={fasStar} />
			)}
			{rating < 3 ? (
				<FontAwesomeIcon icon={farStar} />
			) : (
				<FontAwesomeIcon icon={fasStar} />
			)}
			{rating < 4 ? (
				<FontAwesomeIcon icon={farStar} />
			) : (
				<FontAwesomeIcon icon={fasStar} />
			)}
			{rating < 5 ? (
				<FontAwesomeIcon icon={farStar} />
			) : (
				<FontAwesomeIcon icon={fasStar} />
			)}
		</span>
	);
}

export default Rating;
