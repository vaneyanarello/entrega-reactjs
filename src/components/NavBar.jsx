import '../assets/styles/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = ()=>{
    return(
        <nav className='nav-container'>
            <a className='enlace' href="">
                <img className='logo' src='../public/logo.png' alt="logo" />
            </a>
            <a className='enlace' href="">Productos</a>
            <a className='enlace' href="">Sale</a>
            <a className='enlace' href="">Contacto</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar