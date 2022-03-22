import { Link } from 'react-scroll'


const Navbar=()=>{
    return (
        <nav className="navbar center">
            {/* <a className="nav-menu active" href="#about">About</a>
            <a className="nav-menu" href="#experience">Experience</a>
            <a className="nav-menu" href="#portfolio">Portfolio</a>
            <a className="nav-menu" href="#contacts">Contacts</a> */}

        {/* <Link className="nav-menu" to="/About2">About</Link>  */}
        <Link
                offset={-50}
                smooth={true}
                to='about'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                About
              </Link>
              <Link
                offset={-50}
                smooth={true}
                to='experience'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Experience
              </Link>
              <Link
                offset={-50}
                smooth={true}
                to='portfolio'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Portfolio
              </Link>
              <Link
                offset={-50}
                smooth={true}
                to='contact'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Contact
              </Link>
        </nav>
    )
}

export default Navbar;