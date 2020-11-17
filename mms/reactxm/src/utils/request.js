
//下面这个是为了上线和开发写地址不一样来做的
const baseUrl = process.env.NODE_ENV === 'development' ? 'http://120.76.247.5:2001' : 'http://offer.qfh5.cn';
const apiUrl = baseUrl + '/api'
//这里给了几个参数  因为发送请求时要携带参数的
//这里的三个参数  第一个是路径 二个数传的参数  第三个是一个方法 它里面有很多参数 它里面写的是用一个对象
export function request(url,data,options={}){
    
  url = apiUrl + url;
  //这里是options下面有一个method  当他等于get或者传过来的是undefined都说明是get请求
  if(options.method === 'get' || options.method===undefined){
    if(data){
      const params = []
      //应为传过来的是一个对象  所以要用for in来循环
      for (let key in data){
        params.push(`${key}=${data[key]}`)
      }
      url = url + '?' + params.join('&')
    }
  }
  
  return fetch(url,{
      ...options
  }).then(res=>{
    return res.json()
})
}

// 封装get请求
request.get = function(url,data={},options={}){
  options.method = 'get';
  return request(url,data,options);
}

request.post = function(url,data={},options={}){
  options.method = 'post';
  //这个是post传参  要写在boby里面
  options.body = JSON.stringify(data)

  options.headers= new Headers({
      'Content-Type': 'application/json'
  })
  return request(url,data,options);
}

export default request;