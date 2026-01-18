import '../assets/css/NavBar.css'
import NavBarUno from './NavBarUno'
import NavBarLogo from './NavBarLogo'
import NavBarCarrito from './NavBarCarrito'

const NavBar = () => {
    return (
        <nav className='nav-container'>
            <NavBarLogo/>
            <NavBarUno/>
            <NavBarCarrito/>
        </nav>
    )
}

export default NavBar