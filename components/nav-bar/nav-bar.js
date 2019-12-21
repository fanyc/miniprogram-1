// components/nav-bar.js
const app = getApp()
Component({
  properties: {
    title: {
      type: String,
      value: "导航栏"
    },
    showCapsule: {
      type: Number,
      value: 1
    }
  },
  data: {
    height: ''
  },
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      share: app.globalData.share
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  methods: {
    // 返回上一页面
    _navback() {
      wx.navigateBack()
    },
    //返回到首页
    _backhome() {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  }

}) 