import React from 'react'
import { useState, useEffect } from 'react'

import { json, Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [saldo, setSaldo] = useState(0)

  useEffect(()=>{

    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogadoObj = JSON.parse(usuarioLogadoString)

    axios.get(`http://localhost:8080/api/usuarios/${usuarioLogadoObj.id}/saldo`)
      .then(response => {
        setSaldo(response.data)
      }).catch(erro => {
        console.log(erro.response)
      })
  },[])

  return (
    <div className='container'>

      <div className='jumbotron'>
        <h1 className='display-3'>Bem vindo!</h1>
        <p className='lead'>Esse é seu sistema de finanças.</p>
        <p className='lead'>Seu saldo para o mês atual é de R$ {saldo}</p>
        <hr className='my-4' />
        <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
        <p className='lead'>
          <Link className='btn btn-primary btn-lg' 
            to='/cadastrar-usuario' role='button'>
            <i className='fa fa-users'></i>
            Cadastrar Usuário
          </Link>
          <Link className='btn btn-danger btn-lg' href='https://bootswatch.com/flatly/#' role='button'>
            <i className='fa fa-users'></i>
            Cadastrar Lançamento
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Home