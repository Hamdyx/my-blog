import React from 'react';

const CourseSection: React.FC<{ title: string }> = ({ children, title }) => {
	const notes1 = [
		'react is a javascript library for buiding modern user interfaces',
		'declarative, component-focused approach',
	];

	const notes2 = [
		`mobile apps and desktop apps feels very reactive: things happen
		instantly, you don't wait for new pages to load or actions to
		start`,
		`traditionally, in web apps, you click a link and wait for a new
		page to load, you click a button and wait for some action to
		complete`,
		`users send HTML requests to the server and wait for a response for
		each action or transaction between pages`,
	];

	const notes3 = [
		`javascript runs in the browser on the loading page, and made it
		possible to execute logic in the browser`,
		`you can manipulate the HTML structure (DOM) of the page with
		javascript`,
		`no (visible) requests to the server required, no need to wait for
		a new HTML page as a response`,
	];

	const notes4 = [
		`with vanilla js we follow imperative approach which we write every
		action and we create each element. Every signle step needs to be
		described`,
		`using the imperative approach we have to take care of the details
		of every step wasting time doing repetitive tasks, in other words
		reinventing the wheel`,
		`react is all about splitting applications into small building
		blocks and reusable components where every component has clear
		task`,
		`react helps making your code more maintainable, also react does
		the heavy lifting of rendering and combining the code`,
	];

	const notes5 = [
		`react can be used to control parts of HTML pages or entire pages`,
		`widget approach on a multi-page-application. (some) pages are
		still rendered on and served by a backend server`,
		`react can also be used to control the entire frontend of a web
		application`,
		`single-page-application (SPA) approach. Server only sends one HTML
		page, thereafter, react takes over and controls the UI`,
		`with react we dont request second HTML page, instead we use
		javascript to change the content of the page which leads to
		smoother UI and better user experience`,
	];

	return (
		<section>
			<h4>{title}</h4>
			<p>some course summary and notes</p>
			<dl>
				<ul className="section-notes">
					<CourseTopic title="What is React ?" notes={notes1} />
					<CourseTopic title="Why do we use React ?" notes={notes2} />
					<CourseTopic title="Javascript to the resuce" notes={notes3} />
					<CourseTopic title="React vs vanilla javascript" notes={notes4} />
					<CourseTopic
						title="building single-page-applications (SPA)"
						notes={notes5}
					/>
				</ul>
			</dl>
		</section>
	);
};

const CourseTopic: React.FC<{ title: string; notes: Array<string> }> = ({
	children,
	title,
	notes,
}) => {
	return (
		<li>
			<dt>{title}</dt>
			<TopicDetails notes={notes} />
		</li>
	);
};

const TopicDetails: React.FC<{ notes: Array<string> }> = ({
	children,
	notes,
}) => {
	const content = notes.map((el, i) => <dd key={i}>{el}</dd>);

	return <>{content}</>;
};

export default CourseSection;
