import React from 'react';

const Button = ({ onClick, active, children }) => {
  const style = {
    backgroundColor: '#00ABFF',
    color: 'white'
  };
  return (
    <button onClick={onClick} style={active? style : {}}>
      {children}
    </button>
  )
};

export default Button;
