export const diving_deeper = {
	'jsx-limitations': [
		{
			title: 'JSX limitations',
			notes: [
				`one of the jsx limitations we already seen that we can't return more than one root JSX element`,
				`also we can't store more than one root JSX element in a variable`,
				`because returning multiple React.createElement(...) isn't valid javascript either`,
				`one way solving it would be wrapping adjacent elements in single element (div, section, article, ...)`,
				`however this solution would lead to multiple unnecessary nested divs, a problem called "<div> soup"`,
				`another work around would be returning multiple elements as a single array, however we would need to set key prop on each element`,
				`both solutions would work fine but not the ideal solution, we are going to discuss better solutions in next sections`,
			],
		},
	],
	'wrapper-component': [
		{
			title: 'wrapper component',
			notes: [
				`we can create a wrapper component that is an empty component only returns props.children`,
				`then we can wrap our adjacent JSX elements inside this wrapper component`,
				`this way we can still render the adjacent elements without any problems as we render them as single variable (props.children)`,
			],
		},
	],
	'react-fragments': [
		{
			title: 'react fragments',
			notes: [
				`now with yet another solution for adjacent elements but a react specific way which is react fragments`,
				`simply we wrap our adjacent elements with <React.Fragment>...</React.Fragment> || <>...</>`,
				`it's an empty wrapper that would work as a single root element for our adjacent JSX elements`,
				`also it doesn't render any unnecessary divs or HTML elements to the DOM, which makes it the ideal solution`,
			],
		},
	],
	'react-portals': [
		{
			title: 'react portals',
			notes: [
				`portals is yet another react feature that helps us writing cleaner code`,
				`imagine having a modal nested in another component, it would work fine with the right styles but it's not semantically correct`,
				`modal for instance is rendered on top of the whole page, so it shouldn't be rendered inside or adjacent to other elements`,
				`if we have nested modals, drawers, or other overlays it will affect the accessibility of our app and makes it harder for screen readers`,
			],
		},
	],
	'working-with-portals': [
		{
			title: 'working with portals',
			notes: [
				`we need to prepare two things first, a place where we want to portal our element, and telling react that a certain element should be portaled`,
				`first we create empty div in our HTML file next to our #root div, give it id #overlay-root`,
				`we need to import ReactDom from 'react-dom`,
				`then we can render our overlay like this: ReactDOM.createPortal(<Modal />, document.getElementById('overlay-root'))`,
			],
		},
	],
	'working-with-refs': [
		{
			title: 'working with refs',
			notes: [
				`references or refs as they are called in react allow us to access other DOM elements and work with them`,
				`with refs we can set a connection betweeen JSX elements and our javascript code`,
				`first we need to import {useRef} from 'react`,
				`just like react hooks, refs an only be used directly inside react components`,
				`const nameRef = useRef(); // at this point nameRef still undefined`,
				`then we need to connect it to one of our JSX elements, we can do that by setting special prop called ref`,
				`<input ... ref={nameRef}/>`,
				`the first time react renders our JSX code, it will attach nameRef to the related DOM element`,
				`we can console that ref and we will see that it's always an object that has current as a property that holds the actual DOM node`,
				`now we can access the value of the element just by accessing nameRef.current.value`,
				`also we can reset it's value like this: nameRef.current.value = ''`,
				`don't overuse refs to manipulate DOM, let react do the heavy lifting, we can use refs for reading values or accessing DOM nodes`,
				`also remember that when using refs instead of state we transformed our element from controlled to uncontrolled component as we don't feed value back to our element`,
			],
		},
	],
};
