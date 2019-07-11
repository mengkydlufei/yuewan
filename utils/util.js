import api from './api'

const url = api.baseUrl

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const chooseImage = () => {
  return new Promise((resolve,reject) => {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: url+'user/uploadFile',
          filePath: tempFilePaths[0],
          name: 'file',
          success: (result) => {
            let imgData = JSON.parse(result.data)
            resolve(imgData)
          },
          fail:(error) => {
            reject(error)
          }
        })
      },
    })
  })
}

module.exports = {
  formatTime,
  chooseImage
}
