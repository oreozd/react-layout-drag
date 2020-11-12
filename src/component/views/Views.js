import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DropTarget } from "react-dnd";
import ItemTypes from "../types";

import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {Image} from 'react-bootstrap'

import BannerView from './BannerView'
import TimeView from './TimeView'
import CouponView from './CouponView'
import CommidityView from './CommidityView'
import FlashSaleView from './FlashSaleView'
import AwardView from './AwardView'

import P1 from './images/p1.jpg'

//const controls = require("../../listData/controlsData.json")

// const boxTarget = {
//   drop: () => ({ name: "Dustbin" })
// };

// @DropTarget(
//   ItemTypes.SORT,

//   boxTarget,

//   (connect, monitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop(),
//     dropResult: monitor.getDropResult(),

//     dropItemType: monitor.getItemType(),
// 	dropItem: monitor.getItem(),

//     didDrop: monitor.didDrop(),
//     initialClientOffset: monitor.getInitialClientOffset(),
//     initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
//     clientOffset: monitor.getClientOffset(),
//     differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
//     sourceClientOffset: monitor.getSourceClientOffset()
//   })
// )

class Views extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			List: props.List
		}
	} 
	
	handleMoveOn(index) {
		const { List } = this.state
        let tmp = List[index] //临时储存文件
        List.splice(index,1) //移除拖拽项
        List.splice(index-1,0,tmp) //插入放置项
    }

    handleMoveDown(index) {
		const { List } = this.state
        let tmp = List[index] //临时储存文件
        List.splice(index,1) //移除拖拽项
        List.splice(index+1,0,tmp) //插入放置项
    }

    handleDelete(index) {
		// const { List } = this.state
		// List.splice(index,1) //移除拖拽项
		window._.deleteControl(index)
	}
	
	
    
	// listRender(index, i) {
	listRender(item, i) {
		const {controls, modal} = this.props
		const { List } = this.state
		const Components = [
			{
				componentName: BannerView, //硬编码
				name: 'banner'
			},{
				componentName: TimeView,
				name: 'time'
			},{
				componentName: CouponView,
				name: 'coupon'
			},{
				componentName: CommidityView,
				name: 'commidity'
			},{
				componentName: FlashSaleView,
				name: 'falshSale'                
			},{
				componentName: AwardView,
				name: 'award'
			},
		]
		const ComponentName = Components[item.funcIndex].componentName //不是这里的问题，是循环那边出现了问题 
		//有问题 //名字不是一个字符串 
		//react组件可以使用动态名字的话，可以直接实现，为什么还要跳转还需要路由
		return  <ComponentName 
					name= {Components[item.funcIndex].name}
					modal={modal} 
					controls={controls} 
					onClick={this.props.onClick} 
					index={i} length={List.length} 
					moveOn={this.handleMoveOn.bind(this, i)}
					moveDown={this.handleMoveDown.bind(this, i)}
					ondelete={this.handleDelete.bind(this, i)}
					item={item}
					key={i}
				/>;
	}

    render() {
		const { List } = this.state

		console.log("新的List", this.props.List) //诡异的现象
        return (
			<div>
				 
				{!!List && List.map((item, key) => {
					return this.listRender(item, key) //优化之后列表渲染函数
                })}
            </div>
        )
    }
}


export default Views


