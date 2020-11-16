import React, { useState, useEffect, useReducer, useCallback } from 'react';
// import { ListView } from 'antd-mobile';
import './index.scss'
import goodsApi from '../../api/goods';
import Customer from '../Tiyan/customer'
import { Icon, Grid } from 'antd-mobile';



function Detail(props) {
    let [currentIndex, changeCurrent] = useState(true) //切换类名默认值
    let [listData, changeData] = useState([]) //接收值和改变值的方法
    // console.log('props=============>', props);
    let id = props.match.params.id * 1;
    console.log('id=========>', id);
    //添加head标签
    let oMeta = document.createElement('meta');
    oMeta.content = 'no-referrer';
    oMeta.name = 'referrer';
    document.getElementsByTagName('head')[0].appendChild(oMeta);

    useEffect(function () {
        goodsApi.shopDetail(id).then(res => {
            // console.log(res.data.data);
            let newData = res.data.data
            changeData(listData = newData)
            console.log(listData);
        })
    }, [])
    return listData[0] ? (
        <div className='detail'>

            <div className="box0">
                <div className='box1'>
                    <img src={listData[0].img} />
                </div>
                <div className="box2">
                    <div className="left-img">
                        <img src={listData[0].img} alt="" className={currentIndex == true ? 'linebox' : ''}
                            onClick={() => {
                                changeCurrent(currentIndex = true)
                            }}
                        />
                    </div>
                    <div className="mid-img">
                        <span>款式<br />预览</span>
                    </div>
                    <div className="right-img" >
                        <img src={listData[0].img} alt="" className={currentIndex == false ? 'linebox' : ''}
                            onClick={() => {
                                changeCurrent(currentIndex = false)
                            }} />
                    </div>
                </div>
                <div className="box3">
                    <h3>{listData[0].goodsName}</h3>
                    <div className="box-con">

                        <p className={'p1'}>
                            <i></i>
                            <span className="s1">+</span>
                            <span className="s2">
                                ¥{listData[0].labelPrice}元
                                        </span>
                            <span className="s3">套餐</span>
                        </p>
                        <p className="p2">
                            <span className="s4">
                                市场价
                            <s>{'￥' + listData[0].saleNum}</s>
                            </span>
                            <span className="s5">{listData[0].saleNum}已售</span>
                        </p>
                        <p className="p3">
                            {
                                listData[0].packages.map((item) => {
                                    return (<span key={item.id}>{item.name}</span>)
                                })
                            }

                        </p>
                    </div>
                </div>
                <div className="box4">
                    <h3>规格参数</h3>
                    <ul>
                        {
                            listData[0].goodsAttr.map(item => {
                                return (
                                    <li key={item.id}>
                                        <span>{item.id}</span>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>
                <div className="box5">
                    {
                        listData[0].body.map(item => {
                            return (
                                <img key={item.value} src={item.value} alt="" />
                            )
                        })
                    }

                    {/* <img src="http://www.woimg.com/beehive/2017/02/26a6e7a74ae2f79f28dbcdd094a5f0fd.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/8ee1c8490a4c2ee7621ff609e104a587.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/a15ee165ec150713596e521c0d1d527f.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/2017/02/62736577379c6392a4e929babdbe0927.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/2017/02/ee9198f2eb44aea4d42438611d336fb1.jpg" alt="" />
                    <img src="http://www.woimg.com/beehive/be384da280b11915a37a1a7a7ab52612.jpg" alt="" /> */}
                </div>
                <div className='icon-png' onClick={() => { props.history.go(-1) }}></div>
            </div>
            <Customer />
        </div >
    ) : null
}
export default Detail;