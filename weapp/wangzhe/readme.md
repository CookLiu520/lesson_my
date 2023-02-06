- 小程序运行在哪？
  微信里，手机  客户端  服务端  cs 开发

- 小程序请求接口数据
  1. 先让页面加载，加载完成后 onload声明周期  
  2. wx.showloading(){}   wx.hideloading();
  2. wx.request({
      // 服务器数据url
      url: '',
      success:(res)=>{
        if(res.statusCode === 200){
          //解构
          let{ nav,heroList }=res.data;  
          // 设置
          this.setData({
            nav: nav,
            heroList: heroList
          })
        }
  
- 数据驱动的页面
  1. 先取数据
  2. 模板由数据驱动

- 样式有哪些地方？
  全局样式  页面样式

- 可滚动的导航
  scroll-view  小程序组件 
    x或y轴滚动 scroll-x="true"  
    滚动不换行 white-space: nowrap;
   