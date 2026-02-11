import { NavLink } from 'react-router-dom'
import '../assets/css/NavBarLogo.css'

const NavBarLogo = ()=> {
    return (
        <NavLink to='/'>
            <img src={import.meta.env.BASE_URL + 'Logo-tienda.png'} alt='Logo-tienda' className='logo-tienda'/>
        </NavLink>
    )
}

export default NavBarLogo