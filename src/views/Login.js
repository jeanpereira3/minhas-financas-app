import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'

const Login = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
    
  const entrar = () => {
    console.log(email)
    console.log(senha)
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6' style={{position: 'relative', margin: 'auto'}}>
                <div className='bs-docs-section'>
                    <Card title='Login'>
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
                        to={'/cadastrar'}
                      >Cadastrar</Link>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login