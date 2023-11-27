// rce --> Componente de clase
import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
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
  }
}

export default Footer;
