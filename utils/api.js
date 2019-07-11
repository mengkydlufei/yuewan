import http from './http'

const baseUrl = 'https://localhost/'

const user = {
  login(){
    return http.post('/login',{})
  }
}

module.exports = {
  baseUrl,
  user
}