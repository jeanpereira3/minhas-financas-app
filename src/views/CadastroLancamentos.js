import React, { useState } from 'react'

import { useLancamentoService } from '../hooks/useLancamentoService'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'

const CadastroLancamentos = () => {
  const [descricao, setDescricao] = useState('')
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('')

  const { listaTipo, listaMeses } = useLancamentoService()

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
        >Buscar</button>
        <button type='button' className='btn btn-danger'>Cadastrar</button>
      </Card>
    </div>
  )
}

export default CadastroLancamentos