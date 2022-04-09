import React from 'react';
import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function ArrowFunctions() {
	const summary = {
		title: 'Arrow Functions',
		notes: [
			`new syntax for javascript functions`,
			`old: function myFunc() {...}`,
			`ES6: const myFunc = () => {...}`,
			`arrow functions solve a lot of issues with the (this) keyword`,
			`when using (this) inside arrow function it will always keep it's context and not change it during runtime`,
		],
	};

	const differentSyntax = {
		title: 'Arrow Functions syntax',
		notes: [
			`const myFunc = () => { console.log('arrow function') }`,
			`const myFunc = x => { console.log(x) }`,
			`const myFunc = (x, y) => { console.log(x, y) }`,
			`const myFunc = (x, y) => { let sum = x + y; return sum }`,
			`only return: const myFunc = (x, y) =>  x + y`,
		],
	};

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title} notes={summary.notes} />
				<SingleTopic
					title={differentSyntax.title}
					notes={differentSyntax.notes}
				/>
			</div>
		</main>
	);
}

export default ArrowFunctions;
