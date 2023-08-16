import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
	return (
		<Row className="banner">
			<Col>
				<h1>
					{props.title}&nbsp;
					<small className="banner-strapline">{props.strapline}</small>
				</h1>
			</Col>
		</Row>
	);
}

export default Header;
