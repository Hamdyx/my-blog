import React from 'react';
import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function UnderstandingClasses() {
	const summary = {
		title: 'Understanding Classes',
		notes: [
			`classes are essentially blueprints for objects`,
			`classes can have properties and methods`,
			`property is variable attached to class`,
			`method is simply function attached to class`,
			`classes can inherit properties and methods from other classes`,
			`if you are extending another class (inheritance) and using the constructor, you need to add super() in the constructor`,
			`super simply executes the parent class constructor which is needed to correctly initialize the parent class`,
			`classes are used in react as one way of creating components`,
		],
	};

	const differentSyntax = {
		title: 'Classes syntax',
		notes: [
			`class Person { name = 'Max', call = () => {...} }`,
			`const myPerson = new Person();`,
			`myPerson.call();`,
			`console.log(myPerson.name);`,
			`class Person extends Master`,
			`ES6 property: constructor() { this.myProperty = 'value' }`,
			`ES7 property: myProperty = 'value'`,
			`ES6 method: myMethod() { ... }`,
			`ES7 method: myMethod = () => { ... }`,
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

export default UnderstandingClasses;
