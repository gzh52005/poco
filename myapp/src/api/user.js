let request = require('../utils/request');

//功能：验证用户名是否存在
function checkName(username) {
    return request.get('/user/checkname',{
        params : {
            username 
        }
    })
}

//功能：注册功能
function reg(username,password) {
    return request.post('/user/reg',{
        username,
        password
    })
}

//功能：登录功能
function login(username,password) {
    return request.get('/user/login',{
        params : {
            username,
            password
        }
    })
}

//功能：验证token
function checkToken(token) {
    return request.get('/user/verify',{
        params : {
            token,
        }
    })
}

module.exports = {
    checkName,
    reg,
    login,
    checkToken
}