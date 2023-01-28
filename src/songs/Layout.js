import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
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


      <Outlet />


    </>
  )
};

export default Layout;