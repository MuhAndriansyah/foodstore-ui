import { USER_LOGIN, USER_LOGOUT } from './constans'

export function userLogin(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token
  }
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  }
}
