import React, { Component } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

export default class operationBox extends Component {
    
    buttonRender() {
        const {index, length, moveOn, moveDown, ondelete} = this.props
        console.log("index", index)
        let output
        length === 1 ?
        output = <Button variant="danger" onClick={ondelete.bind(this, index)}>删除</Button>
        :
        output = <div>
                    {
                        length != 1 && index != 0 ? 
                        <Button variant="info" onClick={moveOn.bind(this, index)} style={{marginRight: '5px'}}>上移</Button> : null 
                    }
                    {
                        length != 1 && index != length - 1 ? 
                        <Button variant="info" onClick={moveDown.bind(this, index)} style={{marginRight: '5px'}}>下移</Button> : null 
                    }
                    <Button variant="danger" onClick={ondelete.bind(this, index)}>删除</Button>
                </div>
        return output
    }

    render() {
        return ( 
            <div>
                {this.buttonRender()}
            </div>
        )
    }
}
