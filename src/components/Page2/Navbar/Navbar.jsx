import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">BlueTrack</h1>

      <ul className="ul-links">
        <li className="links">About Us</li>
        <li className="links">Features</li>
        <li className="links">Benefits</li>
        <li className="links">Impact</li>
      </ul>

      <button className="btn-go-back">Go back</button>
    </nav>
  );
};

export default Navbar;
