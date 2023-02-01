import { Outlet, Link } from "react-router-dom";
import you from '../youtube.webp';
import spot from '../spotify.webp';
import apple from '../apple.webp';

const Layout = () => {
  return (
   
    < Outlet>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Almendra">Almendra</Link>
          </li>
        </ul>
        <div className="subtitulo">
    <a
        className="App-link "
        href="https://www.instagram.com/gozandroparker/"
        target="_blank"
        rel="noopener noreferrer"
      >
      Instagram   </a>
    </div>
      </nav>

      <div  className="links-container"> 
      <a
        className="App-link "
        href="https://www.youtube.com/watch?v=X05sFe6Fp04&list=OLAK5uy_laRld86QIgFR8KdjHvhIdeC-YqoDA8_Vs&index=2"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={you} alt="cover Gozandro Parker" />
      </a> 

      <a
        className="App-link"
        href="https://open.spotify.com/album/0yHTPhMaS5UhFXceh4KM0S?si=BOyjNErMRimg9LZdroVYLg"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={spot} alt="cover Gozandro Parker" />
      </a>

      <a
        className="App-link "
        href="https://music.apple.com/us/artist/gozandro-parker/1656872128"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={apple} alt="cover Gozandro Parker" />
      </a>
      </div>



    </Outlet>
  )
};

export default Layout;