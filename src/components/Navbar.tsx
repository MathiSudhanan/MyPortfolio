import { Link } from 'react-scroll'


const Navbar=()=>{
    return (
        <header className="navbar center">
           
        <Link
                offset={-50}
                smooth={true}
                to='home'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
        Home
        </Link>
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
        </header>
    )
}

export default Navbar;