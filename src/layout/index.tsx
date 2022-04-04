import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';

const DefaultMain: React.FC = (props) => {
	return (
		<main>
			<NavBar />
			{props.children}
			<Footer />
		</main>
	);
};
export default DefaultMain;
