import * as yup from 'yup'

const validationSchema = () => {
  /* istanbul ignore next */
  return yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
}

export default validationSchema
