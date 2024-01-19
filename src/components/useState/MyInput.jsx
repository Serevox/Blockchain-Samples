/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function MyInput() {
    const [text, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <>
         <h3>Type something in the field</h3>
         <input value={text} onChange={handleChange} />
         <p>You typed: {text}</p>
         <button onClick={() => setText('hello')}>
            Reset
         </button>
        </>
    );
}