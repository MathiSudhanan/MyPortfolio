import { Link } from 'react-scroll'

const Navbar2=()=>{
    return (
        <header className="header">
  
  <Link
                offset={-50}
                smooth={true}
                to='home'
                className='logo'
                href='#'
                spy={true}
                activeClass='active'
              >
                MS
              </Link>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link
                offset={-50}
                smooth={true}
                to='about'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                About
              </Link></li>
    <li><Link
                offset={-50}
                smooth={true}
                to='experience'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Experience
              </Link></li>
    <li><Link
                offset={-50}
                smooth={true}
                to='portfolio'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Portfolio
              </Link></li>
    <li><Link
                offset={-50}
                smooth={true}
                to='contact'
                className='nav-menu'
                href='#'
                spy={true}
                activeClass='active'
              >
                Contact
              </Link></li>
  </ul>
</header>
    )
}

export default Navbar2;