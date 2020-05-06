import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('calculate average...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback( e => {
    setNumber(e.target.value);
  }, []); // Create function when component render first time
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]); // Create function when only change number or list

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>Register</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>Average: {avg}</b>
      </div>
    </>
  );
};

export default Average;
