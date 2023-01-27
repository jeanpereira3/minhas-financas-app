import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useUsuarioService } from '../hooks/useUsuarioService'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'

import LocalStorage from '../ultils/LocalStorage'

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(null)

  const navigate = useNavigate()

  const { autenticar } = useUsuarioService()


  const entrar = (e) => {
    e.preventDefault()
    autenticar({
      email,
      senha
    }).then(response => {
      LocalStorage.setItem('_usuario_logado', response.data)
      navigate('/home')
    }).catch(erro => {
      console.log('cat');
      setErro(erro.response.data)
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6' style={{ position: 'relative', margin: 'auto' }}>
          <div className='bs-docs-section'>

            <Card title='Login'>
              {erro && <div className='row'>
                <span>{erro}</span>
              </div>}
              <FormGroup
                label='Email: *'
                htmlFor='exampleInputEmail1'
              >
                <input type='email' className='form-control' id='exampleInputEmail1'
                  aria-describedby="emailHelp" placeholder="Digite o Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup
                label='Senha: *'
                htmlFor='exampleInputPassword1'
              >
                <input type='password' className='form-control' id='exampleInputPassword1'
                  aria-describedby="emailHelp" placeholder="Password"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </FormGroup>
              <button
                className='btn btn-success'
                onClick={entrar}
              >Entrar</button>
              <Link
                className='btn btn-danger'
                to='/cadastrar-usuario'
              >Cadastrar</Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login