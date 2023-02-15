# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


- npm run dev  运行的流程
    1. package.json script 脚本
        dev development 开发阶段  src/
        build   开发完了，答辩上线做准备 dist/
    2. vite 最快的工程化
        index.html首页 3000 http-server
        启动起来
    3. src/main.js作为单点入库文件
        vite特别之处，script type="module" js支持es6的模块化
        实例化vue app
        并把App组件挂载到#app节点上
    4. 基于模块依赖 代码组织起来

- redirect 细节
    1. localhost:3000/
        HTTP 请求响应式的
        - index.html已经发送到浏览器并显示
        - App.vue已挂载
    2. router
        / redirect
        302 /introduce

    header + main.content
    导航 nav App.vue + router-view 页面级别组件

- 路由守卫
    1. 鉴权
        to + token +login meta
    2. document.title + name匹配的标题 utils config.js
    3. layout 布局状态 login不需要侧边栏
    4. 用户直接从非/ 进入，分享点击
        state.currentPath = to.path

- 表单组件
    el-form
    el-form-item
    el-input
    容器组件
    子组件  受控组件
    - label-position
    - :rules="state.rules"   在el-form容器组件中统一设置
        数组 每个input的输入规则
    - ：model='state.formData'表单为收集数据而来
        {
            "username":;
            "password":
        }
        el-form-item prop="username"
            el-input v-model="state.formData.username"
    - ref="loginForm"
        el-form对象组件也是对象 这个对象上的方法
