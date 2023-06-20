import { Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links} from '../data'



const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
      <Link to="/" className='logo'>
        <img src={Logo} alt="Nav logo"/>
      </Link>
<ul className='nav__links'>
    {
        links.map(({name, path}, index) =>{
            return(
                <li key={index}>
                    <NavLink to={path}> {name} </NavLink>
                </li>
            )
        })
    }
</ul>
      <button className="nav__toggle-btn"></button>
      </div>   
    </nav>
  )
}
/*
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )*/

export default Navbar;
