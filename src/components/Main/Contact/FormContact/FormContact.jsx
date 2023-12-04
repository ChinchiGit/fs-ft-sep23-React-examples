import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'


const FormContact = ({ add }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    add(inputValue); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div className='formContact'>
      <TextField type="text" value={inputValue} onChange={handleChange} />
      <Button variant="contained" onClick={handleClick}>Enviar mensaje</Button>
    </div>
  );
};

export default FormContact;