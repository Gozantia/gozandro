/* import logo from './gozandro.png'; */
import cover from './cover_gozandro_parker.jpg';
import spot from './spotify.webp';
import apple from './apple.webp';
import you from './youtube.webp';
import {
  Link
} from "react-router-dom";

/*<div className="titulo">
   
<img src={logo} className="App-logo" alt=" Gozandro Parker" />
</div>
*/

const Home = () => {
    return   <section className="portada">
                 
      <div className="introduction">
        
      <div className ="conte">
        <div className="contenido"> 
          <h1>Acerca de Gozandro Parker</h1> 
                  <p>
                  Este disco reúne algunas canciones que escribí del 2017 al 2022 que superaron mis cambios de ánimo y  a las cuales perdoné todos sus errores. Hacer este trabajo fue una especie de reto- experimento – exorcismo. 
                  </p>
                  <p>
                  Hacerlo surgió de la idea de liberarse de las cosas viejas para encontrar las nuevas, un nuevo avatar con el que me despido de ideas viajas para estar más presente en lo de ahora. 
                  </p>
                  <p>
                  ¡Gracias por leerlo y escucharlo!
                  </p>
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
          </div>
          
      
      <nav>
        <Link to="/canciones/almendra">Almendra</Link>
        <Link to="/canciones/año-viejo">Año Viejo</Link>
        <Link to="/canciones/el-Asteroide">El Asteroide</Link>
        <Link to="/canciones/el-hombre-cosmico">El Hombre Cósmico</Link>
        <Link to="/canciones/el-hombre-cosmico"> El Turismo Menguó </Link>
        <Link to="/canciones/el-hombre-cosmico" > Los Vidrios </Link>
        <Link to="/canciones/el-hombre-cosmico"> Vos Me ayudas </Link>
      </nav>
      </div>
     <div>      <a
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
    </div>
    <div className="cover">
      <img src={cover} alt="cover Gozandro Parker" />
  </div>
   </section> 
  };
  
  export default Home;

  