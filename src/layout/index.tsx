import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

const DefaultMain: React.FC = (props) => {
	const menu_1 = [
		`WHAT IS REACT ?`,
		`WHY DO WE USE REACT ?`,
		`JAVASCRIPT TO THE RESUCE`,
		`REACT VS VANILLA JAVASCRIPT`,
		`BUILDING SINGLE-PAGE-APPLICATIONS (SPA)`,
	];
	return (
		<main>
			<NavBar />
			<article className="main-page">
				<nav className="side-nav">
					<SectionContainer title="Getting Started" links={menu_1} />
					<SectionContainer title="Getting Started" links={menu_1} />
					<SectionContainer title="Getting Started" links={menu_1} />
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
	const content = links.map((link, i) => <li key={i}>{link}</li>);

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

export default DefaultMain;
