// React Context
// CONS
// 1. Complex setup / management (for large applications)
// in more complex apps, managing React context can lead to deeply 
// nested JSX code and / or huge "Context Provider" components
// 2. Performance: Context is used for low frequency unlikely updates 
// (theme / authentication)
// Not optimized for high-frequence state changes

// REDUX
// 1. Central Data (state) store. (1 Store for the entire app)
// 2. Components act like subscribers to the store for any changes.
// 3. Components doesnt direclty change the store data.
// Reducer functions are used to change/mutate state from components.
// NOT useReducer(), reducer functions are a general concept.
// Components Dispatch Actions(forwarded to reducer), which describes what the Reducer function
// should perform.

// REDUX TOOLKIT
Makes you able to mutate state directly.
Makes you able to slice up reducers


__Reducers__ must be pure, side-effect free, synchronous functions.
Side-effects and async codes, should be in the components (useEffect) or we write our own action creators.
