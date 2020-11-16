import React, { useEffect } from 'react'
import Api from '../../api/goods'
import './topic.scss'


class Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
        this.goto=this.goto.bind(this)
    }

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let { data } = await Api.topic()
        // console.log(data)

        this.setState({
            arr: data.data
        })
    }

    goto = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className='topic'>
                <div className='title'> <img
                    onClick={() => {
                        this.props.history.go(-1);
                    }}
                    style={{
                        width: '18px',
                        height: '18px',
                        position: 'absolute',
                        left: '20px',
                        top: '15px'
                    }} src="data:image/svg+xml,%3Csvg%20t%3D%221605428850537%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222817%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M941.30151%20553.196261%20240.410442%20553.196261l347.19756%20347.19756-58.257845%2058.256822L82.697467%20512.001023%20529.350157%2065.349357l58.257845%2058.259892-347.19756%20347.19756%20700.891068%200L941.30151%20553.196261zM199.215204%20512.001023l0.573051%200.571005%200-1.144056L199.215204%20512.001023z%22%20p-id%3D%222818%22%20fill%3D%22%232c2c2c%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />品牌</div>


                {
                    this.state.arr ? this.state.arr.map((item, index) => {
                        return (<div key={item.cateId} className="imgBox">
                            <div style={{ marginTop: '46px' }}>
                                <div style={{ paddingTop: '18px', width: '100%', textAlign: 'center', background: '#fff' }}>
                                    {item.cateName}
                                </div>
                                <ul>
                                    {
                                        this.state.arr[index].brand.map(items => {
                                            return (<li key={items.id}>
                                                <img onClick={this.goto.bind(null, "/shop")} src={items.logo} alt="" />
                                            </li>)
                                        })

                                    }


                                </ul>
                            </div>
                        </div>
                        )
                    }) : ""
                }



            </div>

        )
    }
}


export default Topic;