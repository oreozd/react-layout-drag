import React, { Component } from 'react'
import {Image} from 'react-bootstrap'

import P1 from './images/p1.jpg'
import OperationBox from './OperationBox'

class TimeView extends Component {
    constructor(props) {
		super(props) 
		this.state = {
            hover: false,
            
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

    // buttonRender() {
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
        
        const {modal, index, length, moveOn, moveDown, ondelete} = this.props
        const {hover} = this.state
        const data = window._.getControls()[index].TimeControl
		const timeTextStyle = {
            width:'70%', 
            height: '40%', 
            backgroundColor: '#fff', 
            textAlign: 'center', 
            position: 'absolute', 
            top: '30%', 
            left: '15%', 
            verticalAlign: 'middle'
        }
        
		return (
            <div 
				onClick={this.props.onClick.bind(this, 'banner', 1, index)} 
				style={{marginBottom: '10px', position: 'relative'}}
				onMouseEnter={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)}
			> 
                <Image src={P1} rounded  style={{width: '100%', height: modal === 'web' ? '200px' : '150px'}}/>
                <div style={timeTextStyle}>
                    <div  style={{ lineHeight: '16px', fontWeight: '600', marginTop: modal === 'web' ? '20px' : '10px', height: '20px' }}>{data.countDownText == '' ? '默认文案' : data.countDownText }</div>
                    <div>{"一段倒计时文案"}</div>
                </div>
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
        )
    }
}

export default TimeView