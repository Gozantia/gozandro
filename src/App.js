

import './App.css';
import Almendra from "./songs/Almendra";
import Layout from "./songs/Layout";
import { BrowserRouter as Router } from 'react-router-dom';
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <main >
    <Router>
          <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
          <Route path="almendra" element={<Almendra />} />
          </Route>
        </Routes>
        </Router>
        </main>
  );
}

export default App;
