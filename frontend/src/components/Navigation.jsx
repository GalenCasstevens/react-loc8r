import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<LinkContainer to="/">
				<Navbar.Brand to="/">Loc8r</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
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
