// Pages/Home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Hello,胡文阳",
    age: 18,
    students: [{
        name: "why",
        age: 18,
        order: 1
      },
      {
        name: "tony",
        age: 19,
        order: 2
      },
      {
        name: "may",
        age: 17,
        order: 3
      }
    ],
    countRetain: 0

  },

  /**
   * button按钮的点击事件
   */
  btnAction() {
    // this.data.countRetain++;
    // console.log(this.data.countRetain);
    this.setData({
      countRetain: this.data.countRetain + 1
    })
  },

  btnAction1() {
    this.setData({
      countRetain: this.data.countRetain - 1
    })

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

  }
})