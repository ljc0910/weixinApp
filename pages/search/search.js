// pages/search/search.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    alertBox:'',
    warnBox: '',  
    salary:'',  
    startTime:'',
    endTime:'',
    testArr:['100以下','100-200','200-500','500-1000','1000以上']
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
  salaryChange:function(e){
    this.setData({
      salary: e.detail.value
    })
  },
  startChange:function(e){
    this.setData({
      startTime:e.detail.value
    })
  },
  endChange: function (e) {
    if(this.data.startTime){
      if (new Date(this.data.startTime).getTime() <= new Date(e.detail.value).getTime()){
        this.setData({
          endTime: e.detail.value
        })
      }else{
        this.setData({
          warnBox: true
        })
      }
    }else{
      this.setData({
        alertBox: true
      })
    }

    if (this.data.alertBox || this.data.warnBox){
      var that = this;
      setTimeout(function () {
        that.setData({
          warnBox:'',
          alertBox:''
        })
      }, 1000)
    }
  },
  timeClear:function(){
    this.setData({
      startTime: '',
      endTime: ''
    })
  },
  salaryClear: function () {
    this.setData({
      salary:''
    })
  },
  submit:function(){
    var that = this;
    getApp().globalData.toindex = {
      _startTime: that.data.startTime,
      _endTime: that.data.endTime,
      _salary: that.data.testArr[that.data.salary]
    };
    wx.switchTab({
      url: '../index/index',
      success: function (res) {
        wx.setNavigationBarTitle({
          title: '通告助手'
        })
      }
    })
  }
})