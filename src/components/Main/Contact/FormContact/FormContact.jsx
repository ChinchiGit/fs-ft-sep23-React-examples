import React, { useState } from 'react';

const FormContact = ({ add }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    add(inputValue); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Enviar mensaje</button>
    </div>
  );
};

export default FormContact;