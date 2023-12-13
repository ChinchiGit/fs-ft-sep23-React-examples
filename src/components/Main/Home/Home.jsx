import { useContext, useRef } from 'react'
import { UserContext } from '../../../context/UserContext'
import { Button, TextField } from '@mui/material'


function Home() {
  const { updateUsername } = useContext(UserContext); // Consume el contexto
  const inputName = useRef('');

  const handleClick = () => {
    const userName = inputName.current.value;
    alert(`Valor del input: ${userName}`);
    updateUsername(userName); // invoca a función del contexto
    inputName.current.value = '';
  };

  return (
    <section className="home">
      <h1>Home</h1>
      <h2>Update Username</h2>
        <div className="homeForm">
          {/* <input type="text" ref={inputName} /> */}
          <TextField type="text" inputRef={inputName}/>
          <Button variant="contained" size="large" onClick={handleClick}>Update</Button>
        </div>
        <iframe width="720" height="480" src="https://www.youtube.com/embed/aAkMkVFwAoo?si=BJj5Cc-k8DcM2ilW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
  );
}

export default Home;