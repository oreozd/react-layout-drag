import React, {Component} from 'react'
// import BannerControl  from  './BannerControl'
// import CommidityControl from './CommidityControl'
// import CouponControl from './CouponControl'
// import TimeControl from './TimeControl'
// import FlashSaleControl from './FlashSaleControl'
// import AwardControl from './AwardControl'
import Control from './Control'
import Controls from './Controls'
import Control1 from './Control1'

// export default class ControlsLayout extends Component {
//     render() {
//         const controls = [
//             // {name: "banner控件", id: "0"},
//             // {name: "计时器控件", id: "0"},
//             // {name: "优惠券控件", id: "0"},
//             // {name: "商品控件", id: "0"},
//             // {name: "限时抢购控件", id: "0"},
//             // {name: "抽奖控件", id: "0"}
//             "banner控件",
//             "计时器控件",
//             "优惠券控件",
//             "商品控件", 
//             "限时抢购控件", 
//             "抽奖控件",
//         ]
//         return (
//             <div  style={{width: '10%', backgroundColor: '#E8DAEF', position: 'fixed', left: '0px', height: '1000px'}}>
//                 <h4 style={{paddingLeft: '1.5rem', height: '60px', backgroundColor: '#ddd', lineHeight: '60px', marginTop: '0px'}}>控件区</h4>
//                 {
//                     // <div style={{marginBottom: '30px', clear: 'both'}}>
//                     //     <BannerControl name="banner控件" id="0"/>
//                     //     <TimeControl name="计时器控件" id="1"/>
//                     //     <CouponControl name="优惠券控件" id="2"/>
//                     //     <CommidityControl name="商品控件" id="3"/>
//                     //     <FlashSaleControl name="限时抢购控件" id="4"/>
//                     //     <AwardControl name="抽奖控件" id="5"/>
//                     // </div>
//                 } 
//                 {
//                     controls.map((item, index) => {
//                         return <Controls name={item} id={index} />
//                     })
//                 }
//             </div>
//         )
//     }
// }


const ControlsLayout = () => {
    const controls = [
        {
            name: 'banner',
            funcIndex: 0,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
                picMaxnum4Web: 1,
                picMaxnum4App: 1,
                backgroundColor: '',
                bannerProperty: []
            }      
        }, {
            name: 'time',
            funcIndex: 1,
            TimeControl: {
                isFloor: 0,
                floorName: '',
                countDownText: '默认文案',
                countDownTime: '',
                backgroundColor4Web: '',
                img4Web: ''
            }, //计时控件配置项
        }, {
            name: "coupon", 
            funcIndex: 2,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
                picMaxnum4Web: 1,
                picMaxnum4App: 1,
                backgroundColor: '',
                bannerProperty: []
            }  
        }, {
            name: "commidity", 
            funcIndex: 3,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
                picMaxnum4Web: 1,
                picMaxnum4App: 1,
                backgroundColor: '',
                bannerProperty: []
            }  
        }, {
            name: 'flashsale',
            funcIndex: 4,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
                picMaxnum4Web: 1,
                picMaxnum4App: 1,
                backgroundColor: '',
                bannerProperty: []
            }  
        }, {
            name: 'award',
            funcIndex: 5,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
                picMaxnum4Web: 1,
                picMaxnum4App: 1,
                backgroundColor: '',
                bannerProperty: []
            }
        }
    ] 
    // const controls = [
    //     {name: "banner控件", id: 0},
    //     {name: "计时器控件", id: 1},
    //     {name: "优惠券控件", id: 2},
    //     {name: "商品控件", id: 3},
    //     {name: "限时抢购控件", id: 4},
    //     {name: "抽奖控件", id: 5}
    //     // "banner控件",
    //     // "计时器控件",
    //     // "优惠券控件",
    //     // "商品控件", 
    //     // "限时抢购控件", 
    //     // "抽奖控件",
    // ] 
    //控件列表渲染没有问题
    return (
        <div style={{width: '10%', backgroundColor: '#E8DAEF', position: 'fixed', left: '0px', height: '1000px'}}>
            <h4 style={{paddingLeft: '1.5rem', height: '60px', backgroundColor: '#ddd', lineHeight: '60px', marginTop: '0px'}}>控件区</h4>
            {
                controls.map((item, index) => {
                    return <Control item={item} key={index} />
                })
            }
        </div>
    )
}

export default ControlsLayout;
