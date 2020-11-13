import React from 'react';
import {
    NavBar,
    Icon,
    List,
    InputItem,
    Toast,
    Button,
    Flex,
    WhiteSpace,
    WingBlank,
    Checkbox,
    AgreeItem
} from "antd-mobile";
import { createForm } from "rc-form";
import "./index.scss"
import SHA256 from 'crypto-js/sha256'

import './index.scss'
import User from "../../api/user";





function Reg(props) {

    let { getFieldProps, getFieldError } = props.form;
    const AgreeItem = Checkbox.AgreeItem;
    let flag

    /* 正则校验：用户名 */
    const validateUserName = (rule, value, callback) => {

        // 仅允许输入英文和数字
        const reg = /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/;
        if (reg.test(value)) {
            User.checkName(value).then(res=>{
                console.log(res.data.code);
                if(res.data.code===3000){
                    Toast.info("该用户已经注册，可以直接登录");
                }else if(res.data.code===2000){
                    callback()
                }
            })

            
        } else {
            callback(new Error("请输入正确的手机号码"));
        }
        
    };

    /* 正则校验：密码 */
    const validatePassword = (rule, value, callback) => {

        const reg = /^\w{4,14}$/;
        if (reg.test(value)) {
            callback();
        } else {
            callback(new Error("仅允许英文、数字长度为6到14"));
        }
    };

    /* 注册 */
    const handleClick = () => {
        if(flag){
            props.form.validateFields({ force: true }, async (error) => {
                if (!error) {
                    let values = props.form.getFieldsValue();
                    // 加密
                    values.password = SHA256(values.password).toString();
                    let {phone} =values
                    // 可以设置管理员或者用户
                    values.permissions = 'user'
    
                    // 发送注册请求
                    let { data } = await User.reg(values.phone,values.password);
                    console.log(data);
                    if(data.code === 2000){
                        Toast.info("注册成功！");
                        props.history.replace({
                            pathname:'/login',
                            // state传参方式，刷新后就会消失
                            state:{
                                phone
                            }
                        })
                      
                    }
    
                } else {
                    Toast.info("填写数据格式不正确");
                }
            });
        }
        else {
            Toast.info("请同意以上协议");
        }
      
    }

    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    props.history.go(-1);
                }}
            ></NavBar>
            <section className="reg"  >
                <h2 style={{ padding: '0 20px' }} >注册</h2>
                <p style={{ padding: '0 20px' }}>已有账号？请<a style={{ color: 'blue' }} onClick={() => {
                    props.history.push("/login");
                }}>登录</a> </p>

                <WingBlank size="lg">
                    <List style={{ margin: "20px 0" }} length="100%">
                        <InputItem style={{ fontSize: '12px' }}
                            {...getFieldProps("phone", {
                                validate: [
                                    {
                                        trigger: "onBlur",
                                        rules: [
                                            { validator: validateUserName },
                                        ],
                                    },
                                ],
                            })}
                            error={!!getFieldError("phone")}
                            onErrorClick={() => {
                                Toast.info(getFieldError("phone"), 2);
                            }}
                            clear
                            placeholder="请输入有效的手机号码"
                        >
                            手机号
                        </InputItem>
                    </List>
                    <List>
                        <InputItem style={{ fontSize: '12px' }}
                            {...getFieldProps("password", {
                                validate: [
                                    {
                                        trigger: "onBlur",
                                        rules: [
                                            { validator: validatePassword },
                                            
                                        ],
                                    },
                                ],
                            })}
                            error={!!getFieldError("password")}
                            onErrorClick={() => {
                                Toast.info(getFieldError("password"), 2);
                            }}
                            type="password"
                            clear
                            placeholder="英文或数字长度为6到14位"
                        >
                            密码
                        </InputItem>
                    </List>


                </WingBlank>
                <WhiteSpace size="xl" />
                <Flex>
                    <Flex.Item>
                        <AgreeItem style={{ paddingRight: '20px' }} data-seed="logId" onChange={e => { 
                            flag = e.target.checked
                            console.log('flag', flag) }}>
                            <span style={{ fontSize: '10px' }}>我同意</span>  <a style={{ fontSize: '10px', color: 'blue' }} onClick={(e) => { e.preventDefault() }}>《安乐窝用户服务协议》</a><span style={{ fontSize: '10px' }}>与</span> <a style={{ fontSize: '10px', color: 'blue' }}>《安乐窝隐私政策》</a>
                        </AgreeItem>
                    </Flex.Item>
                </Flex>


                <WhiteSpace size="lg" />
                <Button style={{ fontSize: '10px', background: 'rgba(255,185,0,.5)', margin: '0 20px' }}
                    // type="warning"

                    onClick={handleClick}
                >
                    注册
                </Button>
            </section>
        </div>
    );
}

export default createForm()(Reg)