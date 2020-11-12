import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {Image} from 'react-bootstrap'
import P1 from './images/p1.jpg'
import ItemTypes from '../types';
import OperationBox from './OperationBox'
const List = require('../../listData/viewData.json')

export default class AwardView extends Component {
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
		const primaryStyle = {
			width: '30%', 
			height: modal === 'web' ? '150px' : '100px'
		}
		const secondStyle = {
			width: '30%', 
			height: modal === 'web' ? '150px' : '100px', 
			marginLeft: '3%', 
			marginRight: '3%'
		}
		const centerStyle = {
			width: '30%', 
			height: modal === 'web' ? '150px' : '100px', 
			borderRadius: '15px', 
			margin: '3% 3%'
		}
		const thridStyle = {
			width: '30%', 
			height: modal === 'web' ? '150px' : '100px',  
			margin: '3% 0'
		}
        return (
			<div 
				onClick={this.props.onClick.bind(this, 'award', 5)}
				style={{marginBottom: '10px', position: 'relative'}}
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			>
				<div style={{position: 'relative'}}>
					<div style={{width: '70%',margin: 'auto'}}>
						<div style={{display: 'flex'}}>
							<Image src={P1} rounded  style={primaryStyle}/>
							<Image src={P1} rounded  style={secondStyle}/>
							<Image src={P1} rounded  style={primaryStyle}/>
						</div>
						<div style={{display: 'flex'}}>
							<Image src={P1} rounded  style={thridStyle}/>
							<Image src={P1}  style={centerStyle} />
							<Image src={P1} rounded  style={thridStyle}/>
						</div>
						<div style={{display: 'flex'}}>
							<Image src={P1} rounded  style={primaryStyle}/>
							<Image src={P1} rounded  style={secondStyle}/>
							<Image src={P1} rounded  style={primaryStyle}/>
						</div>
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
