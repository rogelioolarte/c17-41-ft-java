import '../../styles/styleNavbar.scss'
import Logo from '../../assets/payzo.svg'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav  className='navbare navbar navbar-expand-lg navbar-light'>
      <NavLink to="/"  replace={true} className="color-background" >
        <img className='logo' src={Logo} alt="Logo" />
      </NavLink>
      <div className='button-init' >
        <NavLink to="/login"  replace={true} >
          <button type="button" className="btn btn-light btn-sm button-init-left ">
            Log in
          </button>
        </NavLink>
        <NavLink to="/register" replace={true} >
          <button type="button" className="btn btn-info btn-sm button-init-right ">
            Register
          </button>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar