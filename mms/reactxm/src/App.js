// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

import { Menu,Button,Row,Col } from 'antd';
//下面是引入组件
import User from './views/user'
import Commodity from './views/commodity';
import Order from './views/order';
import Comments from './views/comments';
import Login from './views/login';
import Reg from './views/reg'

import 'antd/dist/antd.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       menu:[
         {
           path: '/user',
           text: '用户管理'
         },
         {
           path: '/commodity',
           text: '商品管理'
         },
         {
           path: '/order',
           text: '订单管理'
         },
         {
           path: '/comments',
            text: '评论管理'
          }
        ] ,
        currentPath: '/user'
    }
    // this.goto = this.goto.bind(this);
    // this.changeMenu = this.changeMenu.bind(this);
  }
  goto = (path)=>{
    this.props.history.push(path)
  }
  changeMenu = ({key})=>{
   this.setState({
    currentPath:key
   })
  }
  render(){
    const {menu,currentPath} = this.state;
    return (
      <div>
        <Row style={{backgroundColor:'#001529'}}>
          <Col span={20}>    
          <Menu mode="horizontal" theme="dark">
          <Menu.Item>
           权限管理系统
          </Menu.Item>
          <Menu.Item>
        
          </Menu.Item>
        </Menu>
        </Col>

          <Col span={4} style={{textAlign:'right',lineHeight:'46px'}}>   
           <Button type='link'>登录</Button>
           <Button type='link'>注册</Button></Col>
        </Row>
        <ul>
        </ul>
  
        <Menu mode="vertical" 
        theme="dark"
         selectedKeys={[currentPath]}
         onClick={this.changeMenu}
         style={{height:'813px', width:'150px',float:'left',marginRight:'20px'}}
        >
      
            {
            menu.map(item => <Menu.Item key={item.path} >
              <NavLink to={item.path}
                activeClassName='active'>{item.text}
  
              </NavLink>
            </Menu.Item>)
          }
      
        </Menu>
  
        <Switch>
          <Route path='/user' component={User}></Route>
          <Route path='/commodity' component={Commodity}></Route>
          <Route path='/order' component={Order}></Route>
          <Route path='/comments' component={Comments}></Route>
          <Route path='/reg' component={Reg}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/not' render={() => <div>404</div>}></Route>
          <Redirect from='/' to='/user' exact></Redirect>
          <Redirect to='/not' />
  
        </Switch>
      </div>
    )
  }
}

export default App;