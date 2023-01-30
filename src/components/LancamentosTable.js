import React from 'react'

const LancamentosTable = (props) => {
  const rows = props.lancamentos.map((lancamento, index) => {
    return (
      
        <tr key={index}>
          <th scope='row'>{lancamento.descricao}</th>
          <td>R$ {lancamento.valor}</td>
          <td>{lancamento.tipo}</td>
          <td>{lancamento.mes}</td>
          <td>{lancamento.status}</td>
          <td>
            <button type='button' className='btn btn-primary'>Editar</button>
            <button type='button' className='btn btn-danger'>Deletar</button>
          </td>
        </tr>
    )
  })

  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='page-header'>
          <h1 id='tables'></h1>
        </div>

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