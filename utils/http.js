import api from './api'

const url = api.baseUrl

class Http {
  request(api,data={},method){
    return new Promise((resolve,reject) => {
      wx.request({
        url: url + api,
        method,
        data,
        success: (result) => {
          let res = result.data
          resolve(res)
        },
        fail:(res) => {
          reject(res)
        }
      })
    })
  }

  get(api,data={}){
    return this.request(api,data,'get')
  }

  post(api,data={}){
    return this.request(api,data,'post')
  }
}

const http = new Http()

module.exports = {
  http
}