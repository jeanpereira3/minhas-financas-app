import httpClient from "../axiosConfig/axiosConfig"
import LocalStorage from "../ultils/LocalStorage"
import jwt_decode from "jwt-decode";
import { useState } from "react";

export const useAuthentication = () => {

  //const [usuarioLogado, setUsuarioLogado] = useState()

  const auth = () => {
    const user = LocalStorage.getItem('_usuarioLogado')
    if (user) {
      const token = user['token']
      const claims = jwt_decode(token)
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`

      if (tokenValido(claims)) {
        const usuarioLogado = {
          id: claims.id,
          nome: claims.nome
        }
        return usuarioLogado
      } else {
        logout()
      }


    }


  }

  const logout = () => {
    LocalStorage.deleteItem('_usuarioLogado')
    window.location.reload()
  }

  const createUser = (usuario) => {
    return LocalStorage.setItem('_usuarioLogado', usuario)
  }

  const tokenValido = (claims) => {
    const expiracao = claims.exp
    return Date.now() < (expiracao * 1000)
  }

  return {
    auth,
    createUser,
    logout
  }
}
