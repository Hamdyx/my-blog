import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar: React.FC = (props) => {
	const [activePath, setActivePath] = useState(window.location.pathname);

	const handleActive = (e: any) => {
		setActivePath(e.currentTarget.pathname);
	};

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Link to="/" className={`navbar-brand`}>
					Hamdyx-Blog
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link
							to="/"
							className={`${activePath === '/' ? 'active' : ''} nav-link`}
							onClick={handleActive}
						>
							Home
						</Link>
						<Link
							to="/about"
							className={`${activePath === '/about' ? 'active' : ''} nav-link`}
							onClick={handleActive}
						>
							About
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
