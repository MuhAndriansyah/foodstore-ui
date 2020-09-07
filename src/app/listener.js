import store from './store'

let currentAuth

function listener() {
  const previousAuth = currentAuth
  currentAuth = store.getState().auth

  if (previousAuth !== currentAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth))
  }
}

function listen() {
  // dengarkarn perubahan stote
  // fungsi store.subscribe untuk mendaftarkan fungsi listener
  store.subscribe(listener)
}

export { listen }
