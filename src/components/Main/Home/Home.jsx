import { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { Button, TextField } from '@mui/material'


function Home() {
  const { updateUsername } = useContext(UserContext); // Consume el contexto
  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(newUsername);
    setNewUsername('');
  };

  return (
    <div className="home">
      <h2>Update Username</h2>
      <form className="homeForm" onSubmit={handleSubmit}>
        <TextField type="text" value={newUsername} onChange={handleInputChange} />
        <Button variant="contained" size="large" type="submit">Update</Button>
      </form>
      <iframe width="720" height="480" src="https://www.youtube.com/embed/aAkMkVFwAoo?si=BJj5Cc-k8DcM2ilW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}

export default Home;