//axios二次封装
const axios = require('axios');
// console.log(process.env.VUE_APP_BASE_API,8899)
// let url = process.env.VUE_APP_BASE_API;

const request = axios.create({
    // baseURL: '/dev-api',//设置基础路径
    baseURL: '/dev-api',//设置基础路径
    timeout: 5000,//设置最大响应时间
    //工作后：设置请求头，设置token。后端才会响应数据
    // headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzNDU2IiwiaWF0IjoxNTk1NTI0ODY3LCJleHAiOjE1OTYxMjk2Njd9.4jkcI0DMYv3A1REGXQsJmWtwsxBU7nuRvFO7NJz2pms'} 
  });

  //拦截器
  module.exports = request;