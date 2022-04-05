import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = (props) => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">Course 1</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
