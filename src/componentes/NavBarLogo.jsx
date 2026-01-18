import '../assets/css/NavBarLogo.css'

const NavBarLogo = ()=> {
    return (
        <img src={import.meta.env.BASE_URL + 'Logo-tienda.png'} alt='Logo-tienda' className='logo-tienda'/>
    )
}

export default NavBarLogo