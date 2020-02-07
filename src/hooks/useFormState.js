import {useState} from 'react';
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const reset = () => {
        // empty form again:
        setValue("");
    };
    return [value, handleChange, reset]
 };  