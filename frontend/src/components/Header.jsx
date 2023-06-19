import React from 'react';

function Header(props) {
	return (
		<div className="row banner">
			<div className="col-12">
				<h1>
					{props.title}&nbsp;
					<small className="banner-strapline">{props.strapline}</small>
				</h1>
			</div>
		</div>
	);
}

export default Header;
