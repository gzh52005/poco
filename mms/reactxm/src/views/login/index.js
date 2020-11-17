import React from 'react'
// import request from '../utils/request'
import CryptoJS from 'crypto-js'
import request from '../../utils/request'

import { Form, Input, Button, Checkbox,message } from 'antd';
// const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const rules = {
    username:[
        { required: true, message: '用户名不能为空' }
    ],
    password:[
        { required: true, message: '密码不能为空' }
    ]
}

function Login(props) {
    console.log('Login.props=', props)
    // const defaultUsername = props.location.state ? props.location.state.username : '';
    
    const onFinish = async function (values) {
        // console.log(values)
    const password = CryptoJS.SHA256(values.password).toString();
      const data = await request.get('/user/login', {
          ...values,
          password
      });
    //   rules[]

      if(data.status === 200){
        // 跳转 
       props.history.push('/user')
       console.log(222);
       ;console.log(data);
       if(values.remember){
          localStorage.setItem('currentUser',JSON.stringify(data.data))
       }else{
        sessionStorage.setItem('currentUser',JSON.stringify(data.data))  
       }
      }else if(data.status === 400){
        message.error('你输入的密码或帐号错误')
      }
    console.log('data',data);
    }
    return (
        <div>
            <h1>免费登录</h1>
            <Form
                labelCol={layout.labelCol}
                wrapperCol={layout.wrapperCol}
                {...layout}
                name="basic"
                initialValues={{ remember: false, }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>下次免登陆</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Login;