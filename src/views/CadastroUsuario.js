import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'

const CadastroUsuario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')

    const cadastrar = () => {
        console.log(nome, email, senha, senhaConfirmacao);
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6' style={{position: 'relative', margin: 'auto'}}>
                <div className='bs-docs-section'>
                    <Card title='Cadastro de Usuário'>
                        <FormGroup 
                            label='Nome: *'
                            htmlFor='inputNome'
                        >
                            <input type='text' className='form-control' 
                                id='inputNome'
                                name='nome' 
                                placeholder="Digite seu Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup 
                            label='Email: *'
                            htmlFor='inputEmail'
                        >
                            <input type='email' className='form-control' 
                                id='inputEmail'
                                name='email' 
                                placeholder="Digite seu Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup 
                            label='Senha: *'
                            htmlFor='inputSenha'
                        >
                            <input type='password' className='form-control' 
                                id='inputSenha'
                                name='senha' 
                                placeholder="Digite sua Senha"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup 
                            label='Repita a Senha: *'
                            htmlFor='inputSenhaConfirmacao'
                        >
                            <input type='password' className='form-control' 
                                id='inputSenhaConfirmacao'
                                name='senhaConfirmacao' 
                                placeholder="Confirme sua senha"
                                value={senhaConfirmacao}
                                onChange={e => setSenhaConfirmacao(e.target.value)}
                            />
                        </FormGroup>

                        <button 
                            type='button' 
                            className='btn btn-success'
                            onClick={cadastrar}
                        >Salvar</button>
                        <Link className='btn btn-danger' to={'/'}>Cancelar</Link>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CadastroUsuario