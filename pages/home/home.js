// pages/home/home.js
// import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({

  /**
   * Page initial data
   */
  data: {
    personList:[]
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
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // this.setData({
    //   personList:
    // })
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
    for( let i = 0; i < 7 ; i++ ){
      baseObj = {...baseObj,id:i,name:`mistletoe${i}`,imgSrc:`../../static/img/${i+1}.png`} 
      tempList.push(baseObj)
    }
    this.setData({
      personList:[...tempList,...tempList,...tempList]
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