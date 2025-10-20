##### Answer to the questions#####


### 1: What is JSX, and why is it used?
    Ans: JSX is an extension of the JavaScript language based on ES6,
    and is used for writing HTML directly within the JavaScript code.

### 2: What is the difference between State and Props?
    Ans: The differences between State and Props are below:

    *** State: 
        1. Passes data within the component only
        2. Data is changeable
        3. The state is both read and write

    *** Props: 
        1. Passed data one component to another
        2. Data is not changeable
        3. Can be used with state and functional components
        4. Props are read only

### 3: What is the useState hook, and how does it work?
    Ans: useState is a React Hook that lets us add a state variable to our component.

     *** how does it works-
        1. Import : import the useState hook from react.
        2. Call useState: inside a function component call useState with the initial value for state variable.
        3. Destructure array : it returns a array with tow items. We can use array destructuring to assign names to these items: first item is the current state value and second is a function to update the state.
        4. Use state and updater : The state variable holds the current data, and the updater function is the only way to change it.
        5.Component re-renders: during the re-render, the component will use the updated state value, ensuring UI always reflects the most current data.
### 4:How can you share state between components in React?
    Ans: There are a few method of sharing state between component in React.

     *** how I do :-
        1.  Lift State Up :
            * Moving the state into the closest common parent component. 
            * Passing the state down as props. 
            * Passing functions down as props to allow child components to update it.
         
         2. Props Drilling :  Passing state multiple levels deep. This can get messy.

### 5:How is event handling done in React?
    Ans: Event handling in React : 
        1 => CamelCase event names :  event names are written in camelCase, not lowercase.
        2 => JSX uses functions : in React you pass a function reference.
        3 => Passing arguments to event handlers: we use an arrow function to pass arguments, otherwise React will call the function immediately.

    
