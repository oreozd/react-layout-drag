import React, { Component } from 'react'

import {Form, Button} from 'react-bootstrap'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timeControl: {
                isFloor: false,
                floorName: '',
                countDownText: '',
                countDownTime: '',
                backgroundColor4Web: '',
                img4Web: ''
            }
        }
    }

    handleChange(e) {
        const {index} = this.props
        console.log("index", index)
        console.log("e.target.value", e.target.value)
        const name = e.target.name
        const value = e.target.value
        window._.changeAttribute(1, 'TimeControl', name, value) 
    }
    render() {
        const {key, index, item, type} = this.props
        console.log("index", index)
        return (
            <div style={{width: '95%', margin: '20px auto', padding: '10px'}}>
                <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>计时控件配置项</div>
                <Form>
                    <Form.Group>
                        <Form.Label>是否关联楼层: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select">
                            <option>是</option>
                            <option>否</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>倒计时文案: <span style={{color: 'red'}}>*</span></Form.Label>
                        {
                            <Form.Control type="input" name="countDownText" onChange={(e) => this.props.onChange(e, index, 'TimeControl')} />
                        }
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>倒计时时间: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="input" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>背景色Web： <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="input" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="input" />
                    </Form.Group>
                    
                </Form>
            </div>
        )
    }
}
