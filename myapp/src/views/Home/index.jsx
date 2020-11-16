// 首页
import React, { useState, useEffect } from 'react'
import './index.scss';
import goodApi from '../../api/goods'

import { Carousel, WingBlank } from 'antd-mobile';


class Home extends React.Component {
    state = {
        data: ['cms/2020/10/4811b4afac97ee4c26428839e98f1d2e', '7ef88abcf29b07929ae6dfee15ca8dcb',
            'cms/2020/09/4d42311c40cbe99685d3e964b4026101',
            '4a0c35614085e3aa0ef7194fa9386f80',
        ],
        imgHeight: 176,
        arr: []
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let { data } = await goodApi.home()
        // console.log(data)

        this.setState({
            arr: data.data[0].brand.items
        })
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['cms/2020/10/4811b4afac97ee4c26428839e98f1d2e', '7ef88abcf29b07929ae6dfee15ca8dcb',
                    'cms/2020/09/4d42311c40cbe99685d3e964b4026101',
                    '4a0c35614085e3aa0ef7194fa9386f80',],
            });
        }, 3000);
    }

    goto = (path) => {
        this.props.history.push(path)
    }



    handleScroll = function () {
        let top = document.querySelector('.top')
        if (top) {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 230) {
                top.style.background = "#ffb900"
            } else if (scrollTop < 230) {
                top.style.background = "none"
            }
        }

    }

    render() {

        return (

            <div className='home'>
                <div className="top" style={{
                    width: '100vw',
                    position: "fixed", color: "white", zIndex: 9999, padding: '2vw'
                }}>
                    <span>全国 <img style={{ height: '7px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAMAAACKYC6uAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAy7/7g2NHHQ8G8vHl5Ma6pp8xL9AkDREAAABFSURBVAjXVc5HAoAgEATBXjLm9P+3iigCdes5DerqKKQfBD+3PXk4x9rDQeJ0ae3IbBksH/O24bc/vVHFNT2INMIigewG+nIHBxXJikkAAAAASUVORK5CYII=" alt="" /></span>
                    <img style={{ marginLeft: '28vw', height: '20px' }} src="https://m.anlewo.com/static/img/icon-logo@2x.1f8cd.png" alt="" />
                    <img style={{ height: '20px', float: "right", marginLeft: "3VW" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAMAAACyy+glAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA8jt9TO7Mrfu+QFgmaiD4hWAV4tC0sp9CATfrxRkG1RhPIKgAAAE2SURBVDjLtZVbloMgEEQbFYn4QGN8JZMM+1/l2DIGggL6kfqy4R7sqsYj2Lo2Q/oQ4pEOzRX8ivqLfOvSRx606qSlrnKxOZEbkXyfjdX2LebP1+vJ45uqYzebjnplTF10vlgqJ3NtKhe7+cYb9ku5vcwp9m277PBcZG0az+6sfOWsEnZU4s5n3j16m/bgCV32HzPGl42wqxEbNCffYL7gEObdGPWg4nQPazBq7Iu7YI5+1iLJiBG9Y1wkS/C5lkqtC27/gXo+V65ywW8ggew4nAFZBhSClxET9eiFNfE9+FTPp9I4lXN4gveVrfXdaBMH/CP13QhJf1Zh3cXMsoMsnVlaHWJLoVLwqGCEsAIgUt5iL0sRofWvDLPApCGag1fEYFkFB2HBdL6BNlL9AwobLLyQHd1Wf38lOI+FxFiGAAAAAElFTkSuQmCC" alt="" />
                    <img style={{ height: '20px', float: "right" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMA40mP4L4yFPZcWr7kaEsAAAB3SURBVCjPY1DcjQGEGKQxBTcy7MYCcAkyoAG6CyoiPIMQlIZ7hpAgQjut3Qm3BtNJG/EKYmofHCG/EEtiYMaSQtijMRMYQwp6UgQKcnbv3pKAbpf17t3h6A4Ags0MmII7JmARdGPAFNxagCEovduAAQMoSmGKAQCwpPKtT2LMlwAAAABJRU5ErkJggg==" alt="" />
                </div>
                <WingBlank style={{ margin: 0 }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    //   afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://www.woimg.com/beego/${val}.jpg`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height

                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="main">
                    <ul className="cont">
                        <li onClick={this.goto.bind(null, "/shop")}>
                            <img src="https://www.woimg.com/beego/feb687ad88d68d8cdc06bbddcf6d08c9.png" alt="" />
                            <p>报价计算器</p>
                        </li>
                        <li onClick={this.goto.bind(null, "/shop")}>
                            <img src="https://www.woimg.com/beego/0fac90da521de7b7fae4d874d75c3fee.jpg" alt="" />
                            <p>建材商城</p>
                        </li>
                        <li onClick={this.goto.bind(null, "/shop")}>
                            <img src="https://www.woimg.com/beego/353c745681f07ab8b91b61e38906b08a.png" alt="" />
                            <p>工艺坊</p>
                        </li>
                        <li onClick={this.goto.bind(null, "/shop")}>
                            <img src="https://www.woimg.com/beego/c58dac0019fc356a8a7383c209d81059.png" alt="" />
                            <p>窝知道</p>
                        </li>
                    </ul>

                    <div >
                        <img onClick={this.goto.bind(null, "/tiyan")} style={{ float: 'left', margin: '0 0 0 3vw', width: '43vw' }} src="https://www.woimg.com/beego/8fb7d286752a2bba71acfb37a344d698.jpg" alt="" />
                        <img onClick={this.goto.bind(null, "/tiyan")} style={{ margin: '0vw 3vw 1vw 3vw', float: 'left', width: '46vw' }} src="https://m.anlewo.com/static/img/zcb@3x.a2246.png" alt="" />
                        <img onClick={this.goto.bind(null, "/tiyan")} style={{ margin: '0 3vw', float: 'left', width: '46vw' }} src="https://m.anlewo.com/static/img/zzb@3x.c85b1.png" alt="" />
                    </div>
                </div>
                <div className="nav">
                    <p className="title">品牌街 <span onClick={this.goto.bind(null, "/topic")}>更多127 &gt;</span></p>
                    <div className="navimg">
                        {
                            this.state.arr ?
                                (this.state.arr.map(item => {
                                    return (<img src={item.logo} key={item.id} alt="" />)
                                }))
                                :
                                ''
                        }
                    </div>

                </div>
                <div className="collocation">
                    <p className="title">窝搭配 <span onClick={this.goto.bind(null, "/goodslist")} >更多搭配 &gt;</span></p>
                    <img src="https://www.woimg.com/beego/394e4ae10cd353c797b6acb953c15fe1.jpg" alt="" />
                    <p style={{ margin: '5vw 0' }}>窝搭配装修案例赏析</p>
                    <p className="detile"><span>客厅</span><span>卧室</span> 现代简约</p>
                </div>
                <img style={{ width: '100vw', marginTop: '2vw' }} src="https://m.anlewo.com/special/join/img/banner.png" alt="" />
                <p className='foot'>我是有底线的</p>
            </div>

        );
    }
}



export default Home;