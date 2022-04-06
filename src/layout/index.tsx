import React from 'react';
import NavBar from './components/navbar';
import SideNav from './components/navbar/SideNav';
import Footer from './components/footer';

const DefaultMain: React.FC = (props) => {
	return (
		<main>
			<NavBar />
			<article className="main-page">
				<SideNav />
				<section>{props.children}</section>
			</article>
			<Footer />
		</main>
	);
};
export default DefaultMain;
