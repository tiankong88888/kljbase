import FormData from 'form-data'
import { delay } from '../utils'
import Config from './config'

export const login = async params => {
  const { password, username, type } = params

  const form = new FormData()

  form.append('grant_type', 'password')
  form.append('scope', 'webclient')
  form.append('username', username)
  form.append('password', password)

  return fetch(Config.AUTH_URL, {
      method: 'post',
      headers: {
      Authorization: 'Basic dnNsd2ViOmQwbmdmQG5nYjByaXdlYg==',
      Accept: 'application/json',
      },
      body: form,
    })
    .then(res => res.json())
    .catch(error => {
      console.error(error)
    })
}