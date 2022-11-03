import logo from './gozandro.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Álbum debut: Domingo, 20 de noviembre de 2022, 7:00 p.m - 8:00 p.m. (GMT-5) 
        </p>
        <a
          className="App-link"
          href="https://forms.gle/aT6TVDXYhxiunNcx5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recibir el link a tu Whatsapp para escucharlo de primera 
        </a>
      </header>
    </div>
  );
}

export default App;
