import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

export default class ChildEditPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
        }
    }

    //移除banner
    handleRemove(index) {
        this.props.list.splice(index, 1)
    }

    handleChange(e, index) {
        console.log("e,index", e, index) //
        const name = e.target.name
        const value = e.target.value
        this.props.onChange(name, value, index)
    }

    bannerEditPanelRender(index) {
        console.log("index", index)
        return (
            <div style={{width: '95%', margin: '20px auto', border: '1px dashed #000', padding: '20px'}}>
                <div style={{fontWeight: '600', marginBottom: '20px', position:'relative'}}>banner配置项列表
                    <span style={{position: 'absolute', right: '0px'}} onClick={this.props.onRemove.bind(this)}>X</span>
                </div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>序号： <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="input" name="bannerSortIndex" onChange={(e, index) =>this.handleChange(e, index)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="input" name="bannerImg4Web" onChange={this.handleChange.bind(this)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select" name="bannerLinkType4Web" onChange={this.handleChange.bind(this)}>
                        <option value="-1">请选择</option>
                        <option value="1">无跳转</option>
                        <option value="2">url跳转</option>
                        <option value="3">宣传页面跳转</option>
                        <option value="4">新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>app图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="input" name="bannerImg4App" onChange={this.handleChange.bind(this)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>app跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select" name="bannerLinkType4App" onChange={this.handleChange.bind(this)}>
                        <option value="-1">请选择</option>
                        <option value="1">无跳转</option>
                        <option value="2">url跳转</option>
                        <option value="3">宣传页面跳转</option>
                        <option value="4">新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>
            </div>
        )
    }

    couponEditPanelRender() {
        return (
            <div>
                <div>优惠券配置项</div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>序号： <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="input" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>是</option>
                        <option>否</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>请选择</option>
                        <option>无跳转</option>
                        <option>url跳转</option>
                        <option>宣传页面跳转</option>
                        <option>新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>是</option>
                        <option>否</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>请选择</option>
                        <option>无跳转</option>
                        <option>url跳转</option>
                        <option>宣传页面跳转</option>
                        <option>新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>
            </div>
        )
    }

    flashSaleEditRender() {
        return (
            <div>
                <div>限时抢购配置</div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>序号： <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="input" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>是</option>
                        <option>否</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>请选择</option>
                        <option>无跳转</option>
                        <option>url跳转</option>
                        <option>宣传页面跳转</option>
                        <option>新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>是</option>
                        <option>否</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                    <Form.Control as="select">
                        <option>请选择</option>
                        <option>无跳转</option>
                        <option>url跳转</option>
                        <option>宣传页面跳转</option>
                        <option>新主题会场跳转</option>
                    </Form.Control>
                </Form.Group>
            </div>
        )
    }

    render() {
        const { name, key } = this.props
        console.log("key", key)
        return (
            <div>
                {
                    name == 'banner' &&  this.bannerEditPanelRender(key)
                }

                {name == 'coupon' && this.couponEditPanelRender()}
                {name == 'flashSale' && this.flashSaleEditRender()}
            </div>
        )
    }
}
