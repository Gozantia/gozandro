

import './App.css';
import {
  BrowserRouter
} from "react-router-dom";
import Nav from "./Nav";
import Footer from './Footer';
import Content from './Content';

export default function App() {
  return (
    <BrowserRouter>
          <Nav />
      <main>
  
        <Content />
 
      </main>
      <Footer/>
    </BrowserRouter>
  );
}
