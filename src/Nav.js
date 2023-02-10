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
          <Link to="/canciones/El Asteroide">El Asteroide</Link>
          
          
          <Link to="/">Ver la portada</Link>
          </nav>
         </>
};
  
export default Nav;
