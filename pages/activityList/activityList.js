// pages/activityList/activityList.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentUserId:null,
    activityList:[
      {
        id:0,
        imgSrc:'../../static/img/2.jpg',
        name:'吃小龙虾',
        address:'啊哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈'
      },
      {
        id:1,
        imgSrc:'../../static/img/3.jpg',
        name:'吃粽子大赛',
        address:'啊哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈哈哈哈'
      }
    ]
  },

  handleClick(){
    wx.navigateTo({
      url: `../activityDetail/activityDetail`,
      success: function(res) {
        res.eventChannel.emit('personInfo', { data: {} })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      currentUserId:options.id
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
    console.log('onPullDownRefresh');
    // this.setData({
    //   personList:[]
    // })
    // this.getPersonList()
    wx.stopPullDownRefresh()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    console.log('onReachBottom');
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})