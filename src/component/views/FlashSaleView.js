import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';


import {Image} from 'react-bootstrap'

import P1 from './images/p1.jpg'

import ItemTypes from '../types';
import OperationBox from './OperationBox'

const List = require('../../listData/viewData.json')
export default class FlashSaleView extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			hover: false
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

	render() {
        const {name, modal, index, length, moveOn, moveDown, ondelete} = this.props
		const {hover} = this.state
        return (
			modal === 'web' ?
			<div 
				onClick={this.props.onClick.bind(this, 'commidity', 4)} 
				style={{marginBottom: '10px', position: 'relative'}}
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			>
				<div style={{width:'100%', height: '80px', backgroundColor: '#000', textAlign: 'center', color: '#fff'}}>
					<div  style={{ lineHeight: '16px', fontWeight: '600'}}>{'倒计时'}</div>
					<div>{"一段倒计时文案"}</div>
				</div>
				<div>距离本场结束还有XX天</div>
				<div style={{position: 'relative'}}>
					<div style={{display: 'flex'}}>
						<div style={{width: '20%', height: '250px', backgroundColor: "#fff"}}></div>
						<div style={{width: '20%', height: '250px', backgroundColor: "#000"}}></div>
						<div style={{width: '20%', height: '250px', backgroundColor: "yellow"}}></div>
						<div style={{width: '20%', height: '250px', backgroundColor: "green"}}></div>
						<div style={{width: '20%', height: '250px', backgroundColor: "blue"}}></div>
					</div>

					<div style={{position: 'absolute', top: '0px', right: '0px', visibility: hover ? 'visible' : 'hidden'}}>
						<OperationBox 
							index={index}
							length={length}
							moveOn={moveOn}
							moveDown={moveDown}
							ondelete={ondelete}
						/>
					</div>
				</div>
            </div>
            :
            <div 
				onClick={this.props.onClick.bind(this, 'commidity', 4)} 
				style={{marginBottom: '10px', position: 'relative'}}
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			>
				<div style={{width:'100%', height: '80px', backgroundColor: '#000', textAlign: 'center', color: '#fff'}}>
					<div  style={{ lineHeight: '16px', fontWeight: '600'}}>{'倒计时'}</div>
					<div>{"一段倒计时文案"}</div>
				</div>
				<div>距离本场结束还有XX天</div>
				<div style={{position: 'relative'}}>
					<div style={{display: 'flex'}}>
						<div style={{width: '50%', height: '200px', backgroundColor: "#fff"}}></div>
						<div style={{width: '50%', height: '200px', backgroundColor: "#000"}}></div>
					</div>

					<div style={{position: 'absolute', top: '0px', right: '0px', visibility: hover ? 'visible' : 'hidden'}}>
						<OperationBox 
							index={index}
							length={length}
							moveOn={moveOn}
							moveDown={moveDown}
							ondelete={ondelete}
						/>
                    </div>
				</div>
			</div>
        )
    }
}
