import httpClient from '../axiosConfig/axiosConfig'

const USUARIO_URL = '/api/usuarios'

export const useUsuarioService = () => {

  const autenticar = (data) => {
    return httpClient.post(`${USUARIO_URL}/autenticar` , data)
  }

  return {
    autenticar,
  }
}

