import React, { Component } from 'react'

import {Image} from 'react-bootstrap'
import P1 from './images/p1.jpg'
import OperationBox from './OperationBox'
import SlideShow from './SlideShow'



class BannerView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false,
			BannerControl: {
				isfloor: false,
				floorName: '', 
				picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
				picMaxnum4Web: 1,
				picMaxnum4App: 1,
				backgroundColor: '#ffffff',
				bannerProperty: []
			}
		}
	}

	handleHover() {
		this.setState(old => {
			old.hover = true
			return old
		})
	}

	handleLeave() {
		this.setState(old => {
			old.hover = false
			return old
		})
	}

	//平铺形式下，banner列渲染
	// colRender(colNum4Web) {
	// 	let output = []
	// 	for(let i = 0; i < colNum4Web; i++) {
	// 		output.push(
	// 			<div style={{width: `calc(100% / ${colNum4Web})`}}>
	// 				<Image 
	// 					src={P1} 
	// 					rounded  
	// 					style={{height: this.props.modal === 'web' ? '200px' : '150px', position: 'relative', width: '100%'}} 
	// 				/>
	// 			</div>
	// 		)
	// 	}
	// 	return output 	
	// }

	//平铺webbanner渲染
	tileBannerRender(item) {
		const colNum = this.props.modal === 'web' ? item.picMaxnum4Web : item.picMaxnum4App//web每行最多展示
		const len = item.bannerProperty.length || 1 //banner的总个数 //这个时候为啥是这样显示的

		let output = []
		for(let i = 0; i < len; i++) {
			output.push(
				<span style={{width: `calc(100% / ${colNum})`, display: 'inline-block'}}>
					<Image 
						src={P1} 
						rounded  
						style={{height: this.props.modal === 'web' ? '200px' : '150px', position: 'relative', width: '100%'}} 
					/>
				</span>
			)
		}
		return output 	
	}

	bannerRender(data) {
		const output = +data.picStyle ?  //展示方式字段为字符串，无法通过这个地方的逻辑
		<div style={{width: '100%'}}>
			{this.tileBannerRender(data)} 
		</div>
		: 
		<SlideShow /> //轮播形式下，app和web应该有一点区别
		return output
	}

	//暂时先不考虑具体渲染

	// buttonRender() {
	// 	//const {index, length, moveOn, moveDown, ondelete} = this.props
	// 	const {index, length, moveOn, moveDown, ondelete, item} = this.props
    //     console.log("index", index)
    //     let output
    //     length === 1 ?
    //     output = <Button variant="danger" onClick={ondelete.bind(this, index)}>删除</Button>
    //     :
    //     output = <div>
    //                 {
    //                     length != 1 && index != 0 ? 
    //                     <Button variant="info" onClick={moveOn.bind(this, index)} style={{marginRight: '5px'}}>上移</Button> : null 
    //                 }
    //                 {
    //                     length != 1 && index != length - 1 ? 
    //                     <Button variant="info" onClick={moveDown.bind(this, index)} style={{marginRight: '5px'}}>下移</Button> : null 
    //                 }
    //                 <Button variant="danger" onClick={ondelete.bind(this, index)}>删除</Button>
    //             </div>
    //     return output
    // }

	render() {
		const {index, length, moveOn, moveDown, ondelete} = this.props
		const data = window._.getControls()[index].BannerControl //banner配置项
		const {hover} = this.state

		return(
			<div 
				onClick={this.props.onClick.bind(this, 'banner', 0, index)} 
				style={{marginBottom: '10px', width: '100%', backgroundColor: `${data.backgroundColor}`}} 
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			>
				<div style={{position: 'relative', width: '100%'}}>
					{this.bannerRender(data)}
					<div style={{position: 'absolute', top: '0px', right: '0px', visibility: hover ? 'visible' : 'hidden'}}>
						{
							<OperationBox 
								index={index}
								length={length}
								moveOn={moveOn}
								moveDown={moveDown}
								ondelete={ondelete}
							/>
						}	
                    </div>
				</div>
			</div>
		)
    }
}

export default BannerView

//平铺或者轮播的形式
//数据更新了，页面没有再度更新，没有感知到最新数据变化
//更新的时机不对吗，可是别的属性更新上了，页面基础结构不行