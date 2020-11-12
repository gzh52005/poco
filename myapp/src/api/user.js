let request = require('../utils/request');

//功能：验证用户名是否存在
function checkName(phone) {
    return request.get('/user/checkphone', {
        params: {
            phone
        }
    })
}

//功能：注册功能
function reg(phone, password) {
    return request.post('/user/reg', {
        phone,
        password
    })
}

//功能：登录功能
function login(phone, password) {
    return request.get('/user/login', {
        params: {
            phone,
            password
        }
    })
}

//功能：验证token
function checkToken(token) {
    return request.get('/user/verify', {
        params: {
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