import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Link } from 'react-router-dom';

const DefaultMain: React.FC = (props) => {
	const menu_1 = [
		`what is react`,
		`why do we use react`,
		`javascript to the rescue`,
		`react vs vanilla javascript`,
		`building single-page-applications (SPA)`,
	];

	const menu_2 = [`soon`];
	return (
		<main>
			<NavBar />
			<article className="main-page">
				<nav className="side-nav">
					<SectionContainer title="Getting Started" links={menu_1} />
					<SectionContainer title="javascript refresher" links={menu_2} />
				</nav>
				<section>{props.children}</section>
			</article>
			<Footer />
		</main>
	);
};

const SectionContainer: React.FC<{ title: string; links: Array<string> }> = ({
	title,
	links,
}) => {
	const content = links.map((link, i) => <SectionLink key={i} path={link} />);

	const toggleMenu = (e: any) => {
		const menuToggle = e.currentTarget;
		menuToggle.classList.toggle('active');
		const section = menuToggle.parentNode;
		const menu = section.children[1];
		menu.classList.toggle('show');
	};

	return (
		<div className="nav-section">
			<button onClick={toggleMenu}>{title}</button>
			<ul>{content}</ul>
		</div>
	);
};

const SectionLink: React.FC<{ path: string }> = ({ path }) => {
	let formatted = path.toLowerCase().split(' ').join('-');

	return (
		<li>
			<Link to={`/${formatted}`} onClick={() => console.log(formatted)}>
				{path}
			</Link>
		</li>
	);
};

export default DefaultMain;
