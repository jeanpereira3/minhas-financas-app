import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'

import { useUsuarioService } from '../hooks/useUsuarioService'
import { useToast } from '../hooks/useToastr'

const CadastroUsuario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')

    const navigate = useNavigate()
    const { cadastrarUsuario } = useUsuarioService()
    const { mensagemErro, mensagemSucesso } = useToast()

    const cadastrar = () => {
        const msgs = validar()

        if (msgs && msgs.length > 0) {
            msgs.forEach(msg => {
                mensagemErro(msg)
            })
            return false
        }
        
        cadastrarUsuario({
            nome,
            email,
            senha
        }).then(response => {
            mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
            navigate('/')
        }).catch(erro => {
            mensagemErro(erro.response.data)
        })


    }

    const validar = () => {
        const msgs = []

        if (!nome) {
            msgs.push('O campo Nome é obrigatorio.')
        }

        if (!email) {
            msgs.push('O campo Email é obrigatorio.')
        } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push('Informe um Email válido.')
        }

        if (!senha || !senhaConfirmacao) {
            msgs.push('Digite a Senha duas vezes.')
        } else if (senha !== senhaConfirmacao) {
            msgs.push('As senhas não são iguas.')
        }

        return msgs
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6' style={{ position: 'relative', margin: 'auto' }}>
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