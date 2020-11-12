import React, { Component } from 'react'
import P1 from './images/p1.jpg'

import {Container, Row, Col, Image} from 'react-bootstrap'
const editsList = require("../../listData/editData.json");


export default class Views extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			
		}
	} 

     //banner控件渲染
  	bannerRender(controlname) {
		return (
			<div onClick={this.props.onClick.bind(this, 'banner', 0)} style={{marginBottom: '10px'}}>
				{controlname}
				<Image src={P1} rounded  style={{width: '100%', height: '150px'}}/>
			</div>
		);
  	}

  	timeRender(controlname) {
		return (
            <div style={{marginBottom: '10px'}}> 
                <div style={{position: 'relative'}} onClick={this.props.onClick.bind(this, 'time', 1)}>
                    {controlname}
                    <Image src={P1} rounded  style={{width: '100%', height: '150px'}}/>
                    <div style={{width:'70%', height: '40%', backgroundColor: '#fff', textAlign: 'center', position: 'absolute', top: '30%', left: '15%', verticalAlign: 'middle'}}>
                        <div  style={{ lineHeight: '16px', fontWeight: '600', marginTop: '10px' }}>{'倒计时'}</div>
                        <div>{"一段倒计时文案"}</div>
                    </div>
                </div>
            </div>
		);
  	}

  	couponRender (controlname) {
		return (
			<div onClick={this.props.onClick.bind(this, 'coupon', 2)} style={{marginBottom: '10px'}}>
				{controlname}
				<div>
					<Image src={P1} rounded  style={{width: '100%', height: '150px'}}/>
				</div>
			</div>
		);
	}

	commidityRender(controlname) {
		return (
			<div onClick={this.props.onClick.bind(this, 'commidity', 3)} style={{marginBottom: '10px'}}>
				{controlname}
				<div style={{display: 'flex'}}>
					<div style={{width: '50%', height: '200px', backgroundColor: "#fff"}}></div>
					<div style={{width: '50%', height: '200px', backgroundColor: "#000"}}></div>
				</div>
			</div>
		);
	}

	flashSaleRender(controlname) {
		return (
			<div style={{position: 'relative'}} onClick={this.props.onClick.bind(this, 'flashSale', 4)} style={{marginBottom: '10px'}}>
				{controlname}
				<div style={{width:'100%', height: '80px', backgroundColor: '#000', textAlign: 'center', color: '#fff'}}>
					<div  style={{ lineHeight: '16px', fontWeight: '600'}}>{'倒计时'}</div>
					<div>{"一段倒计时文案"}</div>
				</div>
				<div>距离本场结束还有XX天</div>
				<div style={{display: 'flex'}}>
					<div style={{width: '50%', height: '200px', backgroundColor: "#fff"}}></div>
					<div style={{width: '50%', height: '200px', backgroundColor: "#000"}}></div>
				</div>
			</div>
		);
	}

	awardRender (controlname) {
		return (
			<div onClick={this.props.onClick.bind(this, 'award', 5)} style={{marginBottom: '10px'}}>
				{controlname}
				<div style={{width: '70%',margin: 'auto'}}>
					<div style={{display: 'flex'}}>
						<Image src={P1} rounded  style={{width: '30%', height: '100px'}}/>
						<Image src={P1} rounded  style={{width: '30%', height: '100px', marginLeft: '3%', marginRight: '3%'}}/>
						<Image src={P1} rounded  style={{width: '30%', height: '100px'}}/>
					</div>
					<div style={{display: 'flex'}}>
						<Image src={P1} rounded  style={{width: '30%', height: '100px',  margin: '3% 0'}}/>
						<Image src={P1}  style={{width: '30%', height: '100px', borderRadius: '15px', margin: '3% 3%'}} />
						<Image src={P1} rounded  style={{width: '30%', height: '100px',  margin: '3% 0'}}/>
					</div>
					<div style={{display: 'flex'}}>
						<Image src={P1} rounded  style={{width: '30%', height: '100px'}}/>
						<Image src={P1} rounded  style={{width: '30%', height: '100px', marginLeft: '3%', marginRight: '3%'}}/>
						<Image src={P1} rounded  style={{width: '30%', height: '100px'}}/>
					</div>
				</div>
			</div>
		)
	}

    render() {
        
        const {List} = this.props
        return (
            <div>
                {!!List && List.map((item, i) => {
                    //console.log("item", item)
                    if (item.funcIndex == 0) {
                        return this.bannerRender();
                    } else if (item.funcIndex == 1) {
                        return this.timeRender();
                    } else if (item.funcIndex == 2) {
                        return this.couponRender();
                    } else if (item.funcIndex == 3) {
                        return this.commidityRender();
                    } else if (item.funcIndex == 4) {
                        return this.flashSaleRender();
                    } else if (item.funcIndex == 5) {
                        return this.awardRender();
                    }
                })}
            </div>
        )
    }
}
