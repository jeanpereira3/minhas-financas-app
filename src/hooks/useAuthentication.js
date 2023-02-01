import LocalStorage from "../ultils/LocalStorage"

export const useAuthentication = () => {
  
  const auth =  LocalStorage.getItem('_usuarioLogado')

  const logout = () => {
    return LocalStorage.deleteItem('_usuarioLogado')
  } 

  const createUser = (usuario) =>{
    return  LocalStorage.setItem('_usuarioLogado', usuario)
  } 

  return {
    auth,
    createUser, 
    logout
  }
}