import ConfirmWrapper from './confirm-wrapper'

export default modal =>
  new Promise(resolve => {
    ConfirmWrapper.setConfirm(modal, validate => {
      if (validate) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
