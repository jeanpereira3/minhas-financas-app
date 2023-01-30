import React from 'react'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'

const ConsultaLancamentos = () => {
  const meses = [
    { label: 'Selecione...', value: '' },
    {
      label: 'Janeiro',
      value: 1
    },
    {
      label: 'Fevereiro',
      value: 2
    },
    {
      label: 'Março',
      value: 3
    },
    {
      label: 'Abril',
      value: 4
    },
    {
      label: 'Maio',
      value: 5
    },
    {
      label: 'Junho',
      value: 6
    },
    {
      label: 'Julho',
      value: 7
    },
    {
      label: 'Agosto',
      value: 8
    },
    {
      label: 'Setembro',
      value: 9
    },
    { label: 'Outubro', value: 10 },
    { label: 'Novembro', value: 11 },
    { label: 'Desembro', value: 12 }
  ]

  const tipo = [
    { label: 'Selecione...', value: '' },
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ]

  return (
    <div className='container'>
      <Card title='Consulta Lançamento'>
        <FormGroup
          label='Ano: *'
          htmlFor='buscaAno'
        >
          <input type='text' className='form-control' id='buscaAno' aria-describedby='emailHelp'
            placeholder='Digite o Ano' />
        </FormGroup>

        <FormGroup
          label='Mês: *'
          htmlFor='buscaMes'
        >
          <SelectMenu
            id='buscaMes'
            className='form-control'
            lista={meses}
          />
          {/* <select className='form-control' id='buscaMes'> */}

        </FormGroup>

        <FormGroup
          label='Tipo de Lançamento:'
          htmlFor='buscaTipo'
        >
          <SelectMenu
            id='buscaTipo'
            className='form-control'
            lista={tipo}
          />
        </FormGroup>

        <button type='button' className='btn btn-success'>Buscar</button>
        <button type='button' className='btn btn-danger'>Cadastrar</button>
      </Card>
    </div>
  )
}

export default ConsultaLancamentos