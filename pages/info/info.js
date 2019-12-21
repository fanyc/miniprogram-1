// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: "aaabbbc",
    cnt: 0,
    page: "普通",
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的主页', //导航栏 中间的标题
    }
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
  btn_click: function() {
    console.log(this.data.cnt)
    this.setData({
      cnt: this.data.cnt + 1
    })
  },
  oncommit: function(event) {
    console.log(event);
  },
  tabitem_selected: function(event) {
    console.log("tabitem_selected", event);
    this.setData({
      page: event.detail.name
    });
  },
  backToTop: function(e) {
    wx.pageScrollTo({
      scrollTop: 0,
    });
  }
})