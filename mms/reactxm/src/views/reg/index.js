
import React from 'react'
import CryptoJS from 'crypto-js'
import request from '../../utils/request'

import { Form, Input, Button, Checkbox,message } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
};
//这里rules是定义方法  定这个方法要写在下面的表单里面
const rules = {
    username: [
        { required: true, message: '用户名不能为空' },
        {
            validator:function(rule,values){
                console.log(rule,values);
            return new Promise((resolve,reject)=>{
                request.get('/user/check',{
                    username:values,
                }).then(res=>{
                    if(res.status === 400){
                        reject('用户名以存在')
                    }else if(res.status === 200){
                        resolve()
                    }
                }) 
            })
          
        }}
    ],
    password: [
        { required: true, message: '密码不能为空' },
        {min:6,max:12, message: '密码必须是6-12个字符'},

    ],
    confirmPassword: [
        { required: true, message: '密码不能为空' },
        function(form){
            console.log('form',form);
     //validator是自定义校验规则 里面的这个value就是确认密码框里面的value
     //然后你用自定义校验规则 函数里面自动就是拿到表单  用表单里面的password和当前value对比
            return {
        validator:function(rule,value){
     if(value !== form.getFieldValue('password')){
         return Promise.reject('两次输入密码不一样')
     }
     return Promise.resolve();
        }
      }
        }
    ],
}


function Reg(props){
    const onFinish = async (values)=>{
        let {username, password} = values
        password = CryptoJS.SHA256(password).toString()
        // console.log(password);

        const data = await request.post('/user/reg',{
            username,
            password
        })
        console.log('data',data);
        if(data.status === 200){
            props.history.replace({
                pathname:'/login',
                state:{
                    username
                }
            })
        }
    }
    //下面这个表单里面自带的有一个点击事件 
    return (
        <div>
            <h2>免费注册</h2>
             <Form
                labelCol={layout.labelCol}
                wrapperCol={layout.wrapperCol}
                {...layout}
                name="basic"
                initialValues={{ remember: false }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={ rules.password }
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    //这个rules是上面定义的  这里来进行校验
                    rules={ rules.confirmPassword}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">注册</Button>
                </Form.Item>
            </Form>
            
        </div>
    )
}


export default Reg;