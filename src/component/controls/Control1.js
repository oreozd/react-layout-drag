import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import AppContext from '../../Context/index';

const style = {
    width: 200,
    height: 50,
    lineHeight: '50px',
    background: 'pink',
    margin: '30px auto'
}

// const style = {
//     width: 200,
//     height: 50,
//     lineHeight: '50px',
//     background: 'pink',
//     margin: '30px auto'
// }

const Control1 = (props) => {
    console.log("props", props)
    const { name, id } = props;
    const { list } = useContext(AppContext);
    const controls = [
        {name: "banner控件", id: 0},
        {name: "计时器控件", id: 1},
        {name: "优惠券控件", id: 2},
        {name: "商品控件", id: 3},
        {name: "限时抢购控件", id: 4},
        {name: "抽奖控件", id: 5}
        // "banner控件",
        // "计时器控件",
        // "优惠券控件",
        // "商品控件", 
        // "限时抢购控件", 
        // "抽奖控件",
    ] 
    const [collectProps, drager] = useDrag({
        item: { type: 'Box', name: 'b', id: 1 },
        collect: (DragSourceMonitor) => ({
            item: DragSourceMonitor.getItem(),
            didDrop: DragSourceMonitor.didDrop()
        }),
        end: (data) => {
            if(collectProps.didDrop) {
                list.push(data.item)
            }
        }
    });
    console.log("control1-collectProps", collectProps)
    //当在目标框内放下被拖拽元素的时候就会触发添加函数
    if(collectProps.didDrop) {
        // console.log("data", data)
        // let item = {}
        // switch (data.id) {
        //     case 0: item = {
        //         name: 'banner',
        //         funcIndex: 0,
        //         BannerControl: {
        //             isfloor: false,
        //             floorName: '', 
        //             picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
        //             picMaxnum4Web: 1,
        //             picMaxnum4App: 1,
        //             backgroundColor: '',
        //             bannerProperty: []
        //         }      
        //     }; break;
        //     case 1: item = {
        //         name: 'time',
        //         funcIndex: 1,
        //         TimeControl: {
        //             isFloor: 0,
        //             floorName: '',
        //             countDownText: '默认文案',
        //             countDownTime: '',
        //             backgroundColor4Web: '',
        //             img4Web: ''
        //         }, //计时控件配置项
        //     }; break;
        //     case 2: item = {
        //         name: "coupon", 
        //         funcIndex: 2,
        //         BannerControl: {
        //             isfloor: false,
        //             floorName: '', 
        //             picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
        //             picMaxnum4Web: 1,
        //             picMaxnum4App: 1,
        //             backgroundColor: '',
        //             bannerProperty: []
        //         }  
        //     }; break;
        //     case 3: item = {
        //         name: "commidity", 
        //         funcIndex: 3,
        //         BannerControl: {
        //             isfloor: false,
        //             floorName: '', 
        //             picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
        //             picMaxnum4Web: 1,
        //             picMaxnum4App: 1,
        //             backgroundColor: '',
        //             bannerProperty: []
        //         }  
        //     }; break;
        //     case 4: item = {
        //         name: 'flashsale',
        //         funcIndex: 4,
        //         BannerControl: {
        //             isfloor: false,
        //             floorName: '', 
        //             picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
        //             picMaxnum4Web: 1,
        //             picMaxnum4App: 1,
        //             backgroundColor: '',
        //             bannerProperty: []
        //         }  
        //     }; break;
        //     case 5: item = {
        //         name: 'award',
        //         funcIndex: 5,
        //         BannerControl: {
        //             isfloor: false,
        //             floorName: '', 
        //             picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
        //             picMaxnum4Web: 1,
        //             picMaxnum4App: 1,
        //             backgroundColor: '',
        //             bannerProperty: []
        //         }  
        //     }; break;
        // }
        // console.log("")
		//list.push(controls[id]);
        //console.log("list", list)
    }
    console.log("drager", drager)
    return (
        <div ref={drager} style={style} >
            {name}
        </div> 
    )
}

export default Control1;

//关于这个子项的表现为什么不符合我的预期，为什么是每个项都要操作，而不是根据操作的项进行的操作