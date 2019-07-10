// pages/home/home.js
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';

Page({

  /**
   * Page initial data
   */
  data: {
    personList:[
      {
        id:0,
        name:'mistletoe',
        imgSrc:'../../static/img/1.png',
        location:'福州市',
        isLiked:false,
        likeCount:0,
        title:"i'm title"
      },
      {
        id:1,
        name:'guygubaby',
        imgSrc:'../../static/img/2.png',
        location:'上海市',
        isLiked:false,
        likeCount:0,
        title:"this is xixi"
      }
    ]
  },

  handleCardClick(res){
    const {detail:id} = res
    const clickedPerson = this.data.personList.find(item=>item.id===id)
    console.log('clickedPerson: ', clickedPerson);
    Toast({
      duration:2000,
      message:clickedPerson.name
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
      personList:tempList
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