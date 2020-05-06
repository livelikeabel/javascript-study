import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    console.log('rendering is complete!');
    console.log(value2);

    return () => {
      console.log('cleanup');
      console.log(value2);
    };
  }, []);

  return (
    <div>
      <p>
        Current counter value is <b>{value}</b>
      </p>
      <p>
        Current counter value2 is <b>{value2}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <br/>
      <button onClick={() => setValue2(value2 + 1)}>+1</button>
      <button onClick={() => setValue2(value2 - 1)}>-1</button>
    </div>
  );
};

export default Counter;
