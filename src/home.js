/* import logo from './gozandro.png'; */
import cover from './cover_gozandro_parker.jpg';
import gozandroLogo from './gozandro_logo.png'
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
          <span className="title"style={{ opacity: 0, position: "absolute" } }><h1>Gozandro Parker</h1></span> 
          
      <div className="gozandroLogo" > <img src={gozandroLogo} alt="cover Gozandro Parker" /> </div>
      
                  <p>
                  Este disco reúne canciones que escribí del 2017 al 2022, que superaron mis cambios de ánimo y a las cuales perdoné todos sus errores. La idea de este trabajo fue justamente esa, una especie de reto- experimento – exorcismo para liberarse de las cosas viejas e intentar encontrar las nuevas en mi re-encuentro con la música, una conciliación, una tregua. 
                  </p>
    
                  <p>
                  En cuanto al avatar del disco y las temáticas de sus canciones, puedo decir que fueron hechos casi al azar que me fueron ocurriendo, supongo que a alguna gente le pasan cosas a otras no y creo que soy un poco de la segunda, es lo que hay, es duro. 
                  </p>
                  <p>
                  ¡Gracias por leerlo y escucharlo!
                  </p>
          <h4>
            Créditos:
          </h4><p>
            Creación: Santiago Gutiérrez   <br />
            Producción y captura: <a href="https://www.instagram.com/elaltobonito/" target ="_blank" rel="noreferrer"> Jhoan Cadavid jaramillo </a> <br />
            Mezcla y masterización: Kevin Martinez <br />
            Arte portada: Rose Rosa Meseta
            
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
        <Link to="/canciones/charlie-parker">Charlie Perker</Link>
        <Link to="/canciones/el-Asteroide">El Asteroide</Link>
        <Link to="/canciones/el-hombre-cosmico">El Hombre Cósmico</Link>
        <Link to="/canciones/el-hombre-cosmico"> El Turismo Menguó </Link>
        <Link to="/canciones/el-hombre-cosmico" > Los Vidrios </Link>
        <Link to="/canciones/el-hombre-cosmico"> Vos Me ayudas </Link>
      </nav>       
      </div>
     
    
    </div>
    <div className="cover">
      <img src={cover} alt="cover Gozandro Parker" />
  </div>
  
       </section> 
  };
  
  export default Home;

  