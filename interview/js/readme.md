-  js 面试准备思路
    1. 覆盖高频考点
    2. 全面 准确 深度的介绍

-  扁平化  flatten
    将多层级数组转化为一维数组

    1. 递归思想
    2. API
    3. 业务需求
        多维数组->一维数组


-  localStorage本地存储html5重要功能
    -  cookie 身份状态  随着http每次发送
        HTTP无状态协议 Stateless  cookie 弥补这个缺陷  
            Stateless:  
                    1. 每次请求是独立的   
            快  服务器响应简单  
                    2. 没有事务记忆能力  
            基于请求响应 公平    
                登录  购物车 评论 点赞 cookie  字符串格式 a=1;b=2  
                domain  
        HTTP 头部信息  更小< 4kb  
        url长度
        域名 同一个域名的所有请求都会带上cookie 服务器  解析cookie
        导致请求的性能有影响  

    -  LocalStorage 不需要每次http请求都发送
        本地存储 domain  
        大小也有限制 5M 存储用户的设置、草稿箱、首页列表  
    
        JSON.stringify()序列化  
        JSON.parse反序列化  

- 扁平化
    js开发中经常需要把一个多维数组一维化，flatten  

    1. 遍历数组+Array.isArray递归，传统解决
    2. reduce 可以优化命令式，解决更优美
        [] result pre  已经扁平化的部分数组，cur Array.isArray递归
    3. 将数组序列化后（JSON.stringify）得到字符串，正则替换[],然后使用splice切割 或 最外层加[],最后反序列化(JSON.parse)，得到一维数组
    4. es10 Array.flat(Infinity)
    5. 为了兼容性，不重复造轮子，使用lodash库

- reduce map  some filter find  为高阶函数  
    高阶函数需满足函数的参数是函数，或者返回值是函数  
    - 闭包  高阶函数 返回值是函数
    - map...参数是函数
    - map
        es6数组的API,基于一个数组每一项执行一个函数，函数的返回值组成一个新的数组
        1. 数组中的每一项都调用一个提供的函数，返回的结果组成新的数组
        2. 全新的函数式编程风格，更好理解
        3. 原来的数组不会受到影响