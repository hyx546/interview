import React, { useState } from 'react';

export default function Test() {
    const [number, setNumber] = useState(0);
    const handleClick = () => {
        setNumber(num => num + 1); // num = 1
        setNumber(num => num + 2); // num = 3 
        setNumber(num => num + 3); // num = 6
    };
    return (
        <div>
            <button onClick={() => handleClick()} >点击 {number} </button>
        </div>
    );
}
