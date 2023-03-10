import React from 'react'

const LancamentosTable = (props) => {

  var currencyFormatter = require('currency-formatter') 

  const rows = props.lancamentos.map((lancamento, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{lancamento.descricao}</th>
        <td>{currencyFormatter.format(lancamento.valor, { code: 'BRL' })}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status}</td>
        <td>
          <button
            type='button'
            className='btn btn-success'
            disabled={lancamento.status !== 'PENDENTE'}
            onClick={e => props.alterarStatusLancamento(lancamento, 'EFETIVADO')}
          >Efetivar</button>
          <button
            type='button'
            className='btn btn-warning'
            disabled={lancamento.status !== 'PENDENTE'}
            onClick={e => props.alterarStatusLancamento(lancamento, 'CANCELADO')}
          >Cancelar</button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={e => props.editar(lancamento)}
          >Editar</button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={e => props.abrirConfirmacao(lancamento)}
          >Deletar</button>
        </td>
      </tr>
    )
  })

  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='bs-component'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Descrição</th>
                <th scope='col'>Valor</th>
                <th scope='col'>Tipo</th>
                <th scope='col'>Mês</th>
                <th scope='col'>Situação</th>
                <th scope='col'>Ações</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LancamentosTable