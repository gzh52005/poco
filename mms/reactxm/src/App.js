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

  }
  goto = (path)=>{
    this.props.history.push(path)
  }
  changeMenu = ({ key }) => {
    this.setState({
        currentPath: key
    })
}
UNSAFE_componentWillMount() {
    // 获取当前路径
    const { pathname } = this.props.location;
    this.setState({
        currentPath: pathname
    })
    const user = localStorage.getItem('currentUser')
    console.log("user=", user);
    this.setState({
        user: user
    })
}
user = () => {
    localStorage.removeItem('currentUser')
    this.props.history.push('/login')
}
componentDidMount() {

}
  render(){
    const { menu, currentPath, user } = this.state;
    return (
      <>
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

        <Col span={4} style={{ textAlign: 'right', lineHeight: '46px' }}>
                        {
                            user ? <Button onClick={this.user} type="link">退出</Button>
                                :
                                <React.Fragment>
                                    <Button type="link" onClick={this.goto.bind(this, '/reg')}>注册</Button>
                                    <Button type="link" onClick={this.goto.bind(this, '/login')}>登录</Button>
                                </React.Fragment>
                        }
                    </Col>
        </Row>
        <ul>
        </ul>

      
       
        <Menu mode="vertical" 
        theme="dark"
         selectedKeys={[this.state.currentPath]}
         onClick={this.changeMenu}
         style={{height:'88vh', width:'200px',float:'left',marginRight:'20px',marginTop:'-15px'}}
        >
            {
            this.state.menu.map(item => <Menu.Item key={item.path} >
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
      </>
    )
  }
}

const NewApp = withRouter(App)

export default NewApp;