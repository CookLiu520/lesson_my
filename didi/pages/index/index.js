// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 25.952069,
    longitude: 115.415508,
    // markers: [
    //   {
    //     id: 1,
    //     iconPath: "/images/map-bycycle.png",
    //     "callout": {
    //       content:"有车",
    //       display:'ALWAYS',
    //       bgColor:'#000',
    //       color:'#fff',
    //     },
    //     latitude: 25.952069,
    //     longitude: 115.415508
    //   }
    // ],
    markers:[],
    map: null,
  },
  toReset(){
    this.data.map.moveToLocation();
  },
  onShow(){
    this.data.map = wx.createMapContext('myMap');

  },

  
  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.getLocation({
      type: 'gcj02',
      // 箭头函数 可以不用写function 
      success: (res) => {
        wx.hideLoading()
        // console.log(res, '//////')
        // es6 的解构 数组  json  
        // es6 漂亮的语法  数据 一部分 解析出来
        // 并成为我们局部变量  
        let { latitude, longitude } = res; // json 
        this.setData({
          latitude: latitude,
          longitude: longitude
        })
        // 模块化
        this.tocreate(res);
      }
    })
  },
  // 附近的车
  tocreate(res){
    // console.log(res);
    let markers = [];
    let ran = Math.ceil(Math.random()*20+5);
    for (let i = 0; i < ran; i++) {
      let obj = {
        id:i,
        iconPath:"/images/map-bycycle.png",
        "callout": {
          content:"有车",
          display:'ALWAYS',
          bgColor:'#000',
          color:'#fff',
        },
        
      latitude: this.data.latitude+(Math.random()-0.5)/100,
      longitude:this.data.longitude+(Math.random()-0.5)/100,
      width:52,
      height:30,
      }
      markers.push(obj);
      console.log(markers);
    }
    this.setData({
        markers:markers
    })
  },
  
})
