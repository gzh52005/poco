// POCO认证
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import goodsApi from '../../api/goods';
import './index.scss';
function Shop(props) {
    // console.log(props);
    let [build, changeData] = useState([]);
    let [build1, changeData1] = useState([]);
    let [build2, changeData2] = useState([]);

    useEffect(function () {
        // 这里的代码在初始化和组件刷新时执行
        goodsApi.shop().then(res => {
            let data = res.data.data[0].data[0].data;
            let data1 = res.data.data[0].data[1].data;
            let data2 = res.data.data[0].data[2].data;
            changeData(build = data)
            changeData1(build1 = data1)
            changeData2(build2 = data2)
            // console.log(build);
        })





    }, [])

    return (
        <div className="shop-bigBox" onScroll={(e) => {
            console.log(e);
        }}>
            <div className="shop-box">
                <i className='shop-logo'></i>
                <i className='shop-nav' onClick={() => { props.history.push('./listshop') }}></i>
            </div>
            <div className="shop-box1">
                <p></p>
                <div>
                    <ul>
                        {
                            build.map(item => {
                                return <li key={item.name}>
                                    <img src={`${item.img}`} alt="" onClick={() => { props.history.push('./goodslist') }} />
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
            <div className="shop-box2">
                <p></p>
                <div>
                    <ul>
                        {
                            build1.map(item => {
                                return <li key={item.name}>
                                    <img src={`${item.img}`} alt="" onClick={() => { props.history.push('./goodslist') }} />
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="shop-box3">
                <p></p>
                <div>
                    <ul>
                        {
                            build2.map(item => {
                                return <li key={item.name}>
                                    <img src={`${item.img}`} alt="" onClick={() => { props.history.push('./goodslist') }} />
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}


export default Shop;