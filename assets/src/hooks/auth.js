import { useState } from 'react'
import axios from 'axios'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function login({ username, password }) {
    const url = 'http://localhost:4000/login'

    const data = {
      username,
      password
    }

    setLoading(true)

    try {
      const result = await axios({
        url,
        method: 'post',
        data
      })

      setUser(result)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  async function register({ username, password }) {
    const url = 'http://localhost:4000/register'

    const data = {
      username,
      password
    }

    setLoading(true)

    try {
      const result = await axios({
        url,
        method: 'post',
        data
      })

      setUser(result)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  return {
    login,
    register,
    user,
    loading,
    error
  }
}
