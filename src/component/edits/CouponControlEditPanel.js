import React, { Component } from 'react'

import {Form, Button} from 'react-bootstrap'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bannerConfigOptions: [],  //banner配置项列表
            couponControl: {
                isFloor: false,
                floorName: '',
                isUnifyGetTime: false,
                isMultiTime: false,
                getCouponTime: '',
                getFrequency: '',
                customFrequency: '', //自定义频次
                getTimes: [{
                    startTime: '',
                    endTime: ''
                }],
                maxNum4Web: '',
                maxNum4App: '',
                backgroundColor4Web: '',
                couponProperty: []
            }
        }
    }

    handleChange() {
        
    }

    


    render() {
        //console.log("this.state.bannerConfigOptions", this.state.bannerConfigOptions)
        return (
            <div  style={{width: '95%', margin: '20px auto', padding: '10px'}}>
                <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>优惠券控件配置项</div>
                <Form>
                    <Form.Group>
                        <Form.Label>是否关联楼层: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select">
                            <option>是</option>
                            <option>否</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>图片展示方式: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select">
                            <option>平铺</option>
                            <option>轮播</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>每行最多显示个数（Web）: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select">
                            <option>请选择</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>每行最多显示个数（App）: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select">
                            <option>请选择</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>背景色： <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="input" />
                    </Form.Group>
                    
                    {
                        // this.state.bannerConfigOptions.map((item, index) => {
                        //     return item;
                        // })
                    }
                    
                    
                    
                </Form>
            </div>
        )
    }
}
