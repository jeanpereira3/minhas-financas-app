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

    return httpClient.get(params)
  }

  return {
    getLancamentos,
  }
}