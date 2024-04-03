import '../../styles/style.scss'
import Logo from '../../assets/payzo.svg'

function NavBar() {
  return (
    <div  className='navbar'>
      <img className='logo' src={Logo} alt="Logo" />
      <div className='button-init' >
        <div className='button-init-left'>Log in</div>
        <div className='button-init-right' >Register</div>
      </div>
      
    </div>
  )
}

export default NavBar