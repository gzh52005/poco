import React, { useState, useEffect, useReducer, useCallback } from 'react';
// import { ListView } from 'antd-mobile';
import './index.scss'
// import goodsApi from '../../api/goods';

function Detail(props) {
    console.log('props=============>', props);
    let oMeta = document.createElement('meta');
    oMeta.content = 'no-referrer';
    oMeta.name = 'referrer';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
    return (
        <div className='detail'>
            <div className="box0">
                <div className='box1'>
                    <img src="http://www.woimg.com/beehive/2019/06/b1c404996509dc87d1e57a211b9acdd3.jpeg" alt="" />
                </div>
                <div className="box2">
                    <div className="left-img">
                        <img src="http://www.woimg.com/beehive/2019/06/b1c404996509dc87d1e57a211b9acdd3.jpeg" alt="" />
                    </div>
                    <div className="mid-img">
                        <span>款式<br />预览</span>
                    </div>
                    <div className="right-img">
                        <img src="http://www.woimg.com/beehive/2019/06/b1c404996509dc87d1e57a211b9acdd3.jpeg" alt="" />
                    </div>
                </div>
                <div className="box3">
                    <h3>鹰牌陶瓷 TE0D6FA-T09E 君子白玉 800*800 全抛釉 一石多面</h3>
                    <div className="box-con">

                        <p className={'p1'}>
                            <i></i>
                            <span className="s1">+</span>
                            <span className="s2">
                                ¥ 0元
                                        </span>
                            <span className="s3">套餐</span>
                        </p>
                        <p className="p2">
                            <span className="s4">
                                市场价
                            <s>¥288</s>
                            </span>
                            <span className="s5">65830已售</span>
                        </p>
                        <p className="p3">
                            <span>适用于</span>
                            <span>主材包</span>
                            <span>整装包</span>
                            <span>拎包入住</span>
                        </p>
                    </div>
                </div>
                <div className="box4">
                    <h3>规格参数</h3>
                    <ul>
                        <li>
                            <span>分类</span>
                            <span>地砖</span>
                        </li>
                        <li>
                            <span>安乐窝型号</span>
                            <span>TE0D6FA-T09E</span>
                        </li>
                        <li>
                            <span>品牌</span>
                            <span>鹰牌陶瓷</span>
                        </li>
                        <li>
                            <span>风格</span>
                            <span>北欧风,现代简约,美式,欧式,新中式,轻奢</span>
                        </li>
                        <li>
                            <span>类别</span>
                            <span>抛釉砖</span>
                        </li>
                        <li>
                            <span>地砖尺寸</span>
                            <span>800*800</span>
                        </li>
                    </ul>
                </div>
                <div className="box5">
                    <img src="http://www.woimg.com/beehive/d846ab431da81cbee071b3fcdbe8c920.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/2017/02/26a6e7a74ae2f79f28dbcdd094a5f0fd.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/8ee1c8490a4c2ee7621ff609e104a587.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/a15ee165ec150713596e521c0d1d527f.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/2017/02/62736577379c6392a4e929babdbe0927.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/2017/02/ee9198f2eb44aea4d42438611d336fb1.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/be384da280b11915a37a1a7a7ab52612.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}
export default Detail;