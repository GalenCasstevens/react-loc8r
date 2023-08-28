import React from 'react';

function Sidebar({ location }) {
	return (
		<>
			<p>
				{location.name} is on Loc8r because it has accessible wifi and space to
				sit down with your laptop and get some work done.
			</p>
			<p>
				If you've been here and you like it - or if you don't - please leave a
				review to help other people just like you.
			</p>
		</>
	);
}

export default Sidebar;
