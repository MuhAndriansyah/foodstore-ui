import axios from 'axios'
import { config } from '../config'
import store from '../app/store'
import { setItems } from '../features/Cart/actions'

//Menyimpat data cart ke db mongo
export async function saveCart(token, cart) {
  return await axios.put(
    `${config.api_host}/api/carts`,
    { items: cart },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )
}

//Memuat data cart
export async function getDataCart() {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  if (!token) return

  let { data } = await axios.get(`${config.api_host}/api/carts`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  //Lakukan pengecekan data, jika data berhasil maka
  // dispatch setItems
  if (!data.error) {
    store.dispatch(setItems(data))
  }
}
