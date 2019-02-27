import React from 'react';

export function Search({ defaultValue, onChange, messages }) {

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Beer"
        defaultValue={defaultValue}
        onChange={(evt) => onChange(evt.target.value)}
      />
      {messages.length > 0 && (
        <ul>
          {messages.map(message => 
            <li>
              {message.text}
            </li>)}
        </ul>
      )}
    </div>
  );
}