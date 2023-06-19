import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Navbar.Brand href="#home">Loc8r</Navbar.Brand>
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
					<Nav.Link href="#home">About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;
