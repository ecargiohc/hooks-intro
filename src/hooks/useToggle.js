// So, instead of defining toggle function IN the 'Toggler' component, we define toggle function in this HOOK. And then we can just call that hook from Toggler.js component!

// call useState
import {useState} from 'react';
function useToggle(initialVal=false) {
    // call useState, "reserve piece of state"
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    // return piece of state AND a function to toggle it
    return [state, toggle];
};
export default useToggle;