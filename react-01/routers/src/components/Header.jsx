
import {Link} from 'react-router-dom';

function Header(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/product/1">Producto 1</Link></li>   
            </ul>
        </nav>
    );
}

export default Header;