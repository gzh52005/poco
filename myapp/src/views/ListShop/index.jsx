
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import goodsApi from '../../api/goods';
import './index.scss';
import { Icon, Grid } from 'antd-mobile';
import Customer from '../Tiyan/customer'

function StopList(props) {
    console.log(props);

    let [listData9, changeData9] = useState([])
    let [listData, changeData] = useState([])
    let [listData2, changeData2] = useState([])
    let [listData3, changeData3] = useState([])
    let [listData4, changeData4] = useState([])
    let [currentIndex, changeCurrent] = useState(0)

    useEffect(function () {
        // 这里的代码在初始化和组件刷新时执行
        //设置<meta>标签
        let oMeta = document.createElement('meta');
        oMeta.content = 'no-referrer';
        oMeta.name = 'referrer';
        document.getElementsByTagName('head')[0].appendChild(oMeta);


        goodsApi.brandList().then(res => {
            let data = res.data.data[0];
            let data9 = res.data.data[0];
            console.log(currentIndex);
            let data1 = res.data.data[0][currentIndex].data.banner;
            let data2 = res.data.data[0][currentIndex].data.brand.brand;
            let data3 = res.data.data[0][currentIndex].data.cate.cate;
            changeData9(listData9 = data9)
            changeData2(listData2 = data1)
            changeData3(listData3 = data2)
            changeData4(listData4 = data3)
            let gg = [];
            let nav;
            for (let i = 0; i < 8; i++) {
                nav = data[i].data.cate.name
                gg.push(nav)
            }
            changeData(listData = gg)
        })
    }, [currentIndex])

    return (

        <div className="lists-box">
            <div className="lists-box1">
                <h3>建材</h3>

                <Icon type='left' size='lg' className={'icon-left'} onClick={() => { props.history.push('./shop') }} />
            </div>
            <div className="box2">
                <div className="box2-left">
                    <ul>
                        {
                            listData.map((item, index) => {
                                //点击选中时添加类名
                                return <li key={item} className={currentIndex == index ? 'check' : ''} onClick={() => {
                                    changeCurrent(currentIndex = index)

                                }}>
                                    {item}

                                </li>
                            })
                        }


                    </ul>
                </div>
                <div className="box2-right">
                    <div className="box3">
                        <img src={`${listData2}`} alt="" />
                    </div>
                    <div className="box4">
                        <h4>推荐品牌</h4>
                        <div>
                            <ul>
                                {
                                    listData3.map(item => {
                                        return <li key={item.id}>
                                            <img src={`${item.logo}`} alt="" />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="box5">
                        <ul>
                            {
                                listData4.map(item => {
                                    return <li key={item.id}>
                                        <p>
                                            <img src={`${item.logo}`} alt="" />
                                            <span>{item.name}</span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
            <Customer />
        </div >
    )
}


export default StopList;