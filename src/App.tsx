import React from 'react';
import DefaultMain from './layout/index';
import CourseSection from './layout/components/courses';
import FigureGroup from './layout/components/figures';
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
					<CourseSection title="Section 1: Getting Started" />
					<hr />
					<FigureGroup />
					<hr />
				</div>
			</main>
		</DefaultMain>
	);
}

export default App;
