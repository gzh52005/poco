// 登录
import React, {useState, useEffect } from 'react';
import cartApi from "../api/cartApi";

function Login() {
    useEffect(function () {//useEffect 里面传入的参数是一个函数
        // 这里的代码只有初始化时执行,只需要在初始化时执行一次的操作可以在这里做
        cartApi.reviewList().then(res => {
          console.log(res.data.data, 77);
          // console.log(this.arr);
        });       
       }, [])
    return (
        <div>Login</div>
    )
}


export default Login;