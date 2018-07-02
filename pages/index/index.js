var app = getApp();
Page({
  data: {
    cityes:['全国',"北京","上海","深圳","成都","广州","杭州"],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    selectMenuDis:0,//下拉菜单默认高度
    coverShadowDis:0,//阴影遮盖层
    rotate:0,
    _startTime:'',  //页面传参
    _endTime:'',
    _salary:''
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.checkCor(this.data.currentTab, e.detail.current);
    this.setData({
      currentTab: e.detail.current
    });
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    this.checkCor(this .data.currentTab, e.target.dataset.current);
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function (a,b) {
    var l=0;
    if(b<3){
       l=0
    } else if (b == 4) {
      l=96
    }
      else if(b==5){
       l=200
      }else{
        l = this.data.scrollLeft + (b - a) * 48
    }
    this.setData({
      scrollLeft: l
    })
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 144;
        that.setData({ 
          winHeight: calc
        });
      }
    });
  },
  onShow:function(){
    if (getApp().globalData.toindex) {
      this.setData({
        _startTime: getApp().globalData.toindex._startTime,
        _endTime: getApp().globalData.toindex._endTime,
        _salary: getApp().globalData.toindex._salary
      });
    }
  },
  selectMenu:function(){
    if (this.data.selectMenuDis==0){
      this.setData({
        selectMenuDis: '650rpx',
        coverShadowDis:'400rpx',
        rotate:180
      })
    }else{
      this.setData({
        selectMenuDis: 0,
        coverShadowDis:0,
        rotate: 0
      })
    }
  },
  routerToSearch:function(){
    wx.navigateTo({
      url:'../search/search',
      success: function (res) { 
        wx.setNavigationBarTitle({
          title: '筛选适合的通告'
        })
      }
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  footerTap: app.footerTap
})
