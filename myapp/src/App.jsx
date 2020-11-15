import React from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';

// 引入页面组件
import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Tiyan from './views/Tiyan'
import Mine from './views/Mine'
import Shop from './views/Shop'
import ListShop from './views/ListShop'
import GoodsList from './views/GoodsList'
import Detail from './views/Detail'
import Topic from './views/Home/topic'


// 旧版本按需引入（不推荐）
// import Button from 'antd-mobile'
// 然后这里一大堆的路径拿到样式

// 新版本按需加载，需要什么直接写，只需要从antd-mobile拿
// 使用了babel-plugin-import插件进行按需加载，已安装
// import { Button,TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './App.scss';
import { TabBar } from 'antd-mobile';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{
        path: '/home',
        text: '主页',
        icon: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147363923%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%228908%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M640%20896h192V469.376h42.666667V896.213333c0%2023.466667-19.029333%2042.474667-42.666667%2042.474667H597.333333V725.333333h-170.666666v213.333334H192c-23.573333%200-42.666667-18.986667-42.666667-42.453334V469.354667h42.666667V896h192V682.666667h256v213.333333z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%228909%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M100.032%20506.133333a21.333333%2021.333333%200%201%201-29.397333-30.933333L466.282667%2099.349333a66.688%2066.688%200%200%201%2091.434666%200L953.386667%20475.2a21.333333%2021.333333%200%201%201-29.397334%2030.933333L528.341333%20130.282667a24.021333%2024.021333%200%200%200-32.682666%200L100.053333%20506.133333zM832%20192h-128a21.333333%2021.333333%200%200%201%200-42.666667h149.333333a21.333333%2021.333333%200%200%201%2021.333334%2021.333334v149.333333a21.333333%2021.333333%200%200%201-42.666667%200V192z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%228910%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
        icon1: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147955932%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2214847%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M640%20896h192V469.376h42.666667V896.213333c0%2023.466667-19.029333%2042.474667-42.666667%2042.474667H597.333333V725.333333h-170.666666v213.333334H192c-23.573333%200-42.666667-18.986667-42.666667-42.453334V469.354667h42.666667V896h192V682.666667h256v213.333333z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2214848%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M100.032%20506.133333a21.333333%2021.333333%200%201%201-29.397333-30.933333L466.282667%2099.349333a66.688%2066.688%200%200%201%2091.434666%200L953.386667%20475.2a21.333333%2021.333333%200%201%201-29.397334%2030.933333L528.341333%20130.282667a24.021333%2024.021333%200%200%200-32.682666%200L100.053333%20506.133333zM832%20192h-128a21.333333%2021.333333%200%200%201%200-42.666667h149.333333a21.333333%2021.333333%200%200%201%2021.333334%2021.333334v149.333333a21.333333%2021.333333%200%200%201-42.666667%200V192z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2214849%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
      }, {
        path: '/tiyan',
        text: '体验馆',
        icon: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147479762%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%229806%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M963%20959.1H410.5V59H963v900.1z%20m-482.5-70H893V129H480.5v760.1z%22%20fill%3D%22%23cdcdcd%22%20p-id%3D%229807%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M480.5%20959.1H63V221h417.5v738.1z%20m-347.5-70h277.5V291H133v598.1zM574.1%20212.6h237.5v100H574.1zM574.1%20384.2h237.5v100H574.1zM593.7%20669h198.4v226.3H593.7z%22%20fill%3D%22%23cdcdcd%22%20p-id%3D%229808%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M221.7%20383.8h70.7v64.4h-70.7zM223.2%20516.7h70.7v64.4h-70.7z%22%20fill%3D%22%23cdcdcd%22%20p-id%3D%229809%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
        icon1: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147908741%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2213693%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M963%20959.1H410.5V59H963v900.1z%20m-482.5-70H893V129H480.5v760.1z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2213694%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M480.5%20959.1H63V221h417.5v738.1z%20m-347.5-70h277.5V291H133v598.1zM574.1%20212.6h237.5v100H574.1zM574.1%20384.2h237.5v100H574.1zM593.7%20669h198.4v226.3H593.7z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2213695%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M221.7%20383.8h70.7v64.4h-70.7zM223.2%20516.7h70.7v64.4h-70.7z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2213696%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',

      }, {
        path: '/shop',
        text: '家装商城',
        icon: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147531687%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2210471%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M798.72%20907.776H286.72c-53.76%200-97.28-43.52-97.28-97.28V208.384c0-53.76%2043.52-97.28%2097.28-97.28h512c53.76%200%2097.28%2043.52%2097.28%2097.28v602.112c0%2053.76-43.52%2097.28-97.28%2097.28zM286.72%20150.528c-32.256%200-58.368%2026.112-58.368%2058.368v602.112c0%2032.256%2026.112%2058.368%2058.368%2058.368h512c32.256%200%2058.368-26.112%2058.368-58.368V208.384c0-32.256-26.112-58.368-58.368-58.368H286.72z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%2210472%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M537.6%20437.248c-115.2%200-208.896-93.696-208.896-208.896%200-10.752%208.704-19.456%2019.456-19.456%2010.752%200%2019.456%208.704%2019.456%2019.456%200%2093.696%2076.288%20169.984%20169.984%20169.984%2093.696%200%20169.984-76.288%20169.984-169.984%200-10.752%208.704-19.456%2019.456-19.456s19.456%208.704%2019.456%2019.456c0%20115.2-93.696%20208.896-208.896%20208.896z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%2210473%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
        icon1: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147856524%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2212964%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M798.72%20907.776H286.72c-53.76%200-97.28-43.52-97.28-97.28V208.384c0-53.76%2043.52-97.28%2097.28-97.28h512c53.76%200%2097.28%2043.52%2097.28%2097.28v602.112c0%2053.76-43.52%2097.28-97.28%2097.28zM286.72%20150.528c-32.256%200-58.368%2026.112-58.368%2058.368v602.112c0%2032.256%2026.112%2058.368%2058.368%2058.368h512c32.256%200%2058.368-26.112%2058.368-58.368V208.384c0-32.256-26.112-58.368-58.368-58.368H286.72z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2212965%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M537.6%20437.248c-115.2%200-208.896-93.696-208.896-208.896%200-10.752%208.704-19.456%2019.456-19.456%2010.752%200%2019.456%208.704%2019.456%2019.456%200%2093.696%2076.288%20169.984%20169.984%20169.984%2093.696%200%20169.984-76.288%20169.984-169.984%200-10.752%208.704-19.456%2019.456-19.456s19.456%208.704%2019.456%2019.456c0%20115.2-93.696%20208.896-208.896%20208.896z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2212966%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',

      }, {
        path: '/mine',
        text: '我的',
        icon: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147649619%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2212003%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M498%20529.7c-128%200-232-104.1-232-232.1S370%2065.5%20498%2065.5s232.1%20104.1%20232.1%20232.1S625.9%20529.7%20498%20529.7z%20m0-395.6c-90.1%200-163.5%2073.4-163.5%20163.5S407.8%20461.1%20498%20461.1s163.5-73.4%20163.5-163.5S588.2%20134.1%20498%20134.1z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%2212004%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M865.3%20956.9c-18.9%200-34.3-15.3-34.3-34.3%200-150.9-139.6-326.4-319.7-326.4S191.6%20771.6%20191.6%20922.6c0%2018.9-15.4%2034.3-34.3%2034.3S123%20941.5%20123%20922.6c0-186.4%20166.1-395%20388.3-395%20222.2%200%20388.3%20208.5%20388.3%20395%200%2018.9-15.4%2034.3-34.3%2034.3z%22%20fill%3D%22%23bfbfbf%22%20p-id%3D%2212005%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',
        icon1: 'data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605147762952%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2212197%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M498%20529.7c-128%200-232-104.1-232-232.1S370%2065.5%20498%2065.5s232.1%20104.1%20232.1%20232.1S625.9%20529.7%20498%20529.7z%20m0-395.6c-90.1%200-163.5%2073.4-163.5%20163.5S407.8%20461.1%20498%20461.1s163.5-73.4%20163.5-163.5S588.2%20134.1%20498%20134.1z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2212198%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M865.3%20956.9c-18.9%200-34.3-15.3-34.3-34.3%200-150.9-139.6-326.4-319.7-326.4S191.6%20771.6%20191.6%20922.6c0%2018.9-15.4%2034.3-34.3%2034.3S123%20941.5%20123%20922.6c0-186.4%20166.1-395%20388.3-395%20222.2%200%20388.3%20208.5%20388.3%20395%200%2018.9-15.4%2034.3-34.3%2034.3z%22%20fill%3D%22%23f3a90e%22%20p-id%3D%2212199%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E',

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
        <Switch>
          {/* 当浏览器路径匹配/home时，渲染Home组件 */}
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          {/* <Route path="/iq/:id" component={IQDetail} /> */}
          <Route path="/tiyan" component={Tiyan} />
          <Route path="/mine" component={Mine} />
          <Route path="/shop" component={Shop} />
          <Route path="/listshop" component={ListShop} />
          <Route path="/goodslist" component={GoodsList} />
          <Route path="/detail" component={Detail} />
          <Route path="/topic" component={Topic} />
          <Route path="/notfound" render={() => <div>404</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>

        {
          this.props.location.pathname === '/mine' || this.props.location.pathname === '/home' || this.props.location.pathname === '/shop' || this.props.location.pathname === '/tiyan' ?
            <TabBar >

              {

                menu.map(item => <TabBar.Item
                  title={item.text}
                  key={item.path}
                  onPress={this.goto.bind(null, item.path)}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon1}) center center /  21px 21px no-repeat`
                  }}
                  />
                  }
                >
                </TabBar.Item>)
              }

            </TabBar> : ""
        }


      </div>
    )
  }
}

const NewApp = withRouter(App)

export default NewApp;
