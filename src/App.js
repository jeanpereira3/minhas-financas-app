import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

import NavBar from './components/NavBar';
import Login from './views/Login'
import Home from './views/Home';
import CadastroUsuario from './views/CadastroUsuario'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/cadastrar-usuario' element={<CadastroUsuario />} ></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
