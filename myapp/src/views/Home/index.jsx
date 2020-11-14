// 首页
import React, { useState, useEffect } from 'react'
import './index.scss';
import goodApi from '../../api/goods'

import { Carousel, WingBlank } from 'antd-mobile';

class Home extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,

    }

    componentDidMount() {
        goodApi.home().then(res => {
            console.log(res);

        })
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 3000);
    }
    render() {

        return (

            <>
                <div style={{ width:'100vw', position: "fixed", color: "white", zIndex: 9999, padding: '2vw' }}>
                    <span>全国 <img style={{ height: '7px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAMAAACKYC6uAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAy7/7g2NHHQ8G8vHl5Ma6pp8xL9AkDREAAABFSURBVAjXVc5HAoAgEATBXjLm9P+3iigCdes5DerqKKQfBD+3PXk4x9rDQeJ0ae3IbBksH/O24bc/vVHFNT2INMIigewG+nIHBxXJikkAAAAASUVORK5CYII=" alt="" /></span>
                    <img  style={{ marginLeft: '28vw', height: '20px' }} src="https://m.anlewo.com/static/img/icon-logo@2x.1f8cd.png" alt="" />
                    <img style={{ height: '20px',float: "right", marginLeft:"3VW" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAMAAACyy+glAAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMA8jt9TO7Mrfu+QFgmaiD4hWAV4tC0sp9CATfrxRkG1RhPIKgAAAE2SURBVDjLtZVbloMgEEQbFYn4QGN8JZMM+1/l2DIGggL6kfqy4R7sqsYj2Lo2Q/oQ4pEOzRX8ivqLfOvSRx606qSlrnKxOZEbkXyfjdX2LebP1+vJ45uqYzebjnplTF10vlgqJ3NtKhe7+cYb9ku5vcwp9m277PBcZG0az+6sfOWsEnZU4s5n3j16m/bgCV32HzPGl42wqxEbNCffYL7gEObdGPWg4nQPazBq7Iu7YI5+1iLJiBG9Y1wkS/C5lkqtC27/gXo+V65ywW8ggew4nAFZBhSClxET9eiFNfE9+FTPp9I4lXN4gveVrfXdaBMH/CP13QhJf1Zh3cXMsoMsnVlaHWJLoVLwqGCEsAIgUt5iL0sRofWvDLPApCGag1fEYFkFB2HBdL6BNlL9AwobLLyQHd1Wf38lOI+FxFiGAAAAAElFTkSuQmCC" alt="" />
                    <img style={{ height: '20px',float: "right" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMA40mP4L4yFPZcWr7kaEsAAAB3SURBVCjPY1DcjQGEGKQxBTcy7MYCcAkyoAG6CyoiPIMQlIZ7hpAgQjut3Qm3BtNJG/EKYmofHCG/EEtiYMaSQtijMRMYQwp6UgQKcnbv3pKAbpf17t3h6A4Ags0MmII7JmARdGPAFNxagCEovduAAQMoSmGKAQCwpPKtT2LMlwAAAABJRU5ErkJggg==" alt="" />
                </div>
                <WingBlank style={{ margin: 0 }}>
                    <Carousel
                        autoplay={true}
                        infinite
                    //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    //   afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img onChange={() => {
                                    console.log(this.state.img[val], 4444);
                                }}
                                    src={"https://www.woimg.com/beego/7ef88abcf29b07929ae6dfee15ca8dcb.jpg"}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height

                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </>
        );
    }
}



export default Home;