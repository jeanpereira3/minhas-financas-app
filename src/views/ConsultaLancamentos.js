import React from 'react'
import { useState } from 'react'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'

import {useLancamentoService} from '../hooks/useLancamentoService'
import { useToast } from '../hooks/useToastr'
import LocalStorage from '../ultils/LocalStorage'

const ConsultaLancamentos = () => {
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [tipo, setTipo] = useState('')
  const [lancamentos, setLancamentos] = useState([])

  const { getLancamentos } = useLancamentoService()
  const { mensagemErro } = useToast

  const buscar = () => {
    const usuarioLogado = LocalStorage.getItem('_usuario_logado')

    getLancamentos({
      ano,
      mes,
      tipo,
      usuario: usuarioLogado.id
    }).then( response => {
      setLancamentos(response.data)
    }).catch(erro => {
      mensagemErro(erro.response.data)
    })
  }


  const meses = [
    { label: 'Selecione...', value: '' },
    { label: 'Janeiro', value: 1 },
    {
      label: 'Fevereiro',
      value: 2
    },
    { label: 'Março', value: 3 },
    { label: 'Abril', value: 4 },
    { label: 'Maio', value: 5 },
    { label: 'Junho', value: 6 },
    { label: 'Julho', value: 7 },
    { label: 'Agosto', value: 8 },
    { label: 'Setembro', value: 9 },
    { label: 'Outubro', value: 10 },
    { label: 'Novembro', value: 11 },
    { label: 'Desembro', value: 12 }
  ]

  const tipoLancamento = [
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
          <input
            type='text'
            className='form-control'
            id='buscaAno'
            placeholder='Digite o Ano'
            value={ano}
            onChange={e => setAno(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Mês: *'
          htmlFor='buscaMes'
        >
          <SelectMenu
            id='buscaMes'
            className='form-control'
            lista={meses}
            value={mes}
            onChange={e => setMes(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Tipo de Lançamento:'
          htmlFor='buscaTipo'
        >
          <SelectMenu
            id='buscaTipo'
            className='form-control'
            lista={tipoLancamento}
            value={tipo}
            onChange={e => setTipo(e.target.tipo)}
          />
        </FormGroup>

        <button
          type='button'
          className='btn btn-success'
          onClick={buscar}
        >Buscar</button>
        <button type='button' className='btn btn-danger'>Cadastrar</button>

        <LancamentosTable lancamentos={lancamentos} />
      </Card>
    </div>
  )
}

export default ConsultaLancamentos