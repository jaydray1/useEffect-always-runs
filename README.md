# useEffect-always-runs
Created with CodeSandbox


useEffect will run on every update that which the function encounters. This sandbox was made in order to double-check
that useEffect was working correctly after a colleague experienced a bug. Proto-typed out the sandbox and left 
useEffec in its raw state and it correctly console.logs wheneve the button or checkbox is clicked.
Upon further review, the colleague is using ReactNative and it appears that the checkbox element whithin useEffect is 
broken in React Native. 

- I moved the state management into the parent so the parent contains the functions which I pass into the child and the child is where I call the parents functions from in order to the update the state on the parent, and I pass the props down from the parent to the child in order to display the most recent state, which is container in the parent, in the child. Make the child component dumb. 
- Added styled components in the child component. 
