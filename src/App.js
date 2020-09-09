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

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path="/login" component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/register/berhasil" component={RegisterSuccess} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
