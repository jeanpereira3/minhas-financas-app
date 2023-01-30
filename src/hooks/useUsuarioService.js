import httpClient from '../axiosConfig/axiosConfig'

export const useUsuarioService = () => {

  const USUARIO_URL = '/api/usuarios'

  const autenticar = (data) => {
    return httpClient.post(`${USUARIO_URL}/autenticar` , data)
  }

  const getSaldo = (url) => {
    return httpClient.get(`${USUARIO_URL}/${url}/saldo`)
  }

  const cadastrarUsuario = (data) => {
    return httpClient.post(`${USUARIO_URL}/`, data)
  }

  return {
    autenticar,
    getSaldo,
    cadastrarUsuario,
  }
}

