import '../../styles/styleNavbar.scss'
import Logo from '../../assets/payzo.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav  className='navbare navbar navbar-expand-lg navbar-light'>
      <Link to="/home"  replace={true} >
        <img className='logo' src={Logo} alt="Logo" />
      </Link>
      <div className='button-init' >
        <Link to="/login"  replace={true} >
          <button type="button" className="btn btn-light btn-sm button-init-left ">
            Log in
          </button>
        </Link>
        <Link to="/register" replace={true} >
          <button type="button" className="btn btn-info btn-sm button-init-right ">
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar