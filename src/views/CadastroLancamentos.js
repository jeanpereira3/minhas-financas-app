import React, { useEffect, useState } from 'react'

import { useNavigate, Link, useParams } from 'react-router-dom'

import { useLancamentoService } from '../hooks/useLancamentoService'
import { useToast } from '../hooks/useToastr'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'
import { useAuthValue } from '../context/AuthContext'

const CadastroLancamentos = () => {


  const [descricao, setDescricao] = useState('')
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('')
  const [status, setStatus] = useState('')

  const { user } = useAuthValue()
  const usuario = user

  const [opcao, setOpcao] = useState(false)



  const {
    listaTipo,
    listaMeses,
    salvarLancamento,
    getLancamentosPorId,
    atualizarLancamento
  } = useLancamentoService()
  const { mensagemSucesso, mensagemErro } = useToast()

  const navigate = useNavigate()
  const { id } = useParams()

  const salvar = () => {
    const msgs = validar()

    if (msgs && msgs.length > 0) {
      msgs.forEach(msg => {
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
      usuario: usuario.id
    }).then(response => {
      mensagemSucesso('Lancamento cadastrado com sucesso.')
      navigate('/consulta-lancamentos')
    }).catch(error => {
      mensagemErro(error.response.value)
    })
  }

  const atualizar = () => {
    atualizarLancamento({
      id,
      descricao,
      ano,
      mes,
      valor,
      tipo,
      status,
      usuario: usuario.id
    }).then(response => {
      mensagemSucesso('Lancamento atualizado com sucesso.')
      navigate('/consulta-lancamentos')
    }).catch(error => {
      mensagemErro(error.response.value)
    })
  }

  useEffect(() => {
    if (id) {
      getLancamentosPorId(id)
        .then(response => {
          setDescricao(response.data.descricao)
          setMes(response.data.mes)
          setAno(response.data.ano)
          setValor(response.data.valor)
          setTipo(response.data.tipo)
          setStatus(response.data.status)
          setOpcao(true)
        }).catch(error => {
          mensagemErro(error.response.value)
        })
    }

  })

  const validar = () => {
    const msgs = []

    if (!descricao) {
      msgs.push('O campo Descri????o ?? obrigatorio.')
    }

    if (!ano) {
      msgs.push('O campo Ano ?? obrigatorio.')
    } else if (ano.length !== 4) {
      msgs.push('Informe um Ano v??lido.')
    }

    if (!mes) {
      msgs.push('Informe um M??s v??lido.')
    }

    if (!valor) {
      msgs.push('Informe um Valor.')
    } else if (valor <= 0) {
      msgs.push('Informe um Valor v??lido.')
    }

    if (!tipo) {
      msgs.push('Informe um Tipo.')
    }

    return msgs
  }

  return (
    <div className='container'>
      <Card title={opcao ? 'Atualizar lancamento' : 'Cadastar lancamento'}>
        <FormGroup
          label='Descri????o: *'
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
          label='M??s: *'
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

        {opcao ? (
          <button
            type='button'
            className='btn btn-success'
            onClick={atualizar}
          >Atualizar</button>
        ) : (
          <button
            type='button'
            className='btn btn-success'
            onClick={salvar}
          >Salvar</button>
        )}


        <Link
          to={'/consulta-lancamentos'}
          type='button'
          className='btn btn-danger'>Cancelar</Link>
      </Card>
    </div>
  )
}

export default CadastroLancamentos