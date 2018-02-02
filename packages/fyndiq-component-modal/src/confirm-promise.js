import ConfirmWrapper from './confirm-wrapper'

export default modal =>
  new Promise(resolve => {
    ConfirmWrapper.setConfirm(modal, resolve)
  })
