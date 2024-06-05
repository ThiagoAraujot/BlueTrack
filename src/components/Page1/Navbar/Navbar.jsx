import "./Navbar.scss";
{
  /*import logoImg from "../../assets/hc-logo.png";*/
}

const Navbar = () => {
  return (
    <nav className="navbar-1">
      <div className="nav-logo">
        <p className="nav-logo-txt">BlueTrack</p>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-txt" href="#desafios">
            Desafios
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#impactos">
            Impactos
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#publico">
            Público
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#solução">
            Solução
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#benefícios">
            Benefícios
          </a>
        </li>
        <li>
          <a className="nav-txt" href="#inovação">
            Inovação
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
