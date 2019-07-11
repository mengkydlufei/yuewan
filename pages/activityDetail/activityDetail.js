import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

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
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000,
    timer:null
  },

  handlePreviewImg(e){
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },

  handleAcceptActivity(e){
    const {currentTarget:{dataset:{activityId,personStatus}}}=e
    console.log('activityId: ', activityId);
    if(personStatus===0) {
       Toast.fail({
        duration:2000,
        message:`${this.data.personInfo.name}\n暂不可预约`
      })
      return
    }
    wx.navigateTo({
      url: `../submitOrder/submitOrder`,
      success: (res) => {
        res.eventChannel.emit('activityInfo', { data: {price:99,...this.data.personInfo} })
      }
    })
  },

  previewUserDetail(e){
    // const {currentTarget:{dataset:{id}}} = e
    wx.navigateTo({
      url: `../postUserDetail/postUserDetail`,
      success: (res) => {
        res.eventChannel.emit('postUserInfo', { data: this.data.personInfo })
      }
    })
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
      // wx.setNavigationBarTitle({
      //   title: this.data.personInfo.name
      // })
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