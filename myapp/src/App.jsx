import React from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

// 引入页面组件
import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Works from './views/Works'
import Square from './views/Square'
import Skill from './views/Skill'
import Dialogue from './views/Dialogue'
import Limit from './views/Limit'
import Poco from './views/Poco'
import Download from './views/Download'


// 旧版本按需引入（不推荐）
// import Button from 'antd-mobile'
// 然后这里一大堆的路径拿到样式

// 新版本按需加载，需要什么直接写，只需要从antd-mobile拿
// 使用了babel-plugin-import插件进行按需加载，已安装
// import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './App.scss';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [{
        path: '/home',
        text: '首页'
      }, {
        path: '/login',
        text: '登录'
      }, {
        path: '/reg',
        text: '注册'
      }, {
        path: '/dialogue',
        text: '对话'
      },
      {
        path: '/download',
        text: '下载'
      },
      {
        path: '/limit',
        text: '极限摄影'
      }, {
        path: '/poco',
        text: 'POCO认证'
      }, {
        path: '/skill',
        text: '摄影技巧'
      }, {
        path: '/square',
        text: '图片广场'
      },
      {
        path: '/works',
        text: '作品'
      }
      ],
      currentPath: '/home'
    }
  }

  goto = (path) => {
    this.props.history.push(path)
  }

  changeMenu = ({ key }) => {
    this.setState({ currentPath: key })
  }

  UNSAFE_componentWillMount() {
    // componentDidUpdate() {
    // 获取当前路径
    const { pathname } = this.props.location;
    this.setState({
      currentPath: pathname
    })
  }


  render() {
    // console.log('App.props', this.props);
    const { menu, currentPath } = this.state;
    return (
      <div>
        <ul
          onClick={this.changeMenu}>
          {
            menu.map(item => <li key={item.path} onClick={this.goto.bind(null, item.path)}>
              {item.text}
            </li>)
          }
        </ul>

        <div style={{ padding: 15 }}>
          <Switch>
            {/* 当浏览器路径匹配/home时，渲染Home组件 */}
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/reg" component={Reg} />
            <Route path="/works" component={Works} />
            <Route path="/square" component={Square} />
            <Route path="/skill" component={Skill} />
            {/* <Route path="/iq/:id" component={IQDetail} /> */}
            <Route path="/dialogue" component={Dialogue} />
            <Route path="/limit" component={Limit} />
            <Route path="/poco" component={Poco} />
            <Route path="/download" component={Download} />
            <Route path="/notfound" render={() => <div>404</div>} />
            <Redirect from="/" to="/home" exact />
            <Redirect to="/notfound" />
          </Switch>
        </div>

      </div>
    )
  }


}

const NewApp = withRouter(App)

export default NewApp;
