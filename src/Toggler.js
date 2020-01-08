// we now do not need to import useState anymore, since we've separated out our custom hook into its separate file
// import React, {useState} from 'react';
import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
        // before custom hook: 
    // const [isHappy, setIsHappy] = useState(true);
    // const [isHeartBroken, setIsHeartBroken] = useState(false);
    // const toggle = () => {
    //     setIsHappy(!isHappy);
    // };
    // const toggleHeart = () => {
    //     setIsHeartBroken(!isHeartBroken);
    // };
        // the above toggles can get redundant; create a custom hook: go to 'hooks' folder (it is convention to separate these out into separate files)
            // resulting in a much more concise following:
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);

    const [isBanana, toggleIsBanana] = useToggle(true);
    return(
        <div>
            {/* onClick={() => setIsHappy(!isHappy)} */}
            <h1 onClick={toggleIsHappy}>
                {isHappy ? ":)" : ":("}
            </h1>
            <h1 onClick={toggleIsHeartBroken}>
                {isHeartBroken ? "</3" : "<3"}
            </h1>
            <h1 onClick={toggleIsBanana}>
                {isBanana ? "banana" : "no banana"}
            </h1>
        </div>
    )

}
export default Toggler;