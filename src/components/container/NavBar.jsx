import '../../styles/styleNavbar.scss'
import Logo from '../../assets/payzo.svg'
import Wallet from '../../assets/wallet.svg'
import Dashboard from '../../assets/dashboard.svg'
import Config from '../../assets/configuration.svg'
import Logout from '../../assets/logout.svg'
import { NavLink } from 'react-router-dom'
import { UserContext, UserProvider } from '../../contexts/user.context';
import { useEffect, useState } from 'react'

function NavBar() {

  const { user } = UserProvider(UserContext);
  const [loggedIn, setLoggedIn] = useState(user || !!sessionStorage.getItem('token'));

  function logout() {
    sessionStorage.removeItem('token');
    setLoggedIn(false);
  }

  useEffect(() => {
    setLoggedIn(user || !!sessionStorage.getItem('token'));
  }, [user]);

  function changeButtons(){
    if(loggedIn){
      return (
        <div className='button-init' >
          <NavLink to="/wallet"  replace={true} >
            <img className='logo-nav' src={Wallet} alt="Wallet" />
          </NavLink>
          <NavLink to="/dashboard" replace={true} >
            <img className='logo-nav' src={Dashboard} alt="Dashboard" />
          </NavLink>
          <NavLink to="/config" replace={true} >
            <img className='logo-nav' src={Config} alt="Config" />
          </NavLink>
          <NavLink to="/" replace={true} onClick={logout} >
            <img className='logo-nav' src={Logout} alt="Logout" />
          </NavLink>
        </div>
      )
    } else {
      return (
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
      )
    }
  }

  return (
    <nav  className='navbar navbar-expand-lg navbar-light navbare'>
      <NavLink to="/"  replace={true} className="color-background" >
        <img className='logo' src={Logo} alt="Logo" />
      </NavLink>
      { changeButtons() }
    </nav>
  )
}

export default NavBar