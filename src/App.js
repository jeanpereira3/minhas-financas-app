import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

import NavBar from './components/NavBar';
import Login from './views/Login'
import CadastroUsuario from './views/CadastroUsuario'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/cadastrar' element={<CadastroUsuario />} ></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
