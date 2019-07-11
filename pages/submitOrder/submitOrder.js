// pages/submitOrder/submitOrder.js
Page({

  /**
   * Page initial data
   */
  data: {
    activityInfo:{},
    remark:'',
    isLoading:false,
    timer:null
  },

  handleSubmitOrder(){
    this.setData({
      isLoading:true
    })
    const timer = setTimeout(() => {
      this.setData({
        isLoading:false,
        timer
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
      if(this.data.timer){
        clearTimeout(this.data.timer)
      }      
    }, 1000);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('activityInfo', (res)=> {
      this.setData({
        activityInfo:res.data,
      })
      console.log(this.data.activityInfo);
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