import React from 'react'

import {
  FormControl,
  Paper,
  Box,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'

import validationSchema from './validation'

export default function Register({ onSubmit }) {
  const history = useHistory()

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        username: '',
        password: ''
      },
      validationSchema,
      onSubmit
    }
  )

  return (
    <Paper elevation={1}>
      <Box p={3}>
        <Typography variant="h5" align="center">
          Register
        </Typography>

        <FormControl margin="normal" fullWidth>
          <TextField
            name="username"
            label="Username"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={errors.username}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
        </FormControl>
      </Box>

      <Box p={3} pt={0}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Box>

      <Box p={3} pt={0}>
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => history.replace('/')}
        >
          Login
        </Button>
      </Box>
    </Paper>
  )
}
