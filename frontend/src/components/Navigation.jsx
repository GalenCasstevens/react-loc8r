import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<LinkContainer to="/">
				<Navbar.Brand to="/">Loc8r</Navbar.Brand>
			</LinkContainer>
			<button
				type="button"
				data-toggle="collapse"
				data-target="#navbarMain"
				className="navbar-toggler"
			>
				<div className="menu-icon"></div>
				<div className="menu-icon"></div>
				<div className="menu-icon"></div>
			</button>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<LinkContainer to="/about">
						<Nav.Link href="#home">About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
