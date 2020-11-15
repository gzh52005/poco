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
                <h2 style={{ padding: '5vw 20px' }} >登录</h2>
                <p style={{ padding: '0 20px' }}>未有账号？请<a style={{ color: 'blue' }} onClick={() => {
                    props.history.push("/reg");
                }}>注册</a> </p>

                <WingBlank size="lg">
                    <List style={{ margin: "5vw 0"  }} length="100%">
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
                    <div style={{marginTop:'10vw'}}>
                        <span style={{fontSize:"2vw"}}>使用社交账号登录 </span>
                        <img style={{height:"5vw",marginLeft:'15vw'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAMAAACsAtiWAAAAk1BMVEUAAAD+tyj/txL+uCn+uCn+tyj+tyj+tyj+tyj+tyj+uCj/tyj/uCj+uCj9tyj+uCf/uCj+tyn/tyj+tyj/uCj+tyj/uSj/tyj+tyj+uCj+uib/uSn/uSj/uif/uSb7tyj/uST/uCn/tyj+tyn9uCn+tyj9uCj/uij9uCf/uCX/tyT+uCn+uCn/uCf/tyn/uCn+tym0MV6hAAAAMHRSTlMA/QT77vXy5dr54Lufk4JdWNXNyLOjmXRvUDw4My0qJR6vrKmQh35JRBsO08JoYxl9hXuWAAABFklEQVQ4y4XU2ZKCMBCF4Q4gu6JsghvoOOrs5/2fbqAsSYA0/HdUfcWSpCG14y1wPNNPiw/St0/wygx1yLgKKFnlWFzQT0RDcsUw8zB4D4FRG6NHUmj6VcVJ6IirkiW07RTi6slSeQ70bSSJwPTZkRVH5NKEHLl35MyRdUfeOCL3KZu/iwvMLMwDXNZrJy/AzJP+PJ4ET3IDn6ipzcdE763YYSrHkGeFq2yIM02yZgIhY5amwEx7CgEBLhPAD8XAijVZ3H62jcRwObKqbORkWhXlHHnQGiGdm2E5MMI3iLbF5LGLSFZbOpGSWqn7M8gpYkZpceqB+zcwNnktxRb67EoS11qYAt7C8pMg+HLs5kp4thMfqekfdJOwJjZ7bVcAAAAASUVORK5CYII=" alt=""/>

                        <img style={{height:"5vw",marginLeft:'15vw'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAMAAADR57icAAAAolBMVEUAAAD+tyj+tyn/ywD+uCn+uCf/uSX/tCX+tyn+uCn+uCj/tyj/uCf9tyf+uCj+tyj/uCj+tyn/uCj+uCj/uCj9tyb/uif/uST+tyn/uCj/uCj+tyj/uCj+tyj+uCj+uCj+uCj+uSX/uCf+tyj/uCj/uCj+uCj+uCj+uCf/uCf/uCn+tyX+tyj/tyj/tiX/uCj/uCj/uCj/uCj/uCj+tyn+tyl/nKZxAAAANXRSTlMA6/sDyDMqBvPblHpIQu/ft4NfUk0lEw71zKyfiHZyZFYvF/i9saWaWj03H+TRG9bEj4BuabFieV4AAAHsSURBVDjLhZPpYqpADIWDsq+yiDvggmtr1Tbv/2p3MoER7bV+f4DhzCEkZ+A1+zB0tskI3vKFRBi/le6QcZZvhP2gjCekHB/gPcaGPm/CX6xct8yhPxfKSR+eGKZ7VREp7AWAK64ldBktIhS4wGQ9etpBX/z+V7f2wkYmaDcac6FNoBJrhtKddGyJQZEhRmAJhwU0BBoqrnBnSmYDqoBJ16igyo9ePdHdM8AP4h5miAPWVT3sMIsdvtHOkDwIfdb9JoZz5KygFptJt7TxBTOQeGQLkEf4igIYX3Zs2y6vL9eiStMynjYtGK+gg8+LvTq1QHHc9mhnMYQ73OjNc+iWn0hMz2ovEp4cYra7TAZe870RO3yYKiOCHxCY7IF21cRsTE8qYhdxv5W6EBt6R5C4/NjkWxMvhqpWQs0rpXuVB+Gvc62SnbkWbbG6/SiU45SuC5FYI9DnFb3Lgfh+iOdGtIYLqqlQ7jw7TjgZlpqjTQY32aIDN49D25bI5DZHeonOEA4yX+FJRp7n+KnmVYjf9nnknLbIkOcx4g/fh0ixHCcA/VsoZbcRLSZaOxcFH/Fa2FhGFrCBv2kauoIHfCpN9w45bTtlVwfZLoFnrJLnbGuaOhV6YsH/ML3B/cR+TL9P8Ae54adVFpgj+M0/fB1x6AJNwjUAAAAASUVORK5CYII=" alt=""/>
                     </div>

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