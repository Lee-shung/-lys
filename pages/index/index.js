import {showLoading,hideLoading} from './../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  detail(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      wx.request({
        url: 'https://route.showapi.com/87-60?showapi_appid=167149&showapi_sign=f8b9f9cd6f9747b9ab6e16a06cf2bcc1&provinceName=湖南',
        success: res => {
          hideLoading();
          this.setData({
            hospitalList:res.data.showapi_res_body.hospitalList,
            page:res.data.showapi_res_body.page
          })
        }
      });
      
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
     showLoading();
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
      wx.showLoading({
        title: '数据加载中',
      })
      let page = this.data.page*1 + 1;
      wx.request({
        url: 'https://route.showapi.com/87-60?showapi_appid=167149&showapi_sign=f8b9f9cd6f9747b9ab6e16a06cf2bcc1&provinceName=湖南&page='+page,
        success: res => {
          wx.hideLoading();
          let newData = res.data.showapi_res_body.hospitalList;
          let result = this.data.hospitalList.concat(newData);
          this.setData({
              hospitalList:result
          })
        }
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})