export const tmp = `
109
110: react main job is to render UI and react to user input
    evaluate and render jsx, manage state & props, react to user input and events
    re-evaluate components upon state changes
effect or side effect:  side effects can be anything else such as storing data in browser or sending http requests to backend servers
these side effects tasks must happen outside of the component evaluation and render cycle as they might block or elay rendering
handling sideEffects with useEffect(() => {...}, [dependencies])
useEffect first arg: a func that is executed after every component evaluation if the specified dependencies changed
useEffect second arg: array of dependencies that the func will only execute if they changed

111: once we refresh our app, all our variables and state will be resetted to it's default value
    so if we have a state indicating that a user is  logged in, if the app got refreshed we would lose that state
    one way solving that would be saving the state to the localStorage and then checks for that value in the localStorage then we set the state accordingly
    however we would end up having an infinite loop as the state would cause a component reevaluation that would set the state again and so on
    we can use the useEffect hook here, as it woul only run once and only if the the specfied dependencies got changed

112: if we used useEffect hook without dependencies or empty dependencies array, it would only be executed on the component init render
    having an empty array of dependencies or no dependencies at all means that there is nothing changing so no reevaluation would be triggered    
if we have a variable that we want our component to reevaluate if it changes, we should add it to the dependencies array
having one or multiple dependencies would trigger the useEffect func to be executed if one of the dependencies value changes
    
113: 

114: using useEffect clean up function : at the end of the useEffect function we add return statement
    the function inside the return would run before each execution of the useEffect function but not the first execution

115: useEffect summary: for dep: no dep means will run at every render - empty array means run once at initial rendering, 
    array of dep means will run only when one of the dependencies value change
    cleanup fun will run before each useEffect fn execution

116: if we have multiple state that might depend on each other or have complex structure, we can use "useRefucer" instead of useState
    useReducer can be used as a replacement for useState when having more complex state
    if we're updating state that depends on another state we should use useReducer

117: const [state, dispatchFn] = useReducer(reducerFn, initState, initFn)
    state => the state snapshot that is used in rendering and reevaluation of componnts
    dispatchFn => a fn can be used to dispatch new actions that should update the state
    reducerFn => (prevState, action) => newState, a fn the is triggered when the dispatchFn is used, it recieves the latest state and returns the updated state
    initState => the initial state
    initFn => a function can be used to set the initial state if we have a complex structure or the initial state dpeneds on http request

    inside our reducerFn we switch the action type and depending on that we return the updated state
118: useReducer() usage

119: adding nested properties as dep to useEffect

120: useState vs useReducer: useState should always be the main state management tool, useState  is great for independent state and when the state updating fn is simple
    useReducer should be used when we need more power or having multiple state dependant on each other, 
    also if we have complex state updating fn we should use useReducer

121: in a normal react app we would be passing props from parent to child and sometimes from child to parent through fn,
    also we might be sending props to a component only to be able to send it to another component, creating props chain between components
    react provides a concept called react context (state storage) where we can store the state in our main component and then consume this state in children

122: using react context api: react.createContext({...}), we can pass any vaue as our state to the createContext method, we can pass string, number or mostly object
    then we wrap our jsx conde with our context provider,
    then we wrap our component where we need the state with context consumer
    when using Context.Consumer, it has a children which is a func that has (ctx) as param and it retunrs our jsx code 
    or we can use our context with the react hook useContext(ourContext), we pass a pointer to the context we wanna use

123:  useContext hook

124: making context dnamic, by setting the context value (state) to an object contains the value and a fn to update that value
    this way our value is dynamic and we have access to the fn that udates the state

125: we can even go one step further by splitting our code and separate our context along with it's provider in a separate file
    then we can wrap our whole App component with the provider, and if we want to use the react hook useContext we can also import the context from the context file

126: react context is not optimized for high frequency changes
    react context shouldnt be used as a replacement for all components communication and props.
    components should still be configured via props and short props chains 

127: rules of hooks:
    only call react hooks inside react functions (components) || custom hooks
    only call react hooks at the top level - don't use react hooks in nested functions or block statements

128: refactoring 

129: useRef() and passing refs to nested components
    every components always has default params (props, ref) 
    if we set a ref on the components, we have access to ref param inside that component so we can assign it to the desired element
    we need to wrap our component recieving the ref with a react.forwardRef, then with the useImperativeHandler, we can expose some methods we can use with that ref
     

130: 

`;
