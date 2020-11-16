import React, { useState, useEffect, useReducer, useCallback, ReactDOM, withRouter } from 'react';
import Demo from './content2'
import './index.scss';
import { Icon, Tabs, WhiteSpace, ListView } from 'antd-mobile';
import Customer from '../Tiyan/customer'


function GoodsList(props) {
    const tabs = [
        { title: '地砖' },
        { title: '墙地砖' },
        { title: '瓷砖地脚线' },
        { title: '花片' },
        { title: '腰线' },
        { title: '瓷砖波打线' },
    ];



    //     //滚动条监听事件
    //     window.addEventListener('scroll', () => {
    //         console.log(parseInt(window.pageYOffset));
    //         // console.log(1);
    //         if (parseInt(window.pageYOffset) == 200) {
    //             goodsApi.goodsDetail(2).then(res => {
    //                 // console.log(res.data.data);
    //                 let dd = res.data.data;
    //                 zz.push(dd)
    //             })
    //         }
    //     })


    // renderContent = tab =>
    //     (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //         <p>Content of {tab.title}</p>
    //     </div>);
    return (
        <div className="goods-box">
            <div className="goods-box1">
                <h3>瓷砖</h3>
                <Icon type='left' size='lg' className={'icon-left'} onClick={() => { props.history.push('./shop') }} />
            </div>
            <br />
            {/* <WhiteSpace className={'goods-box2'} /> */}
            <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} />}>
                <Demo />

            </Tabs>
            {/* <WhiteSpace /> */}
            <Customer />
        </div >
    )
}


export default GoodsList;