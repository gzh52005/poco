import React, { useState, useEffect, useReducer, useCallback, ReactDOM } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import { ListView } from 'antd-mobile';
import './index.scss'
import goodsApi from '../../api/goods';
const data = [];
const NUM_ROWS = 40;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        //添加<head>标签
        let oMeta = document.createElement('meta');
        oMeta.content = 'no-referrer';
        oMeta.name = 'referrer';
        document.getElementsByTagName('head')[0].appendChild(oMeta);

        goodsApi.goodsDetail().then(res => {
            // console.log('sdasdasda======>', res.data.data)
            let newData = res.data.data;
            for (let i = 0; i < newData.length; i++) {
                let obj = {};
                obj['id'] = newData[i].goodsId; //id
                obj['name'] = newData[i].brandName;
                obj['cateName'] = newData[i].cateName;
                obj['goodsName'] = newData[i].goodsName;
                obj['img'] = newData[i].img;
                obj['marketPrice'] = newData[i].marketPrice;
                obj['sev'] = newData[i].packages;
                obj['price'] = newData[i].price;
                obj['saleNum'] = newData[i].saleNum;
                obj['specString'] = newData[i].specString;
                obj['floatPrice'] = newData[i].floatPrice;
                data.unshift(obj)
                // console.log(data)
            }

        })


        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        // if (this.state.isLoading && !this.state.hasMore) {
        //     return;
        // }
        // console.log('reach end', event);
        // this.setState({ isLoading: true });
        // setTimeout(() => {
        //     this.rData = { ...this.rData, ...genData(++pageIndex) };
        //     this.setState({
        //         dataSource: this.state.dataSource.cloneWithRows(this.rData),
        //         isLoading: false,
        //     });
        // }, 1000);
        return
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',

                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }} className={'con-box'} onClick={() => {
                    this.props.history.push({
                        pathname: '/detail/' + obj.id,
                        // id: obj.id
                    })
                }}>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }} className='box'>
                        <div className='left'>
                            <img src={obj.img} alt="" />
                        </div>
                        <div className="right">

                            <p className={'p1'}>{obj.name}</p>
                            <p className={'p2'}>{obj.goodsName}</p>

                            <p className={'p3'}>
                                {obj.sev.map(item => {
                                    return (<span key={item.id}>{item.name}</span>)
                                })}


                            </p>
                            <p className={'p4'}>
                                <i></i>
                                <span className="s1">+</span>
                                <span className="s2">
                                    ¥ {obj.floatPrice}元
                                        </span>
                                <span className="s3">套餐</span>
                            </p>
                            <p className="p5">
                                <span className="s4">
                                    市场价
                                        <s>¥{obj.marketPrice}</s>
                                </span>
                                <span className="s5">

                                    {obj.saleNum > 10000 ? parseInt(obj.saleNum / 10000) + '万+' : obj.saleNum} 已售
                                        </span>
                            </p>
                        </div>

                    </div>

                </div >
            );
        };
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                // renderHeader={() => <span>header</span>}
                renderFooter={() => (<div style={{ padding: 0, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : '我是有底线的......'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}
Demo = withRouter(Demo)
export default Demo;