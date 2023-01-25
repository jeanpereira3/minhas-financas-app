import React from 'react'
import { useState } from 'react'

import FormGroup from './FormGroup'



const Card = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const entrar = () => {
        console.log(email)
        console.log(senha)
    }

    return (
    <div className='card mb-3'>
        <h3 className='card-header'>{props.title}</h3>
        <div className='card-body'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='bs-component'>
                        <form>
                            <fieldset>
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
                                <button className='btn btn-danger'>Cadastrar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card