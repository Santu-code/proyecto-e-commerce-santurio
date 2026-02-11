import '../assets/css/NavBarUno.css'
import { NavLink } from 'react-router-dom'

const NavBarUno = () =>{
    return(
        <nav className='links-container'>
            <NavLink className='links-nav' to="/secciones/nogi">No Gi</NavLink>
            <NavLink className='links-nav' to="/secciones/gi">Gi</NavLink>
            <NavLink className='links-nav' to="/secciones/clases">Clases</NavLink>
            <NavLink className='links-nav' to="/secciones/relacionados">Relacionados</NavLink>
        </nav>
    )
}

export default NavBarUno