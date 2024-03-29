// pages/postUserDetail/postUserDetail.js
Page({

  /**
   * Page initial data
   */
  data: {
    postUserInfo:{},
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000,
  },

  handlePreviewImg(e){
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('postUserInfo', (res)=> {
      this.setData({
        postUserInfo:res.data,
        imgUrls:[res.data.imgSrc]
      })
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})