//  //banner控件渲染
  	// bannerRender(controlname) {
	// 	return (
	// 		<div onClick={this.props.onClick.bind(this, 'banner', 0)} style={{marginBottom: '10px'}}>
	// 			{controlname}
	// 			<Image src={P1} rounded  style={{width: '100%', height: '200px'}}/>
	// 		</div>
	// 	);
  	// }

  	// timeRender(controlname) {
	// 	const data = this.props.controls.timeControlEdits
	// 	return (
    //         <div style={{marginBottom: '10px'}}> 
    //             <div style={{position: 'relative'}} onClick={this.props.onClick.bind(this, 'time', 1)}>
    //                 {controlname}
    //                 <Image src={P1} rounded  style={{width: '100%', height: '200px'}}/>
    //                 <div style={{width:'70%', height: '40%', backgroundColor: '#fff', textAlign: 'center', position: 'absolute', top: '30%', left: '15%', verticalAlign: 'middle'}}>
    //                     <div  style={{ lineHeight: '16px', fontWeight: '600', marginTop: '30px', height: '20px' }}>{data.timeText}</div>
    //                     <div>{"一段倒计时文案"}</div>
    //                 </div>
    //             </div>
    //         </div>
	// 	);
  	// }

  	// couponRender (controlname) {
	// 	return (
	// 		<div onClick={this.props.onClick.bind(this, 'coupon', 2)} style={{marginBottom: '10px'}}>
	// 			{controlname}
	// 			<div>
	// 				<Image src={P1} rounded  style={{width: '100%', height: '200px'}}/>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// commidityRender(controlname) {
	// 	return (
	// 		<div onClick={this.props.onClick.bind(this, 'commidity', 3)} style={{marginBottom: '10px'}}>
	// 			{controlname}
	// 			<div style={{display: 'flex'}}>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "#fff"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "#000"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "yellow"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "green"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "blue"}}></div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// flashSaleRender(controlname) {
	// 	return (
	// 		<div style={{position: 'relative'}} onClick={this.props.onClick.bind(this, 'flashSale', 4)} style={{marginBottom: '10px'}}>
	// 			{controlname}
	// 			<div style={{width:'100%', height: '80px', backgroundColor: '#000', textAlign: 'center', color: '#fff'}}>
	// 				<div  style={{ lineHeight: '16px', fontWeight: '600'}}>{'倒计时'}</div>
	// 				<div>{"一段倒计时文案"}</div>
	// 			</div>
	// 			<div>距离本场结束还有XX天</div>
	// 			<div style={{display: 'flex'}}>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "#fff"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "#000"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "yellow"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "green"}}></div>
	// 				<div style={{width: '20%', height: '250px', backgroundColor: "blue"}}></div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// awardRender (controlname) {
	// 	return (
	// 		<div onClick={this.props.onClick.bind(this, 'award', 5)} style={{marginBottom: '10px'}}>
	// 			{controlname}
	// 			<div style={{width: '70%',margin: 'auto'}}>
	// 				<div style={{display: 'flex'}}>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px'}}/>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px', marginLeft: '3%', marginRight: '3%'}}/>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px'}}/>
	// 				</div>
	// 				<div style={{display: 'flex'}}>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px',  margin: '3% 0'}}/>
	// 					<Image src={P1}  style={{width: '30%', height: '150px', borderRadius: '15px', margin: '3% 3%'}} />
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px',  margin: '3% 0'}}/>
	// 				</div>
	// 				<div style={{display: 'flex'}}>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px'}}/>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px', marginLeft: '3%', marginRight: '3%'}}/>
	// 					<Image src={P1} rounded  style={{width: '30%', height: '150px'}}/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)
	// }


	// {this.listRender(item.funcIndex, i)}
                    // if (item.funcIndex == 0) {
					// 	return <BannerView 
					// 				name="banner" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>;
                    // } else if (item.funcIndex == 1) {
                    //     return <TimeView 
					// 				name="time" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>
                    // } else if (item.funcIndex == 2) {
					// 	return <CouponView 
					// 				name="coupon" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>
                    // } else if (item.funcIndex == 3) {
					// 	return  <CommidityView 
					// 				name="commidity" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>
                    // } else if (item.funcIndex == 4) {
					// 	return  <FlashSaleView 
					// 				name="falshSale" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>
                    // } else if (item.funcIndex == 5) {
					// 	return  <AwardView 
					// 				name="award" 
					// 				modal={modal} 
					// 				controls={controls} 
					// 				onClick={this.props.onClick} 
					// 				index={i} length={List.length} 
					// 				moveOn={this.handleMoveOn.bind(this, i)}
					// 				moveDown={this.handleMoveDown.bind(this, i)}
					// 				ondelete={this.handleDelete.bind(this, i)}
					// 				List={List}
					// 			/>
                    // }