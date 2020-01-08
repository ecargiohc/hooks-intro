import React, {useState} from 'react';
import CounterClass from './CounterClass';
// we don't need 'Component' bc we're not 'extend'-ing from 'Component' anymore; bc we're not making a 'class' component
// usually, when we want to add some state into a component, we need to make this a class-based component; however, we can use a 'hook' such as this and import 'useState' (a built-in hook) from 'react'
// useState(); returns an array with two items:
// 1. the piece of state
// 2. the function to update that piece of state
    // we can call this function anywhere!
        // ex: setCount(2) makes count to change to 2
    // therefore, we are 'hooking' into state even though this is not a class-based component and we do not have state defined here
    // we just have a functional component and are using useState()
function CounterHooks() {
    // note: use of JS 'destructuring' here
    // we are having state count to start at 0:
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>The Count Is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
} 
export default CounterHooks;