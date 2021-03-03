import React from 'react'
import axios from 'axios'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from 'pages/Login'
import Register from 'pages/Register'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'white'
  }
}

export default function App() {
  async function submit(username, password) {
    const url = 'http://localhost:4000/register'

    const data = {
      username,
      password
    }

    try {
      const result = await axios({
        url,
        method: 'post',
        data
      })

      console.log({ result })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={styles.container}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Login onSubmit={submit} {...props} />}
          />

          <Route
            exact
            path="/register"
            component={(props) => <Register onSubmit={submit} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  )
}
