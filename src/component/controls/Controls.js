import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import ItemTypes from '../types';

const List = require('../../listData/viewData.json') //原始的方式的实现

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	margin: '0.5rem 1.5rem 0.5rem 1.5rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name
        }
        //console.log("props", props)
	},

    // getControlInfo() {

    // },
	endDrag(props, monitor) {
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		const didDrop = monitor.didDrop()
		if (didDrop) {
            let item = {}
            switch (props.id) {
                case 0: item = {
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
                }; break;
                case 1: item = {
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
                }; break;
                case 2: item = {
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
                }; break;
                case 3: item = {
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
                }; break;
                case 4: item = {
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
                }; break;
                case 5: item = {
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
                }; break;
			}
			window._.addControl(item)
		}
	},
}

@DragSource(
	ItemTypes.TEST,
	boxSource,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}),
)
class Controls  extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired
	}

	render() {
		const { connectDragSource } = this.props
		const { name } = this.props

		return connectDragSource && connectDragSource(
			<div style={{ ...style }}>
				{name}
			</div>
		);
	}
}

export default Controls;