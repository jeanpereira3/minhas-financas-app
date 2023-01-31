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
import ConsultaLancamentos from './views/ConsultaLancamentos';
import CadastroLancamentos from './views/CadastroLancamentos';

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"               
import "primeicons/primeicons.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/cadastrar-usuario' element={<CadastroUsuario />} ></Route>
          <Route path='/consulta-lancamentos' element={<ConsultaLancamentos />}></Route>
          <Route path='/cadastrar-lancamentos' element={<CadastroLancamentos />}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
