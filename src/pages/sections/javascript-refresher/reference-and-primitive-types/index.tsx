import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function ReferenceAndPrimitiveTypes() {
	const summary = {
		title: 'Primitive types',
		notes: [
			`primitives: whenever you reassign or store a value in another variables it copies the value`,
			`primitive types: numbers, strings, booleans`,
			`const number = 1;`,
			`const num2 = number;`,
			`console.log(num2); // 1`,
		],
	};

	const summary2 = {
		title: 'Reference types',
		notes: [
			`reference: whenever you reassign or store a value in another variables it copies the pointer not the actual value`,
			`primitive types: arrays and objects`,
			`const person = { name: 'max' };`,
			`const anotherPerson = person;`,
			`person.name = 'john'`,
			`console.log(anotherPerson.name); // john`,
			`const animal = { name: 'cat' };`,
			`const anotherAnimal = { ...animal };`,
			`animal.name = 'dog'`,
			`console.log(anotherAnimal.name); // cat`,
		],
	};

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title} notes={summary.notes} />
				<SingleTopic title={summary2.title} notes={summary2.notes} />
			</div>
		</main>
	);
}

export default ReferenceAndPrimitiveTypes;
