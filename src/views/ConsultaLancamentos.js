import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Card from '../components/Card'
import FormGroup from '../components/FormGroup'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import { useLancamentoService } from '../hooks/useLancamentoService'
import { useToast } from '../hooks/useToastr'
import { useAuthValue } from '../context/AuthContext'

const ConsultaLancamentos = () => {
  const [ano, setAno] = useState('')
  const [mes, setMes] = useState('')
  const [tipo, setTipo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [lancamentos, setLancamentos] = useState([])
  const [lancamentoADeletar, setLancamentoADeletar] = useState()

  const { user } = useAuthValue()

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate()

  const {
    getLancamentos,
    listaMeses,
    listaTipo,
    deletarLancamento,
    atualizarStatusLancamento
  } = useLancamentoService()
  const {
    mensagemErro,
    mensagemSucesso,
    mensagemAlerta
  } = useToast()

  const buscar = () => {

    getLancamentos({
      ano,
      mes,
      tipo,
      descricao,
      usuario: user.id
    }).then(response => {
      if (response.data.length < 1) {
        mensagemAlerta('Nenhum resultado encontrado.')
      }

      setLancamentos(response.data)
    }).catch(erro => {
      mensagemErro(erro.response.data)
    })
  }

  const deletar = () => {
    deletarLancamento(lancamentoADeletar.id).then(response => {
      setLancamentos((current) =>
        current.filter(
          (element) =>
            element.id !== lancamentoADeletar.id
        )
      );

      mensagemSucesso('Lancamento deletado com sucesso.')
    }).catch(erro => {
      mensagemErro(erro.response.data)
    })

    setVisible(false)
  }

  const alterarStatusLancamento = (lancamento, status) => {
    atualizarStatusLancamento(lancamento, status)
      .then(response => {
        const novoLancamento = lancamentos.map(objeto => {
          if (objeto.id === lancamento.id) {
            return { ...objeto, status: status }
          }
          return objeto
        })

        setLancamentos(novoLancamento)
        mensagemSucesso('Status do Lancamento alterado com sucesso.')
      }).catch(erro => {
        mensagemErro(erro.response.data)
      })
  }

  const abrirConfirmacao = (lancamento) => {
    setVisible(true)
    setLancamentoADeletar(lancamento)
  }

  const editar = (lancamento) => {
    navigate(`/cadastrar-lancamentos/${lancamento.id}`)
  }


  const footerContent = (
    <div>
      <Button label="N??o" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Sim" icon="pi pi-check" onClick={deletar} autoFocus />
    </div>
  );

  return (
    <div className='container'>
      <Card title='Consulta Lan??amento'>
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
          label='M??s: '
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
          label='Descri????o: '
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
          label='Tipo de Lan??amento:'
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
        <Link to={'/cadastrar-lancamentos'} type='button' className='btn btn-danger'>Cadastrar</Link>

        <LancamentosTable
          lancamentos={lancamentos}
          abrirConfirmacao={abrirConfirmacao}
          editar={editar}
          alterarStatusLancamento={alterarStatusLancamento}
        />
      </Card>

      <div className="card flex justify-content-center">
        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
          <p className="m-0">
            Confirma a exclus??o deste Lancamento?
          </p>
        </Dialog>
      </div>
    </div>
  )
}

export default ConsultaLancamentos