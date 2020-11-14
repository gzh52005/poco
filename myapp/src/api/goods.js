let request = require('../utils/request');

// 使用方法：
// （1）引入文件
// （2）用下面的方法或者用await

// useEffect(function () {    
//     goods.museum(2).then(res => {
//           console.log(res, 77);
//         }); 
//    }, [])



// 查询brandList的数据
function brandList() {
    return request.get('/good/brandList', {
        params: {
            query: {}
        }
    })
}


// 查询goodsList的数据
function goodsList() {
    return request.get('/good/goodsList', {
        params: {
            query: {}
        }
    })
}
// 查询home的数据
function home() {
    return request.get('/good/home', {
        params: {
            query: {}
        }
    })
}
// 查询shop的数据
function shop() {
    return request.get('/good/shop', {
        params: {
            query: {}
        }
    })
}
// 查询wozhidao的数据
function wozhidao() {
    return request.get('/good/wozhidao', {
        params: {
            query: {}
        }
    })
}

// 查询goodsDetail的数据
function goodsDetail(page) {
    return request.get('/good/goodsDetail', {
        params: {
            query: {},
            page
            // 默认每次请求十条数据，
        }
    })
}

// 查询museum的数据
function museum() {
    return request.get('/good/museum', {
        params: {
            query: {},
            // 默认每次请求十条数据，
        }
    })
}
// 查询shopList的数据
function shopList(page) {
    return request.get('/good/shopList', {
        params: {
            query: {},
            page
            // 默认每次请求十条数据，
        }
    })
}




module.exports = {
    brandList,
    goodsDetail,
    goodsList,
    home,
    shop,
    museum,
    shopList,
    wozhidao
}