import { debounce } from './../genericUtils'
import EventUtils from './../eventUtils'

let loadingRequestCount: number = 0

export const showLoading = () => {
  if (loadingRequestCount === 0) {
    console.log('showLoading')
    EventUtils.emit('aixos-loading', true)
  }
  loadingRequestCount++
}

export const hideLoading = () => {
  if (loadingRequestCount <= 0) {
    return
  }

  loadingRequestCount--

  if (loadingRequestCount === 0) {
    debounce(tryToClose, 500)()
  }
}

const tryToClose = () => {
  if (loadingRequestCount === 0) {
    console.log('hideLoading')
    EventUtils.emit('aixos-loading', false)
  }
}
