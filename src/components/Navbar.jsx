import { Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links} from '../data'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
      <Link to="/" className='logo'>
        <img src={Logo} alt="Nav logo"/>
      </Link>
<ul className='nav__links'>
    `{
        links.map(({name, path}, index) =>{
            return(
                <li key={index }>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav':''}> {name} </NavLink>
                </li>
            )
        })
    }`
</ul>
      <button className="nav__toggle-btn"></button>  
      <FaBars/>
      </div>   
    </nav>
  )
}

export default Navbar;
