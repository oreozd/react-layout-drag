import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {Image} from 'react-bootstrap'
import P1 from './images/p1.jpg'
import ItemTypes from '../types';
import OperationBox from './OperationBox'

const List = require('../../listData/viewData.json')
export default class CouponView extends Component {
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
        const {modal, index, length, moveOn, moveDown, ondelete} = this.props
        const {hover} = this.state

        return (
            <div 
                onClick={this.props.onClick.bind(this, 'coupon', 2)} 
				style={{marginBottom: '10px'}} 
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			>
				<div style={{position: 'relative'}}>
                    <Image src={P1} rounded  style={{width: '100%', height: modal === 'web' ? '200px' : '150px'}}/>
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
