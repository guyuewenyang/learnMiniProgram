// Pages/Catagery/catagery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','帽子'],
    number_count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }, 

  buttonAction (event){

    console.log('当前选中的是：' + event.detail.title)
  },

  handleChange (){
    const cmmp = this.selectComponent(".my_cmp")
    console.log(cmmp)
    cmmp.setData({
      num:10
    })
    cmmp.changeCurrentIndexFunction(3)
  }
})