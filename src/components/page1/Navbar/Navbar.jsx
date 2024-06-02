import "./Navbar.scss";
import logotype from "../../../assets/logotype.png";
import logoName from "../../../assets/BlueTrack-name.png";

const Navbar = () => {
  return (
    <nav className="navbar-home">
      <div className="logo-container">
        <img className="logo-image-name" src={logoName} alt="" />
        
      </div>

      <ul className="ul-links-home">
        <li className="li-items-home">Home</li>
        <li className="li-items-home">About Us</li>
        <li className="li-items-home">Learn more</li>
      </ul>
    </nav>
  );
};

export default Navbar;
