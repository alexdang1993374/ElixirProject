import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { useAuth } from 'hooks'
import Login from 'pages/Login'
import Register from 'pages/Register'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  }
}

export default function App() {
  const { login, register, loading, error, user } = useAuth()

  return (
    <div style={styles.container}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Login onSubmit={login} {...props} />}
          />

          <Route
            exact
            path="/register"
            component={(props) => <Register onSubmit={register} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  )
}
