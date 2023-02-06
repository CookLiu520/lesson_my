// index.js
// 获取应用实例
const app = getApp()

Page({
  // 数据驱动{{}}
  data: {
   nav:[],
   heroList:[]
  },

  // 生命周期函数
  onLoad() {
  //  从客户端 去到 服务器端取数据
  // js主动的像api发送请求，把数据请求到本地来
  // 微信
  wx.showLoading({
    title: '加载中...',
  })
 
  wx.request({
    // 服务器数据url
    url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
    // 成功请求后 回调函数
    // 数据给res
    success:(res)=>{
      wx.hideLoading();
      // console.log(res)
      if(res.statusCode === 200){
        
        // let nav = res.data.nav;
        // console.log(nav);
        // let heroList = res.data.heroList;
        // console.log(heroList);
        let{ nav,heroList }=res.data;  //json

        // 设置data数据必须调用，不能赋值
        this.setData({
          nav: nav,
          heroList: heroList
        })
      }

  
     
    },
    fail:()=>{
      console.log('error');
    }

  })
  }
  
})
