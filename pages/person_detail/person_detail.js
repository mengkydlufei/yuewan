// pages/person_detail/person_detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    personInfo:{},
    imgUrls: [
      '../../static/img/1.jpg',
      '../../static/img/2.jpg',
      '../../static/img/3.jpg',
      '../../static/img/4.jpg',
      '../../static/img/5.jpg',
      '../../static/img/6.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000,
    timer:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    eventChannel.on('personInfo', (res)=> {
      this.setData({
        personInfo:res.data
      })
      console.log(this.data.personInfo);
      wx.setNavigationBarTitle({
        title: this.data.personInfo.name
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
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    const timer = setTimeout(() => {
      wx.hideLoading()
      wx.stopPullDownRefresh()
      if(this.data.timer){
        clearTimeout(this.data.timer)
      }
    }, 1000);
    this.setData({
      timer
    })
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