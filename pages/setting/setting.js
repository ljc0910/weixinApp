// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tonggaoType:['模特','影视表演','主持','音乐舞蹈','网红推广','动漫游戏','段视频','其他'],
    typeNum:'',
    startTime: '',
    endTime: '',
    salary: '',
    salaryArr: ['100以下', '100-200', '200-500', '500-1000', '1000以上'],
    labelGroup: ['MV', 'TVC', '广告片', '节目组', '宣传片', '主持', '网红推广', '动漫游戏'],
    _tonggaoDetail:'',//页面传参
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
    if (getApp().globalData.tosetting) {
      this.setData({
        _tonggaoDetail: getApp().globalData.tosetting._tonggaoDetail
      });
    }
    wx.setNavigationBarTitle({
      title: '发布通告'
    })
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
  typeChange:function(e){
    this.setData({
      typeNum: e.detail.value
    })
  },
  startChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  endChange: function (e) {
    if (this.data.startTime) {
      if (new Date(this.data.startTime).getTime() <= new Date(e.detail.value).getTime()) {
        this.setData({
          endTime: e.detail.value
        })
      } else {
        this.setData({
          warnBox: true
        })
      }
    } else {
      this.setData({
        alertBox: true
      })
    }

    if (this.data.alertBox || this.data.warnBox) {
      var that = this;
      setTimeout(function () {
        that.setData({
          warnBox: '',
          alertBox: ''
        })
      }, 1000)
    }
  },
  salaryChange: function (e) {
    this.setData({
      salary: e.detail.value
    })
  },
  routerToDetail:function(){
    wx.navigateTo({
      url: '../detail/detail',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: '编辑详情'
        })
      }
    })
  }
})