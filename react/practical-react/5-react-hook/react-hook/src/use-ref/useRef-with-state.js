import React, { useState, useRef, useEffect } from 'react';

function Profile() {
    const [age, setAge] = useState(20);
    const prevAgeRef = useRef(20);
    useEffect(
        () => {
            prevAgeRef.current = age;
        },
        [age],
    );
    const prevAge = prevAgeRef.current;;
    const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
    return (
        <div>
            <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
            <button
                onClick={() => {
                    const age = Math.floor(Math.random() * 50 + 1);
                    setAge(age);
                }}
            >
                Change Age
            </button>
        </div>
    );
} 