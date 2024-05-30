import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>BlueTrack</h1>

            <ul className='ul-links'>
                <li className='li-items'>Home</li>
                <li className='li-items'>About Us</li>
                <li className='li-items'>Learn more</li>
            </ul>
        </nav>
    );
};

export default Navbar;