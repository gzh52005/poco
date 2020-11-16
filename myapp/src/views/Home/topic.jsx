import React from 'react'
import Api from '../../api/goods'
import './topic.scss'

let data = [];

function Topic() {

    Api.topic().then(res => {
        console.log(res);

        for (let i = 0; i < res.data.data.length; i++) {
            let obj = {};
            // console.log(res.data.data[i].brand,111);
            // console.log(res.data.data[i].cateName,111);
            obj['cateName'] = res.data.data[i].cateName
            // obj['img'] = res.data.data[i].brand[0].logo
            // 把生成的每一个对象push进data数组里面
            for (let a = 0; a < res.data.data[i].brand.length; a++) {
                console.log(res.data.data[i].brand[a].logo,222);
                 
                let arr=[]
                arr.push( res.data.data[i].brand[a].logo)
                // for(let b=0;b<res.data.data[i].brand[a].logo.length;b++){
                //     obj['logo'] = res.data.data[i].brand[a].logo
                // }
                console.log(a,333);
            }
          
            data.push(obj)
            
        }
        console.log(data);

    })

    return (
        <div className='topic'>
            <div className='title'> <img style={{
                width: '18px',
                height: '18px',
                position: 'absolute',
                left: '20px',
                top: '15px'
            }} src="data:image/svg+xml,%3Csvg%20t%3D%221605428850537%22%20class%3D%22icon%22%20viewBox%3D%220%200%201024%201024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%222817%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M941.30151%20553.196261%20240.410442%20553.196261l347.19756%20347.19756-58.257845%2058.256822L82.697467%20512.001023%20529.350157%2065.349357l58.257845%2058.259892-347.19756%20347.19756%20700.891068%200L941.30151%20553.196261zM199.215204%20512.001023l0.573051%200.571005%200-1.144056L199.215204%20512.001023z%22%20p-id%3D%222818%22%20fill%3D%22%232c2c2c%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />品牌</div>



            <div className="imgBox">
                <div style={{ marginTop: '46px' }}>
                    <div style={{ paddingTop: '18px', width: '100%', textAlign: 'center', background: '#fff' }}>
                        集成定制
                </div>
                    <ul>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        {/* <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li>
                        <li>
                            <img src="https://www.woimg.com/beego/bafb1950652f86b0bccc1e7d08a11965.png" alt="" />
                        </li> */}
                    </ul>
                </div>
            </div>


        </div>
    )

}

export default Topic;