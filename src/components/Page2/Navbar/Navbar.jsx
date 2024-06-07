import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">BlueTrack</h1>

      <ul className="ul-links">
        <li className="links">Objetivos</li>
        <a href="#features">
          <li className="links">Funcionalidades</li>
        </a>

        <a href="#benefits">
          <li className="links">Benefícios</li>
        </a>
      
        <a href="#analysis">
          <li className="links">Impacto</li>
        </a>
      </ul>

      <Link to="/">
        <button className="btn-go-back">Voltar</button>
      </Link>
    </nav>
  );
};

export default Navbar;
