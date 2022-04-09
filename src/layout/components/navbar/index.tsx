import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = (props) => {
	const [activePath, setActivePath] = useState(window.location.pathname);
	const pathNames = ['home', 'about'];

	const handleActive = (e: any) => {
		setActivePath(e.currentTarget.pathname);
	};

	return (
		<nav>
			<ul>
				<li>
					<Link
						to="/"
						className={`${activePath === '/' ? 'active' : ''}`}
						onClick={handleActive}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className={`${activePath === '/about' ? 'active' : ''}`}
						onClick={handleActive}
					>
						Course 1
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
