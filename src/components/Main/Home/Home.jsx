import { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext'

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
    <div>
      <h2>Update Username</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Home;