import '../../styles/styleNavbar.scss'
import Logo from '../../assets/payzo.svg'
import Wallet from '../../assets/wallet.svg'
import Dashboard from '../../assets/dashboard.svg'
import Config from '../../assets/configuration.svg'
import Logout from '../../assets/logout.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext, UserProvider } from '../../contexts/user.context';
import { useEffect } from 'react'

function NavBarB() {
  const { logUserOut, loggedUser } = UserProvider(UserContext);
  const navigate = useNavigate();

  function logout() {
    logUserOut();
    navigate("/login");
  }

  useEffect(() => {
  }, [loggedUser]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light navbare'>
      <NavLink to="/" replace={true} className="color-background" >
        <img className='logo' src={Logo} alt="Logo" />
      </NavLink>
      <div className='button-init' >
        <NavLink to="/wallet" replace={true} >
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
    </nav>
  );
}

export default NavBarB;