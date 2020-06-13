import React, { useRef } from 'react';

function MyComponent() {
    const inputEl = useRef(null);
    const onClick = () => {
        if (inputEl.current) {
            inputEl.current.focus();
        }
    };
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onClick}>Focus the text</button>
        </div>
    )
}