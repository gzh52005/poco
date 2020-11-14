import React, { useState, useEffect, useReducer, useCallback, ReactDOM } from 'react';

import goodsApi from '../../api/goods';
import './index.scss';
import { Icon, Tabs, WhiteSpace } from 'antd-mobile';


function GoodsList(props) {
    const tabs = [
        { title: '地砖' },
        { title: '墙地砖' },
        { title: '瓷砖地脚线' },
        { title: '花片' },
        { title: '腰线' },
        { title: '瓷砖波打线' },
    ];
    // renderContent = tab =>
    //     (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //         <p>Content of {tab.title}</p>
    //     </div>);
    return (
        <div className="goods-box">
            <div className="goods-box1">
                <h3>建材</h3>
                <Icon type='left' size='lg' className={'icon-left'} onClick={() => { props.history.push('./shop') }} />
            </div>
            <br />
            {/* <WhiteSpace className={'goods-box2'} /> */}
            <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} />}>
                <div style={{ height: '100%', backgroundColor: '#fff', marginTop: '76px' }}>
                    <div className={'goods-box3'}>
                        <ul>
                            <li>
                                <p className="left">
                                    <img src="http://www.woimg.com/beehive/2019/06/b1c404996509dc87d1e57a211b9acdd3.jpeg" alt="" />
                                </p>
                                <div className="right">
                                    <p className={'p1'}>鹰牌陶瓷</p>
                                    <p className={'p2'}>鹰牌陶瓷 TE0D6FA-T09E 君子<br /> 白玉 800*800 全抛釉 一石多面</p>
                                    <p className={'p3'}>
                                        <span>主材包</span>
                                        <span>整装包</span>
                                        <span>拎包入住</span>
                                    </p>
                                    <p className={'p4'}>
                                        <i></i>
                                        <span className="s1">+</span>
                                        <span className="s2">
                                            ¥ 0元
                                        </span>
                                        <span className="s3">套餐</span>
                                    </p>
                                    <p className="p5">
                                        <span className="s4">
                                            市场价
                                        <s>¥288</s>
                                        </span>
                                        <span className="s5">
                                            6万+已售
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <p className="left">
                                    <img src="http://www.woimg.com/beehive/2019/06/b1c404996509dc87d1e57a211b9acdd3.jpeg" alt="" />
                                </p>
                                <div className="right">
                                    <p className={'p1'}>鹰牌陶瓷</p>
                                    <p className={'p2'}>鹰牌陶瓷 TE0D6FA-T09E 君子<br /> 白玉 800*800 全抛釉 一石多面</p>
                                    <p className={'p3'}>
                                        <span>主材包</span>
                                        <span>整装包</span>
                                        <span>拎包入住</span>
                                    </p>
                                    <p className={'p4'}>
                                        <i></i>
                                        <span className="s1">+</span>
                                        <span className="s2">
                                            ¥ 0元
                                        </span>
                                        <span className="s3">套餐</span>
                                    </p>
                                    <p className="p5">
                                        <span className="s4">
                                            市场价
                                        <s>¥288</s>
                                        </span>
                                        <span className="s5">
                                            6万+已售
                                        </span>
                                    </p>
                                </div>
                            </li>


                        </ul>
                    </div>

                </div>
            </Tabs>
            {/* <WhiteSpace /> */}
        </div>
    )
}


export default GoodsList;