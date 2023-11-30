import { useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Footer.css';

const Footer = () => {

  const { theme } = useContext(ThemeContext); // Consumer

  return (
    <footer className={`footer-${theme}`}>
      <p>Esto es mi footer</p>
      <ul>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
