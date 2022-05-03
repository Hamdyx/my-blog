import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar: React.FC = (props) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<NavLink to="/" className={`navbar-brand`}>
					Hamdyx-Blog
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/about" className="nav-link">
							About
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
