import { http } from './http'
import { localStorage } from '../localStorage'

let githubKey = ''

localStorage.get('githubAcesstoken')
  ? githubKey = localStorage.get('githubAcesstoken')
  : githubKey = ''

const get = (url, options) => {
  return _request('get', `${url}?access_token=${githubKey}`, options)
}

const post = (url, body) => {
  return _request('post', url, body)
}

const del = (url, options) => {
  return _request('delete', url, options)
}

const patch = (url, body) => {
  return _request('patch', url, body)
}

const _request = (method, url, body) => {
  const params = [url, body]
  return http[method](...params)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export {
  get,
  post,
  del,
  patch
}
