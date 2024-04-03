import '../../styles/styleNavbar.scss'
import Logo from '../../assets/payzo.svg'

function NavBar() {
  return (
    <nav  className='navbare navbar navbar-expand-lg navbar-light'>
      <img className='logo' src={Logo} alt="Logo" />
      <div className='button-init' >
        <button type="button" className="btn btn-light btn-sm button-init-left ">Log in</button>
        <button type="button" className="btn btn-info btn-sm button-init-right ">Register</button>
      </div>
    </nav>
  )
}

export default NavBar