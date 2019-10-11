import React, { useRef } from 'react';

const Button = ({ text, handleClick }) => {
  const renderCount = useRef(0);
  const buttonElement = useRef(null);

  console.log('Render', ++renderCount.current, buttonElement.current);

  return (
    <button onClick={handleClick} ref={buttonElement}>
      {text}
    </button>
  );
};

export default Button;
