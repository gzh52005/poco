// 体验馆
import React from 'react'
import Api from '../../api/goods'

/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';
import './index.scss'

let data = [];
const NUM_ROWS = 50;
let pageIndex = 0;

let oMeta = document.createElement('meta');
oMeta.content = 'no-referrer';
oMeta.name = 'referrer';
document.getElementsByTagName('head')[0].appendChild(oMeta);

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class Tiyan extends React.Component {
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
        // 发送ajax请求数据
        Api.museum().then(res => {
            // 循环生成的对象放进数组中，根据 ListView 的模板去修改所需数据
            for (let i = 0; i < res.data.data.length; i++) {
                // console.log("img=", res.data.data[i].img)
                // 创建一个的空对象接收图片，标题等信息
                let obj = {};

                obj['img'] = res.data.data[i].img
                obj['name'] = res.data.data[i].name
                obj['addr'] = res.data.data[i].addr

                // 把生成的每一个对象push进data数组里面
                data.unshift(obj)
            }
            // console.log(res);
            // data = res
        })

        // you can scroll to the specified position
        setTimeout(() => this.lv.scrollTo(0, 80), 500);

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
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        // console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
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

                <div>
                    <div key={rowID} style={{ padding: '0 15px' }}>
                        <div style={{ display: '-webkit-box', display: 'flex', padding: '20px 0' }}>
                            <img style={{ width: '100%', height: '120px', marginRight: '15px' }} src={obj.img} alt="" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '16px', fontWeight: '600', color: '#444' }}>{obj.name}</div>
                            <div style={{ padding: '8px 0', marginBottom: '12px' }}><span style={{ fontSize: '14px', color: '#999' }}>{obj.addr}</span></div>
                        </div>
                    </div>
                </div>


            );
        };
        return (
            <div>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => <span>体验馆</span>}
                    renderFooter={() => (<div style={{ padding: 50, textAlign: 'center' }}>
                        {this.state.isLoading ? '加载中...' : '已经到头啦~'}
                    </div>)}
                    renderRow={row}
                    renderSeparator={separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    // onScroll={() => { console.log('scroll'); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
                <div className='customer' style={{ background: '#1296db', position: 'fixed', textAlign: 'center', bottom: '35vh', right: '6vw', zIndex: '11', width: '45px', height: '45px' }}>
                    <img style={{ position:'absolute',width: '18 px', height: '18px',top: '5px',
                        right: '12px' }} src="data:image/svg+xml;charset=utf-8,%3Csvg%20t%3D%221605334743811%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222536%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M576%20904.533333c-17.066667%200-29.866667-12.8-34.133333-25.6-4.266667-17.066667%208.533333-34.133333%2025.6-38.4%20174.933333-29.866667%20302.933333-179.2%20302.933333-354.133333%200-200.533333-162.133333-362.666667-362.666667-362.666667s-362.666667%20162.133333-362.666666%20362.666667c0%2085.333333%2029.866667%20166.4%2085.333333%20230.4%2012.8%2012.8%208.533333%2034.133333-4.266667%2046.933333-12.8%2012.8-34.133333%208.533333-46.933333-4.266666C119.466667%20678.4%2085.333333%20584.533333%2085.333333%20482.133333c0-234.666667%20192-426.666667%20426.666667-426.666666s426.666667%20192%20426.666667%20426.666666c0%20209.066667-149.333333%20388.266667-358.4%20422.4h-4.266667z%22%20p-id%3D%222537%22%20fill%3D%22%23dbdbdb%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M315.733333%20482.133333m-51.2%200a51.2%2051.2%200%201%200%20102.4%200%2051.2%2051.2%200%201%200-102.4%200Z%22%20p-id%3D%222538%22%20fill%3D%22%23dbdbdb%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M512%20482.133333m-51.2%200a51.2%2051.2%200%201%200%20102.4%200%2051.2%2051.2%200%201%200-102.4%200Z%22%20p-id%3D%222539%22%20fill%3D%22%23dbdbdb%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M708.266667%20482.133333m-51.2%200a51.2%2051.2%200%201%200%20102.4%200%2051.2%2051.2%200%201%200-102.4%200Z%22%20p-id%3D%222540%22%20fill%3D%22%23dbdbdb%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M503.466667%20960c-46.933333%200-81.066667-38.4-81.066667-81.066667%200-46.933333%2038.4-81.066667%2081.066667-81.066666s81.066667%2038.4%2081.066666%2081.066666c4.266667%2042.666667-34.133333%2081.066667-81.066666%2081.066667z%20m0-115.2c-17.066667%200-29.866667%2012.8-29.866667%2029.866667s12.8%2029.866667%2029.866667%2029.866666c17.066667%200%2029.866667-12.8%2029.866666-29.866666s-8.533333-29.866667-29.866666-29.866667z%22%20p-id%3D%222541%22%20fill%3D%22%23dbdbdb%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" />
                    <p style={{color:'#fff',
                        position:'absolute',fontSize: '12px', width: '40px', textAlign: 'left', marginTop: '24px',marginLeft:'10px', borderBottom: ' 0 #fff solid',
                        paddingBottom: '0',
                    }}>咨询</p>
                </div>


                <div className='map' style={{ position: 'fixed',  bottom: '15vh', right: '6vw', zIndex: '11', width: '30px', height: '30px',borderRadius: '50%', zIndex: '11',width: '45px', height: '45px' }}>
                    <img style={{width:'100%',height:'100%'}} src="data:image/svg+xml,%3Csvg%20t%3D%221605337866584%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%2217299%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M512%20512m-512%200a512%20512%200%201%200%201024%200%20512%20512%200%201%200-1024%200Z%22%20fill%3D%22%23F9A336%22%20p-id%3D%2217300%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M668.541%20345.714c0-91.579-80.921-163.99-170.377-163.99-89.45%200-168.243%2072.409-168.243%20163.989%200%2083.053%20168.243%20283.258%20168.243%20283.258s170.377-195.943%20170.377-283.257z%20m-232.135%208.522c0-36.21%2029.81-66.022%2063.885-63.897%2034.089%200%2063.899%2027.687%2063.899%2063.897%200.001%2034.075-27.692%2063.885-63.899%2063.885-34.075%200.001-63.885-27.679-63.885-63.885z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%2217301%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M536.465%20758.76l-2.086-6.267c2.602-0.977%205.204-1.955%207.828-2.953%2032.305-47.239%20100.146-79.776%20178.623-79.776%202.938%200%205.859%200.056%208.767%200.146l-1.421-4.732c21.301-6.396%2044.73-8.516%2066.029-10.655h-0.001v21.311c-3.507%200.388-7.015%200.777-10.536%201.191%2011.855%202.823%2023.21%206.428%2033.954%2010.722V501.188c0-23.429-19.165-42.599-44.715-42.599H664.294c-61.766%20108.616-168.252%20232.147-168.252%20232.147S393.809%20567.204%20334.174%20458.59h-87.318c-23.43%200-44.716%2019.167-44.716%2042.599v298.166c0%2023.418%2021.286%2042.586%2044.716%2042.586h279.69c-2.91-9.681-4.456-19.723-4.456-30.023%200-18.797%205.111-36.736%2014.375-53.158z%20m-249.142-33.947c-19.167-8.525-36.207-21.301-55.372-34.075l12.774-17.05c17.037%2012.786%2036.205%2023.429%2053.24%2034.076l-10.642%2017.049z%20m97.972%2044.718c-19.167-8.516-38.334-14.907-59.635-23.434l8.514-19.169c19.166%208.526%2038.337%2017.054%2057.503%2021.313l-6.382%2021.29z%20m72.411%2012.784c-8.524%200-17.037-2.134-27.693-4.263l4.264-21.298c8.521%202.13%2019.167%202.13%2027.681%204.261%2010.656%202.133%2021.298%200%2031.957%200l2.129%2021.3a116.345%20116.345%200%200%201-38.338%200z%22%20fill%3D%22%23FFFFFF%22%20p-id%3D%2217302%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M772.907%20841.939c23.418%200%2044.715-19.166%2044.715-42.587V687.744c-10.744-4.294-22.099-7.897-33.954-10.722-15.719%201.853-31.699%204.229-49.099%209.45l-4.974-16.563a279.981%20279.981%200%200%200-8.767-0.146c-78.477%200-146.318%2032.537-178.623%2079.776%2014.561-5.541%2029.818-11.773%2049.661-22.609l8.525%2019.169c-23.43%2010.657-42.598%2019.169-59.635%2025.56l-4.295-12.898c-9.264%2016.422-14.375%2034.361-14.375%2053.156%200%2010.302%201.546%2020.344%204.456%2030.023h246.365z%20m-83.064-163.986l8.525%2019.164c-19.169%208.525-36.207%2017.051-59.637%2027.694l-8.521-19.168c23.43-10.642%2040.465-19.165%2059.633-27.69z%22%20fill%3D%22%23FFFFFF%22%20opacity%3D%22.4%22%20p-id%3D%2217303%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt=""/>
                </div>
            </div>
        );
    }
}

export default Tiyan;