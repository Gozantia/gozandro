

import './App.css';
import {
  BrowserRouter
} from "react-router-dom";
import Nav from "./Nav";

import Content from './Content';

export default function App() {
  return (
    <BrowserRouter>
      <main>
      <Nav />
        <Content />
      </main>
   
    </BrowserRouter>
  );
}
