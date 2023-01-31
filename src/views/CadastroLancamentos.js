import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useLancamentoService } from '../hooks/useLancamentoService'
import { useToast } from '../hooks/useToastr'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'
import LocalStorage from '../ultils/LocalStorage'

const CadastroLancamentos = () => {
  const [descricao, setDescricao] = useState('')
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('')
  const usuario = LocalStorage.getItem('_usuario_logado')

  const { listaTipo, listaMeses, salvarLancamento } = useLancamentoService()
  const { mensagemSucesso, mensagemErro } = useToast()

  const navigate = useNavigate()

  const salvar = () => {
    const msgs = validar()

    if (msgs && msgs.length > 0) {
      msgs.forEach(msg =>{
        mensagemErro(msg)
      })
      return false
    }

    salvarLancamento({
      descricao,
      ano,
      mes,
      valor,
      tipo,
      usuario : usuario.id
    }).then(response => {
      mensagemSucesso('Lancamento cadastrado com sucesso.')
      navigate('/consulta-lancamentos')
    }).catch(erro =>{
      mensagemErro(erro.response.value)
    })
  }

  const validar = () => {
    const msgs = []

    if (!descricao) {
      msgs.push('O campo Descriçâo é obrigatorio.')
    }

    if (!ano) {
      msgs.push('O campo Ano é obrigatorio.')
    } else if (ano.length !== 4) {
      msgs.push('Informe um Ano válido.')
    }

    if (!mes) {
      msgs.push('Informe um Mês válido.')
    }

    if (!valor) {
      msgs.push('Informe um Valor.')
    } else if (valor <= 0) {
      msgs.push('Informe um Valor válido.')
    }
    
    if (!tipo) {
      msgs.push('Informe um Tipo.')
    } 

    return msgs
  }

  return (
    <div className='container'>
      <Card title='Cadastar lancamento'>
        <FormGroup
          label='Descrição: *'
          htmlFor='inputDescricao'
        >
          <input
            id='inputDescricao'
            className='form-control'
            type='text'
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Ano: *'
          htmlFor='inputData'
        >
          <input
            id='inputAno'
            className='form-control'
            type='number'
            value={ano}
            onChange={e => setAno(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Mês: *'
          htmlFor='inputMes'
        >
          <SelectMenu
            id='inputMes'
            className='form-control'
            lista={listaMeses()}
            value={mes}
            onChange={e => setMes(e.target.value)}
          ></SelectMenu>
        </FormGroup>

        <FormGroup
          label='Valor: *'
          htmlFor='inputValor'
        >
          <input
            id='inputValor'
            className='form-control'
            type='number' 
            value={valor}
            onChange={e => setValor(e.target.value)}
            />
        </FormGroup>

        <FormGroup
          label='Tipo: *'
          htmlFor='inputTipo'
        >
          <SelectMenu
            id='inputTipo'
            className='form-control'
            lista={listaTipo()}
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          ></SelectMenu>
        </FormGroup>

        <button
          type='button'
          className='btn btn-success'
          onClick={salvar}
        >Salvar</button>
        <button type='button' className='btn btn-danger'>Cadastrar</button>
      </Card>
    </div>
  )
}

export default CadastroLancamentos