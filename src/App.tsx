import React from 'react';
import DefaultMain from './layout/index';
import './style/main.scss';

function App() {
	return (
		<DefaultMain>
			<main className="page-content">
				<header>
					<h3>React Course</h3>
					<p>
						Dive in and learn React.js from scratch! <br />
						Learn Reactjs, Hooks, Redux, React Routing, <br />
						Animations, Next.js and way more!
					</p>
				</header>
				<div className="course-sections">
					<section>
						<h4>Section 1: Getting Started</h4>
						<p>some course summary and notes</p>
					</section>
					<hr />
					<section>
						<h4>Section 2: </h4>
						<p>some course summary and notes</p>
					</section>
				</div>
			</main>
		</DefaultMain>
	);
}

export default App;
