

import './App.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

import Content from './Content';
import spot from './spotify.webp';
import apple from './apple.webp';
import you from './youtube.webp';


export default function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
      <div class="introduction">
      <h1>Acerca de Gozandro Parker</h1> 
                  <p>
                  Este disco reúne algunas canciones que escribí del 2017 al 2022 y superaron todos mis cambios de ánimo y mi perdida de memoria y motivación constantes. Hacerlo fue una especie de reto- experimento – exorcismo y también un golpe a la realidad y a entender que las cosas nunca serán fáciles y que esa es la mejor parte. 
                  </p>
                  <p>
                  Hacerlo surgió de la idea de liberarse de las cosas viejas para encontrar las nuevas, un nuevo avatar con el que me despido de mis veintes para estar más presente en lo de ahora, que es esta soledad que me va a matar, que me va a matar (como la canción de la pestilencia). 
                  </p>
                  <p>
                  ¡Gracias por leerlo y escucharlo!
                  </p>

        <h3> Cliquea las canciones para seguir navegando </h3>
        </div>
        <nav>
         
          <Link to="/canciones/almendra">Almendra</Link>
          <Link to="/canciones/año-viejo">Año Viejo</Link>
          <Link to="/canciones/El Asteroide">El Asteroide</Link>
          
          
          <Link to="/">Ver la portada</Link>
        </nav>

        <div> 
          <h4>
            Créditos:
          </h4><p>
            Creación: Santiago Gutiérrez  <br />
            Producción: Jhoan Cadavid  <br />
            Mezcla y masterización: Kevin Martinez <br />
            Arte portada: Rose Plateau
            </p>
            <h4>
            Agradecimientos:
          </h4><p>
            A mis queridos tíos y tías, a mis amigos que también ahora son otras tías, a mis muertos, a mis papás y a las mascotas de mis amigos.

          </p>

          <a
        className="App-link "
        href="https://www.instagram.com/gozandroparker/"
        target="_blank"
        rel="noopener noreferrer"
      >
      Sígueme en Instagram   </a>

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

        </div>
        </header>
        <Content />
        
      </main>
   
    </BrowserRouter>
  );
}
