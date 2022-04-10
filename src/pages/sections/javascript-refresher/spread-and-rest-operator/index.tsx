import LandingHeader from '../../../landing/LandingHeader';
import SingleTopic from '../../singleTopic';

function SpreadAndRestOperator() {
	const summary = {
		title: 'Spread and Rest operator',
		notes: [
			`Spread: used to split up array element or object properties`,
			`const newArray = [...oldArray, 1, 2];`,
			`const newObject = {...oldObject, newProp: 5}`,
			`Rest: used to merge list of function arguments into an array`,
			`function sortArgs(...args) { return args.sort() }`,
			`const filterParams = (...params) => { return params.filter() }`,
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

export default SpreadAndRestOperator;
