import toastr from "toastr"

export const useToast = () => {

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  const mostrarMensagem = (titulo, mensagem, tipo) => {
    toastr[tipo](mensagem, titulo)
  }

  const mensagemSucesso = (mensagem) => {
    mostrarMensagem('Sucesso', mensagem, 'success')
  }

  const mensagemErro = (mensagem) => {
    mostrarMensagem('Erro', mensagem, 'error')
  }

  const mensagemAlerta = (mensagem) => {
    mostrarMensagem('Alerta', mensagem, 'warning')
  }

  return {
    mostrarMensagem,
    mensagemErro,
    mensagemSucesso,
    mensagemAlerta
  }
}

