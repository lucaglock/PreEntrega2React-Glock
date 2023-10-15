import './style.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
            <h1 className='nav-title'><a href="#"><img alt='logoRol' src={'./logo2.png'} width={'120px'}/></a></h1>
            <nav>
                <ul>
                    <li><a href="#">Dados</a></li>
                    <li><a href="#">Libros</a></li>
                    <li><a href="#">Figuras</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
};

export default Navbar;