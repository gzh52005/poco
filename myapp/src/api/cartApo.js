let request = require('../utils/request');

// 查询分类所有列表
function allList() {
    return request.get('/good/goodList', {
        params: {
            query:{}
        }
    })
}

// 查询单个详情页数据
function goodList(id) {
    return request.get('/good/goodList', {
        params: {
            query:{"goods_id": `${id}`}
        }
    })
}

//  查询所有评论
function reviewList() {
    return request.get('/good/reviews', {
        params: {
            query:{}
        }
    })
}

// 获取商品分类颜色
function type(id) {
    return request.get('/good/cartype', {
        params: {
            query:{"goods_id": `${id}`}
        }
    })
}

// 添加购物车
function addcar(phone,goods_id,type,default_image,goods_num,goods_name,price,goods_cost_price,checked){
    return request.post('/car/caradd', {
       phone,
       goods_id,
       type,
       default_image,
       goods_num,
       goods_name,
       price,
       goods_cost_price,
       checked
    })
}

// 获取购物车数据
function checkcar(phone){
    return request.get('/good/checkcar', {
        params: {
            query:{"phone": `${phone}`}
        }   
    })
}

// 删除购物车数据
function cardelete(id){
    return request.delete('/good/del', {
        params:{
            id
        }
    })
}

module.exports = {
    goodList,
    allList,
    reviewList,
    type,
    addcar,
    checkcar,
    cardelete
}