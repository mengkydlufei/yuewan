// pages/home/home.js
// import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({

  /**
   * Page initial data
   */
  data: {
    personList:[],
    timer:null,
  },

  handleCardClick(res){
    const {detail:id} = res
    const clickedPerson = this.data.personList.find(item=>item.id===id)
    console.log('clickedPerson: ', clickedPerson);
    // Toast.success({
    //   duration:2000,
    //   message:`${clickedPerson.name}`
    // })
    wx.navigateTo({
      url: `../person_detail/person_detail?id=${id}`,
      success: function(res) {
        res.eventChannel.emit('personInfo', { data: clickedPerson })
      }
    })
  },
  getPersonList:function(page=0,size=7){
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    let tempList = []
    let baseObj = {
      id:1,
      name:'guygubaby',
      imgSrc:'../../static/img/2.png',
      location:'上海市',
      isLiked:false,
      likeCount:0,
      title:"this is xixi"
    }
    for( let i = 0; i < size ; i++ ){
      baseObj = {...baseObj,id:i,name:`mistletoe${i}`,imgSrc:`../../static/img/${i+1}.png`} 
      tempList.push(baseObj)
    }
    const timer = setTimeout(() => {
      this.setData({
        personList:[...this.data.personList,...tempList]
      })    
      wx.hideLoading()
      if(this.data.timer){
        clearTimeout(this.data.timer)
      }
    }, 1000);
    this.setData({
      timer:timer
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getPersonList()
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
    this.setData({
      personList:[]
    })
    this.getPersonList()
    wx.stopPullDownRefresh()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.getPersonList()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})