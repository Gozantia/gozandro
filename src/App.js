

import './App.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

import Content from './Content';

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
            Créditos y agradecimientos:
          </h4><p>
            Creación: Santiago Gutiérrez  <br />
            Productor: Jhoan Cadavid  <br />
            Mezcla y Mastering: Kevin Martinez <br />
            Arte: Rose Plateau
            </p>
            <h4>
            Agradecimientos:
          </h4><p>
            A mis queridos tíos y tías, a mis amigos que también ahora son otras tías, a mis muertos, a nadie.
          </p>
        </div>
        </header>
        <Content />
        
      </main>
   
    </BrowserRouter>
  );
}
