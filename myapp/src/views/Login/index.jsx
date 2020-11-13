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
import { searchFormat } from "../../utils/index"
import SHA256 from 'crypto-js/sha256'

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
            callback();
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

    /* 登录 */
    const handleClick = () => {      
            props.form.validateFields({ force: true }, async (error) => {
                if (!error) {
                    let values = props.form.getFieldsValue();
                    // 加密
                    values.password = SHA256(values.password).toString();
                    
                    // 可以设置管理员或者用户
                    values.permissions = 'user'
    
                    // 发送注册请求
                    let { data } = await User.login(values.phone,values.password);
                    console.log(data);
                    if(data.code === 2000){
                        localStorage.setItem('currentUser', JSON.stringify(data))
                        Toast.info("登录成功");
                        const { redirectTo } = searchFormat(props.location.search)
                        console.log('redirectTo=', redirectTo)
                        props.history.push(redirectTo || '/mine');
                    }else{
                        Toast.info("用户名或密码错误");
                    }
                }
            });
        
        
      
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
                <h2 style={{ padding: '0 20px' }} >登录</h2>
                <p style={{ padding: '0 20px' }}>未有账号？请<a style={{ color: 'blue' }} onClick={() => {
                    props.history.push("/reg");
                }}>注册</a> </p>

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
                            placeholder="请输入手机号码"
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
              <WhiteSpace size="lg" />
                <Button style={{ fontSize: '15px',color:'white', background: 'rgba(255,185,0,.5)', margin: '0 20px' }}
                    // type="warning"

                    onClick={handleClick}
                >
                    登录
                </Button>
            </section>
        </div>
    );
}

export default createForm()(Reg)