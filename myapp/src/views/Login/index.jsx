// 登录  
import React, {useState, useEffect } from 'react';
import user from "../../api/user";
import goods from "../../api/goods";

function Login() {

    // 用于测试
    useEffect(function () {//useEffect 里面传入的参数是一个函数
        // 这里的代码只有初始化时执行,只需要在初始化时执行一次的操作可以在这里做
        // user.login("18888888885","123456").then(res => {
        //   console.log(res, 77);
        //   // console.log(this.arr);
        // });    
        
        goods.museum(2).then(res => {
              console.log(res, 77);
            }); 

       }, [])
    return (
        <div>Login</div>
    )
}


export default Login;