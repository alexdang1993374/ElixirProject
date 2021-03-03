import React, { useState } from 'react'

import {
  FormControl,
  Paper,
  Box,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

export default function Login({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  return (
    <Paper elevation={1}>
      <Box p={3}>
        <Typography variant="h5" align="center">
          Login
        </Typography>

        <FormControl margin="normal" fullWidth>
          <TextField
            name="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
      </Box>

      <Box p={3} pt={0}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => onSubmit(username, password)}
        >
          Login
        </Button>
      </Box>

      <Box p={3} pt={0}>
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => history.replace('/register')}
        >
          Register
        </Button>
      </Box>
    </Paper>
  )
}
