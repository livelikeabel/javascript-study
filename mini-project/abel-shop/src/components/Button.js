import React from 'react';

const BUTTON_STYLE = {
  width: '80px', height: '30px', background: '#027dbf', color: '#f6f6f6', cursor: 'pointer'
};

const Button = ({ children, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{ ...BUTTON_STYLE, ...style }}>
      {children}
    </button>
  )
};

export default Button;