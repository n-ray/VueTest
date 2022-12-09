const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  //开启代理服务器
 /*  devServer: {//第1种方式
    proxy: 'http://localhost:5000'
  }, */
  //第2种方式
  devServer: {
    proxy: {
      '/zgrget': {//请求前缀 只要前缀匹配就会返回请求
        target: 'http://localhost:5000',//请求服务器的端口号
        pathRewrite:{"^/zgrget":""},
        ws: true,//用于支持websocket 默认true
        changeOrigin: true //默认true 用于控制请求头中的host值 
        //为true的时候服务器收到的请求头中的host为:localhost:5000
        //为false的时候服务器收到的请求头中的host为:localhost:8080
      }
    }
  }
 

})
