export const tmp = `
151: 

152: as we know ReactJs is a javascript library for building user interfaces
    react itself doesn't care about valid html code, however reactDom what cares about valid html and jsx code
    one of the core elements in React is component,
    the core concepts of components are: props(data from parent component), state(internal data) and context(component-wide data)
    components are the main elements that communicate with the real dom to display UI to the user
    react determines how the component tree looks like and how it should look like
    ReactDom recieves the differences and then manipulate the real dom
    re-evaluatin components !== re-rendring the dom
    changes to the real dom are only made for differences between evaluations
    working witht the real dom directly might cause the page to be slower 
    however working with state and context happens in memory so the real dom only changes when needed
    virtual dom diffing: react compares code between prev and current evaluation, and only updates what's needed without re-rendering the whole code

153: react components get re-rendered whenever state, context or props => (all evaluates to state) changes
    that lead to the whole component being re-executed, however react would know if it's the initial rendering or a re-evaluation

154: a change in the state in the parent component would cause the parent to reevaluate (re-execute the component fn) 
    and if there is a child that has a prop drom this state, the props would get changed aswell so the child will be re-evaluated
    even if the child props didn't change, but the parent has a state updat, it will trigger a child re-evaluation as the child component is part of
    the parent return body
    re-evaluating components !== re-rendering the dom
    components get re-evaluated whenever state, props or context changes. however changes to the real dom only made differences between evaluations
    as a summary, a parent component re-evauation would ead to re-evaluation (re-execution) for all child components

155: we can use a build in react feature that will only re-evaluate the components when the props values changes
    we can wrap our components in the export statement between React.memo(Comp);
    this would compare the props and only re-execute the component when props value changes
    so if the parent component re-evaluated but the prop for the children didn't change, the re-execution for this child will be skipped
    keep in mind that this comes at a cost of performance, we are trading the performance of re-execution the component with the performance cost
    of storing and comparing the props values. so it depends on the component and if whether it's worth it
    React.memo() comes very handy when we want to skip unnecessary re-execution of components trees of nested children
    be careful when using React.memo() with functions, objects or arrays as props, as comparing reference values would never evaluate to true

156: we can use a react hook (useCallback) to store a function that we already know it will never change, so we can use it with React.memo() 
    without worrying about reference values.
    useCallback is like useEffect it takes 2 arguments, first: the fn we want to store, second an array of dependencies 
    that our useCallback would be re-executed if one of the dependencies changes.
    we just need to wrap our fn in the useCallback hook with any dependencies that might change our fn if available

157: javascript functions have closure, which means they have access to any variables defined inside the fn and the outer fn.
    so if we have a state variable and we have our fn inside the useCallback() using this state variable; 
    for every fn execution we would have the state value at the time of assignment and not the latest value
    to solve this issue we need to add this state variable into the useCallback() array of dependencies
    this way whenever the state changes, useCallback() would know that it need to update the fn aswell

158: **sumary**

159: useState will create a state variable and attach it to the component that it's called inside, and react will handle state management under the hood
    react behind the scenes handles whether there is a state update or it's the initial state assignment so that we dont lose our state value

160: as we know react doesn't update the state instantly. instead it schedule the update. as there might be some tasks running in the background
    that has higher priority than state update. reacting to user input for example;
    however if we have multiple state updates. react will make ure the order stays as it was scheduled
    because of the scheduled updates, its recommended to use the function form to update the state as its guarantees we have the latest snapshot of the state
    (prevState) => updatedState
    if we have multiple state updates inside after each other (inside the same synchronization block) without any time delaying code
    react would then batch these updates as one state update, so the components wont re-evaluate twice but ony once

161: yet with another react hook and that is useMemo(); it helps us storing some process we did and it doesn't need to be executed again
    useMemo() works just like useCallback() and useEffect(), so it needs array of dependencies and it will be executed again if any of them changes
    however if we passed array as props to the useMemo, it would re-execute again as the array is a referene variable so it would never equals the same arr
    we can optimize that by storing the array inside the useMemo() aswell

162: 

`;
