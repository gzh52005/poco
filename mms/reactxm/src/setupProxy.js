const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // /api 表示代理路径
  // target 表示目标服务器的地址
  app.use(
    createProxyMiddleware('/dev-api', {
    // http://localhost:8080/ 地址只是示例，实际地址以项目为准
      target: 'http://120.76.247.5:2001',
      
      changeOrigin: true, //是否跨域，如果target是域名则需要配置，如果是ip地址不需要
      // 重写接口路由
      pathRewrite: {
        '^/dev-api': '' 
      }
    })
  )
}