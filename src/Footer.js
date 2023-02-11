import spot from './spotify.webp';
import apple from './apple.webp';
import you from './youtube.webp';

const Footer = () => { 
    return <> 
    <footer>     
    <div>Escúchalo hoy en:</div>
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
    <img src={apple} alt=" Gozandro Parker Apple Music" />
    </a>
    </div>
    <div><a
      className="App-link "
      href="https://www.instagram.com/gozandroparker/"
      target="_blank"
      rel="noopener noreferrer"
    >  @gozandroparker   </a> 

<a
      className="App-link "
      href="gozandroparker@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    > Correo </a> 

  </div>
  </footer>
  </>
}

    export default Footer;