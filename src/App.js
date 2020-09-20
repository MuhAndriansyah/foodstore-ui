/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import 'upkit/dist/style.min.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './app/store'
import { listen } from './app/listener'
import Register from './pages/Register'
import Login from './pages/Login'
import RegisterSuccess from './pages/RegisterSuccess'
import { getDataCart } from './api/cart'
import UserAddressAdd from './pages/UserAddressAdd'
import UserAddress from './pages/UserAddress'
import Checkout from './pages/Checkout'
import Invoice from './pages/Invoice'
import UserAccount from './pages/UserAccount'
import UserOrders from './pages/UserOrders'
import Logout from './pages/Logout'
import GuardRoute from './components/GuardRoutes'
import GuestOnlyRoute from './components/GuestRouteOnly'
function App() {
  useEffect(() => {
    listen()
    getDataCart()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <GuardRoute path="/logout">
            <Logout />
          </GuardRoute>
          <GuardRoute path="/pesanan">
            <UserOrders />
          </GuardRoute>
          <GuardRoute path="/account">
            <UserAccount />
          </GuardRoute>
          <GuardRoute path="/invoice/:order_id">
            <Invoice />
          </GuardRoute>
          <GuardRoute path="/checkout">
            <Checkout />
          </GuardRoute>
          <GuardRoute path="/alamat-pengiriman/tambah">
            <UserAddressAdd />
          </GuardRoute>
          <GuardRoute path="/alamat-pengiriman">
            <UserAddress />
          </GuardRoute>
          <GuestOnlyRoute path="/register/berhasil">
            <RegisterSuccess />
          </GuestOnlyRoute>
          <GuestOnlyRoute path="/register">
            <Register />
          </GuestOnlyRoute>
          <GuestOnlyRoute path="/login">
            <Login />
          </GuestOnlyRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
