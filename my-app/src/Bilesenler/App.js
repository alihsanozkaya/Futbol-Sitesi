import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import FutbolcularSayfasi from "../Sayfalar/FutbolcularSayfasi";
import KadroSayfasi from "../Sayfalar/KadroSayfasi";
import HataSayfasi from "../Sayfalar/HataSayfasi";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
        <Routes>
            <Route index path="/" element = {<FutbolcularSayfasi/>}/>
            <Route index path="/kadrosayfasi" element = {<KadroSayfasi/>}/>
            <Route path="*" element = {<HataSayfasi/>}/>
        </Routes>
      </Router>
  )
}

export default App
