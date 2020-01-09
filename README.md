# useEffect-always-runs
Created with CodeSandbox


useEffect will run on every update that which the function encounters. This sandbox was made in order to double-check
that useEffect was working correctly after a colleague experienced a bug. Proto-typed out the sandbox and left 
useEffec in its raw state and it correctly console.logs wheneve the button or checkbox is clicked.
Upon further review, the colleague is using ReactNative and it appears that the checkbox element whithin useEffect is 
broken in React Native. 
