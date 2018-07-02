// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tonggaoDetail:'',
    maxlength:500
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
  computedNum:function(e){
    this.setData({
      tonggaoDetail:e.detail.value
    })
  },
  submit:function(){
    var that = this;
    getApp().globalData.tosetting = {
      _tonggaoDetail: that.data.tonggaoDetail
    };
    wx.switchTab({
      url: '../setting/setting',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: '发布公告'
        })
      }
    })
  }
})