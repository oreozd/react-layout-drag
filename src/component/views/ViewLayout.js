import React from "react";
import PropTypes from "prop-types";

import { DropTarget } from "react-dnd";
import ItemTypes from "../types";

import Views from './Views'
import AppViews from './AppViews'

import "./ViewLayout.css";

import {Button} from 'react-bootstrap'

import BannerView from './BannerView'
import TimeView from './TimeView'
import CouponView from './CouponView'
import CommidityView from './CommidityView'
import FlashSaleView from './FlashSaleView'
import AwardView from './AwardView'

const List = require("../../listData/viewData.json"); //直接读取
const editsList = require("../../listData/editData.json");

const boxTarget = {
	drop: () => ({ name: "Dustbin" })
};

@DropTarget(
	ItemTypes.TEST,
	boxTarget,
	(connect, monitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
		dropResult: monitor.getDropResult(),

		dropItemType: monitor.getItemType(),
		dropItem: monitor.getItem(),

		didDrop: monitor.didDrop(),
		initialClientOffset: monitor.getInitialClientOffset(),
		initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
		clientOffset: monitor.getClientOffset(),
		differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
		sourceClientOffset: monitor.getSourceClientOffset()
	})
)


class  ViewLayout extends React.Component {
	static propTypes = {
		canDrop: PropTypes.bool.isRequired,
		isOver: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props) 
		this.state = {
			modal: 'web', //预览模式
			List: List,
			controls: {
				bannerControlEdits: {}, //banner控件配置项
				timeControlEdits: {}, //计时控件配置项
				couponControlEdits: {}, //领券控件配置项
				commidityControlEdits: {}, //商品控件配置项
				flashSaleControlEdits: {}, //限时抢购控件配置项
				awardControlEdits: {} //抽奖控件配置项
			} //所有控件的配置项
		}
	} 

	componentWillMount() {
		this.setState(old => {
			old.List = window._.getControls()
			return old
		})
	}

	//切换预览模式
	handleChangeViewModal(name) {
		this.setState(old => {
			old.modal = name
			return old
		})
	} 

	//上移函数
	handleMoveOn(index) {
		console.log("index", index)
		window._.moveOnControl(index)
		this.forceUpdate()
	}

	//下移函数
	handleMoveDown(index) {
		console.log("index", index)
		window._.moveDownControl(index)
		this.forceUpdate()
	}

	//删除函数
	handleDelete(index) {
		window._.deleteControl(index) //刪除
		this.forceUpdate()
	}

	//列表渲染
	listRender(item, i) {
		console.log("item", item )
		const {controls, modal} = this.props
		const List = window._.getControls()
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
					list = {List}
					modal={this.state.modal} 
					onClick={this.props.onClick} 
					index={i} 
					length={List.length} //这个实时更新
					moveOn={this.handleMoveOn.bind(this)}
					moveDown={this.handleMoveDown.bind(this)}
					ondelete={this.handleDelete.bind(this)}
					item={item}
					key={i}
				/>;
	}
	


	render() {
		const {canDrop, isOver, connectDropTarget} = this.props;
		const isActive = canDrop && isOver;

		//预览框样式
		const contentBoxStyle = {
			border: isActive ? "1px dashed #222" : "1px dashed #fff",
			width:  this.state.modal == 'web' ? '95%' : '40%',
			margin: "0 auto",
			minHeight: "30%"
		};

		const List = window._.getControls() //获取列表，总是获得最新的列表吗
		return (
			connectDropTarget && connectDropTarget(
				<div
					className="container"
					style={{ width: '65%', backgroundColor: "#ddd", padding: "20px", marginLeft: '10%', minHeight: '1000px', overflowY: 'scroll' }}
				>
					<div style={{position: 'relative', marginBottom: '30px'}}>
						<h3 className="header" style={{ paddingLeft: "20px", color: "#fff" }}>
							预览区
						</h3>
						<div style={{position: 'absolute', right: '5%', top: '0px'}}>
							<Button variant="info" onClick={this.handleChangeViewModal.bind(this, 'web')}>web预览</Button>{' '}{' '}{' '}
							<Button variant="info" onClick={this.handleChangeViewModal.bind(this, 'app')}>App预览</Button>
						</div>
					</div>
				
					<div className="contentBox" style={contentBoxStyle} >
						{
							List.length === 0 ? 
							<p
								style={{
								fontSize: "28px",
								color: "#fff",
								textAlign: "center",
								verticalAlign: "center"
								}}
							>
								试着拖动左边边框里的组件进来康康~
							</p>
							: 
							!!List && List.map((item, key) => {
								console.log("item", item)
								return this.listRender(item, key) //优化之后列表渲染函数
							})
						}
				</div>
			</div>)
		);
	}
}

export default ViewLayout;
