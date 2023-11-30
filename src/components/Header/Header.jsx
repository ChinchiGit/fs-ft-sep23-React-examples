import { useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'

import Nav from "./Nav";
import './Header.css';

const Header = () => {
  const { username,updateUsername } = useContext(UserContext); // Consumer
  const { theme,toggleTheme } = useContext(ThemeContext); // Consumer

  return (
    <header className={`header-${theme}`}>
      <Nav />
      <button onClick={toggleTheme}>Tema</button>
      {username?
      <>
        <p>Hola, {username}</p>
        <button onClick={()=>updateUsername("")}>Logout</button>
      </>:""}
    </header>
  );
};

export default Header;
