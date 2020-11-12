
import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

// import { connect } from 'react-redux'; //redux相关
// import { createAction } from './actions'

import ControlsLayout from './controls/ControlsLayout'
import ViewLayout     from './views/ViewLayout'
import EditsLayout    from './edits/EditsLayout'

const edits = require('../listData/editData.json')
const List = require('../listData/viewData.json')


class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			currentEdits: {
				controlName: '',
				controlIndex: 0,
				index: 0
			},
			areaName: '',
			areaId: '',
			editsIndex: [],
			cornerMarkTime: {
				startTime: '',
				endTime: ''
			},
			remark: '',
			
		}
	} 

	componentWillMount() {
		console.log("List", window._.getControls())
		this.setState(old => {
			old.list = window._.getControls()
			//old.List = window._.init()
			return old
		})
	}

	init() {
		console.log("List", window._.getControls()) //???
		this.setState(old => {
			old.list = window._.getControls()
			//old.List = window._.init()
			return old
		})
	}

	forceUpdateHandler(){
		this.forceUpdate();
	};

	//怎么这么拧？？
	handleClick(name, index, i) {
		console.log("name, index, i", name, index, i)
		this.setState(old => {
			old.currentEdits.controlName = name
			old.currentEdits.controlIndex = index
			old.currentEdits.index = i
			return old
		})
		this.forceUpdate();
		//let editsList = []
		// const controls = {
		// 	bannerControl: {
		// 		isfloor: 0,
		// 		floorName: '', 
		// 		picStyle: 1, //图片展示方式，平铺和轮播形式 
		// 		picMaxnum4Web: 1,
		// 		picMaxnum4App: 1,
		// 		backgroundColor: '',
		// 		bannerProperty: []
		// 	}, //banner控件配置项
		// 	timeControl: {
		// 		isFloor: 0,
		// 		floorName: '',
		// 		countDownText: '默认文案',
		// 		countDownTime: '',
		// 		backgroundColor4Web: '',
		// 		img4Web: ''
		// 	}, //计时控件配置项
		// 	couponControl: {
		// 		isFloor: 0,
		// 		floorName: '',
		// 		isUnifyGetTime: false,
		// 		isMultiTime: false,
		// 		getCouponTime: '',
		// 		getFrequency: '',
		// 		customFrequency: '', //自定义频次
		// 		getTimes: [{
		// 			startTime: '',
		// 			endTime: ''
		// 		}],
		// 		maxNum4Web: '',
		// 		maxNum4App: '',
		// 		backgroundColor4Web: '',
		// 		couponProperty: []
		// 	}, //领券控件配置项
		// 	commidityControl: {
		// 		isFloor: 0,
		// 		floorName: '',
		// 		backgroundColor4Web: '',
		// 		backgroundColor4App: '',
		// 		isCornerMark: false,
		// 		cornerMarkUrl: '',
		// 		skuList: []
		// 	}, //商品控件配置项
		// 	flashSaleControl: {
		// 		isFloor: 0,
		// 		backgroundColor4Web: '',
		// 		backgroundColor4App: '',
		// 		noticeTextColor4Web: '',
		// 		noticeTextColor4App: '',
		// 		activeColor4Web: '',
		// 		activeColor4App: '',
		// 		isCornerMark: false,
		// 		cornerMarkImg: ''
		// 	}, //限时抢购控件配置项
		// 	awardControl: {
		// 		isFloor: 0,
		// 		floorName: '',
		// 		awardName: '',
		// 		disTimeRange: {
		// 			startTime: '',
		// 			endTime: ''
		// 		}
		// 	} //抽奖控件配置项
		// }
		// const controlName = ['bannerControl', 'timeControl', 'couponControl', 'commidityControl', 'flashSaleControl', 'awardControl']
		// editsList.push(Object.assign({
		// 	"name": name,
		// 	"type": index, 
		// 	"key": i,
		// }, controls[controlName[index]]))
		// this.setState(old => {
		// 	//console.log("editsList", editsList)
		// 	old.editsList = editsList
		// 	return old
		// }
	}

	//增加子配置项
	handleAddChildEdit(e, index) {
		//需要知道需要改变的列表项数组的序号和名字
		console.log("list", window._.getControls(), index) //list数据不能及时更新
		let list = window._.getControls()
		let arr = list[index].BannerControl.bannerProperty; //复制一个数组
		const name = e.target.name //name之后会用到
        arr.push({
            bannerSortIndex: '',
            bannerImg4Web: '',
            bannerLinkType4Web: '',
            bannerImg4App: '',
            bannerLinkType4App: ''
		});
		list[index].BannerControl.bannerProperty = arr
		window._.changeControl(index, list[index])
		this.init()
	}
	
	handleRemoveChildEdit(e, index, controlIndex) { 
		//index出现了不同的含义
		console.log("list", this.state.list, index, controlIndex)
		const name = e.target.name
        let arr = this.state.list[controlIndex].BannerControl.bannerProperty; //读一份
        arr.splice(index, 1)
        this.setState(old => {
			old.list[controlIndex].BannerControl.bannerProperty = arr
            return old
		})
		window._.changeControl(controlIndex, this.state.list[controlIndex])
		this.init()
    }

	//改变控件属性 //编辑功能实现的切入口
	handleChangeControls(e, index, controlname) {
        console.log("index", index)
        console.log("e.target.value", e.target.value)
        const name = e.target.name
        const value = e.target.value
        //哪个控件的哪个属性，需要知道控件的index而不是控件类型的index
        //index, controlname, name, value
		window._.changeAttribute(index, controlname, name, value) //改变成功，但是视图不发生改变
		this.forceUpdate()
	}

	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend} >
				<div style={{display: 'flex'}}>
					<ControlsLayout/>
					<ViewLayout 
						onClick={this.handleClick.bind(this)} 
						List={this.state.list}
						//style={{position: 'absolute', overflow: 'hidden'}}
					/>
					<EditsLayout 
						list={this.state.list} 
						onChange={this.handleChangeControls.bind(this)} 
						edits={edits}
						handleAddChildEdit={this.handleAddChildEdit.bind(this)}
						handleRemove={this.handleRemoveChildEdit.bind(this)}
						currentEdits={this.state.currentEdits} //当前的编辑项
					/>
				</div>
			</DragDropContextProvider>
		)
	}
}

export default Layout; //创造上下文环境