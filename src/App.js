import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useAuthentication } from './hooks/useAuthentication'
import { AuthProvider } from './context/AuthContext';

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

  const { auth } = useAuthentication()

  return (
    <div className="App">
      <AuthProvider value={{ auth }}>
        <BrowserRouter>
          {auth && <NavBar />}
          <Routes>
            <Route path='/' element={auth ? <Navigate to='/home' /> :<Login />} ></Route>
            <Route path='/cadastrar-usuario' element={<CadastroUsuario />} ></Route>
            <Route
              path='/home'
              element={auth ? <Home /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/consulta-lancamentos'
              element={auth ? <ConsultaLancamentos /> : <Navigate to='/' />}
            ></Route>
            <Route
              path='/cadastrar-lancamentos/:id?'
              element={auth ? <CadastroLancamentos /> : <Navigate to='/' />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
