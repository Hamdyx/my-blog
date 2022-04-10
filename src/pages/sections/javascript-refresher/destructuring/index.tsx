import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function Destructuring() {
	const summary = {
		title: 'Destructuring',
		notes: [
			`destructuring: easily extract array element or object properties and store them in variables`,
			`array destructuring: [a, b] = [1, 2, 3]`,
			`console.log(a, b) // 1, 2`,
			`[a,  ,b] = [1, 2, 3]`,
			`console.log(a, b) // 1, 3`,
			`object destructuring: { name } = { name: 'React', age: 28}`,
			`console.log(name) // React`,
			`consoe.log(age) // undefined`,
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

export default Destructuring;
