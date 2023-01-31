import httpClient from "../axiosConfig/axiosConfig";

export const useLancamentoService = () => {

  const LANCAMENTO_URL = '/api/lancamentos'

  const getLancamentos = (lancamentosFiltro) => {
    let params = `${LANCAMENTO_URL}?ano=${lancamentosFiltro.ano}`

    if (lancamentosFiltro.mes) {
      params = `${params}&mes=${lancamentosFiltro.mes}`
    }

    if (lancamentosFiltro.tipo) {
      params = `${params}&tipo=${lancamentosFiltro.tipo}`
    }

    if (lancamentosFiltro.usuario) {
      params = `${params}&usuario=${lancamentosFiltro.usuario}`
    }

    if (lancamentosFiltro.descricao) {
      params = `${params}&descricao=${lancamentosFiltro.descricao}`
    }

    return httpClient.get(params)
  }

  const deletarLancamento = (id) => {
    return httpClient.delete(`${LANCAMENTO_URL}/${id}`)
  }

  const listaMeses = () => {
    return [
      { label: 'Selecione...', value: '' },
      { label: 'Janeiro', value: 1 },
      { label: 'Fevereiro', value: 2 },
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
  }

  const listaTipo = () => {
    return [
      { label: 'Selecione...', value: '' },
      { label: 'Receita', value: 'RECEITA' },
      { label: 'Despesa', value: 'DESPESA' }
    ]
  }

  return {
    getLancamentos,
    listaMeses,
    listaTipo,
    deletarLancamento,
  }
}