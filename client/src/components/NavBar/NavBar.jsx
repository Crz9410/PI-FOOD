import { Link } from "react-router-dom";
import style from './NavBar.module.css';


const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/">Página principal</Link>
            <Link to="/home">Paises</Link>
            <Link to="/create">Actividades</Link>

        </div>
    )
};

export default NavBar;