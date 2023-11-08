import './style.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <h1 className='nav-title'><Link to={'/'}><img alt='logoRol' src={'./logo2.png'} width={'120px'}/></Link></h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/category/Dados'}> 
                        Dados
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Libros'}> 
                        Libros
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Figuras'}> 
                        Figuras
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Combos'}> 
                        Combos
                        </Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
};

export default Navbar;