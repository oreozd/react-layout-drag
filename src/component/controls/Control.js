import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import AppContext from '../../Context/index';

// const style = {
//     width: 200,
//     height: 50,
//     lineHeight: '50px',
//     background: 'pink',
//     margin: '30px auto'
// }

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	margin: '0.5rem 1.5rem 0.5rem 1.5rem',
	cursor: 'move',
	float: 'left',
}

const Control = (props) => {
    console.log("props", props)
    const { item } = props;
    const { list } = useContext(AppContext);
    const [collectProps, drager1] = useDrag({
        item: { type: 'Box', item },
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
    console.log("collectProps.result", collectProps.result)
    //当在目标框内放下被拖拽元素的时候就会触发添加函数
    console.log("control-collectProps", collectProps)
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
        console.log("list", list)
    }
    
    return (
        <div ref={drager1} style={style} >
            {item.name}
        </div> 
    )
}

export default Control;

//关于这个子项的表现为什么不符合我的预期，为什么是每个项都要操作，而不是根据操作的项进行的操作