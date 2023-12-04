import { useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {

  const { theme } = useContext(ThemeContext); // Consumer

  return (
    <footer className={`footer-${theme}`}>
      <p className={`footer-${theme}`}>Redes sociales</p>
      <ul>
        <li className={'link-'+theme}>
          <a className={'link-'+theme} href="#">Twitter</a>
        </li>
        <li className={'link-'+theme}>
          <a  className={'link-'+theme} href="#">Facebook</a>
        </li>
        <li className={'link-'+theme}>
          <a className={'link-'+theme} href="#">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
