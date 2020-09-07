/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import 'upkit/dist/style.min.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './app/store'
import { listen } from './app/listener'

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
