import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function ArrayFunctions() {
	const summary = {
		title: 'Array functions',
		notes: [
			`array functions: built in methods that can run different operations on array elements`,
			`const numbers = [1, 2, 3];`,
			`const doubledNumArr = numbers.map(n => n * 2);`,
			`console.log(numbers); // [1, 2, 3]`,
			`console.log(doubleNumArr); // [2, 4, 6]`,
		],
	};

	return (
		<main className="page-content">
			<LandingHeader />
			<div className="course-sections">
				<SingleTopic title={summary.title} notes={summary.notes} />
			</div>
		</main>
	);
}

export default ArrayFunctions;
