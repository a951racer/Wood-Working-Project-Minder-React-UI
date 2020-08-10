import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API + '/auth/login'

export default class AuthAPI {

  async login(email, password) {
    const res = await axios.post(apiRoot, {email, password})
    return res.data
  }
}