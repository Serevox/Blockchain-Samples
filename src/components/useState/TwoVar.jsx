import { useState } from "react";

export default function Form() {
    const [first_name, setName] = useState('Sef');
    const [age, setAge] = useState(38);

    return (
        <>
            <input 
                value={first_name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>
                Increment Age
            </button>
            <p>Hello, {first_name}. You are {age}.</p>
        </>
    );
}