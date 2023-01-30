import React from 'react'
import { useState } from 'react'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'

import { useLancamentoService } from '../hooks/useLancamentoService'
import { useToast } from '../hooks/useToastr'
import LocalStorage from '../ultils/LocalStorage'

const ConsultaLancamentos = () => {
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [tipo, setTipo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [lancamentos, setLancamentos] = useState([])

  const { getLancamentos, listaMeses, listaTipo } = useLancamentoService()
  const { mensagemErro } = useToast

  const buscar = () => {
    const usuarioLogado = LocalStorage.getItem('_usuario_logado')

    getLancamentos({
      ano,
      mes,
      tipo,
      descricao,
      usuario: usuarioLogado.id
    }).then(response => {
      setLancamentos(response.data)
    }).catch(erro => {
      mensagemErro(erro.response.data)
    })
  }

  return (
    <div className='container'>
      <Card title='Consulta Lançamento'>
        <FormGroup
          label='Ano: '
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
          label='Mês: '
          htmlFor='buscaMes'
        >
          <SelectMenu
            id='buscaMes'
            className='form-control'
            lista={listaMeses()}
            value={mes}
            onChange={e => setMes(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Descrição: '
          htmlFor='buscaDescricao'
        >
          <input
            type='text'
            id='buscaDescricao'
            className='form-control'
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </FormGroup>

        <FormGroup
          label='Tipo de Lançamento:'
          htmlFor='buscaTipo'
        >
          <SelectMenu
            id='buscaTipo'
            className='form-control'
            lista={listaTipo()}
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