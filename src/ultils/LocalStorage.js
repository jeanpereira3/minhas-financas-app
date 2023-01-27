export default class LocalStorage {

  static getItem(chave){
    const item = localStorage.getItem(chave)
    return JSON.parse(item)
  }

  static setItem(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
  }
}