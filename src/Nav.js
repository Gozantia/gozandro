import { useLocation } from 'react-router-dom'  
import { Link } from "react-router-dom";

const Nav = () => {
    let location = useLocation();
    if (location.pathname === "/") {
        return ""
    }
return <>
    <nav class="navi">
    <Link to="/canciones/almendra">Almendra</Link>
          <Link to="/canciones/año-viejo">Año Viejo</Link>
          <Link to="/canciones/charlie-parker">Charlie Parker</Link>
          <Link to="/canciones/el-asteroide">El Asteroide</Link>
        <Link to="/canciones/el-hombre-cosmico">El Hombre Cósmico</Link>
        <Link to="/canciones/el-turismo-menguo"> El Turismo Menguó </Link>
        <Link to="/canciones/los-Vidrios" > Los Vidrios </Link>
        <Link to="/canciones/vos-me-ayudas"> Vos Me ayudas </Link>
          
          <Link to="/">Ver la portada</Link>
          </nav>
         </>
};
  
export default Nav;
