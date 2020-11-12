import React, { Component } from 'react'

import {Form, Button} from 'react-bootstrap'
const editList = require('../../listData/editData.json') //所有编辑项
export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //bannerControl: this.props.controls,
            BannerControl: {
                isfloor: false,
                floorName: '', 
                picStyle: 0, //图片展示方式，平铺和轮播形式
                picMaxnum4Web: '',
                picMaxnum4App: '',
                backgroundColor: '',
                bannerProperty: []
            }
        }
        
    }

    //属性改变
    //在本页面进行写的改变函数，但是实际上好像不太好用
    handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState(old => {
            old.bannerControl[name] = value
            return old
        })
    }

    handleClick() {
        
    }

    handleRemove(index) { 
        let arr = [...this.state.bannerControl.bannerProperty]; //复制一个数组
        arr.splice(index, 1)
        this.setState(old => {
            old.bannerControl.bannerProperty = arr
            return old
        })
    }

    //增加子配置项
    handleAddChildEdit() {
        let arr = [...this.state.bannerControl.bannerProperty]; //复制一个数组
        arr.push({
            bannerSortIndex: '',
            bannerImg4Web: '',
            bannerLinkType4Web: '',
            bannerImg4App: '',
            bannerLinkType4App: ''
        });
        this.setState(old => {
            old.bannerControl.bannerProperty = arr
            return old
        })
    }

    //banner具体配置项
    bannerChildEditPanelRender(list, controlIndex) {
        let output = [];
        if (list && list.length) {
            list.map((item, index) => {
                output.push(
                    <div style={{width: '95%', margin: '20px auto', border: '1px dashed #000', padding: '20px'}}>
                        <div style={{fontWeight: '600', marginBottom: '20px', position:'relative'}}>banner配置项列表
                            <span style={{position: 'absolute', right: '0px'}}>
                                <button style={{border: '0', outline: 'none', backgroundColor: 'transparent'}} onClick={(e) => this.props.handleRemove(e, index, controlIndex)} name="bannerControl">X</button>
                            </span>
                        </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>序号： <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="input" name="bannerSortIndex" onChange={(e) => this.handleChildEditChange(e, index)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>web图片: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="input" name="bannerImg4Web" onChange={(e) => this.handleChildEditChange(e, index)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>web跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="select" name="bannerLinkType4Web" onChange={(e) => this.handleChildEditChange(e, index)}>
                                <option value="-1">请选择</option>
                                <option value="1">无跳转</option>
                                <option value="2">url跳转</option>
                                <option value="3">宣传页面跳转</option>
                                <option value="4">新主题会场跳转</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>app图片: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="input" name="bannerImg4App" onChange={(e) => this.handleChildEditChange(e, index)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>app跳转设置: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="select" name="bannerLinkType4App" onChange={(e) => this.handleChildEditChange(e, index)}>
                                <option value="-1">请选择</option>
                                <option value="1">无跳转</option>
                                <option value="2">url跳转</option>
                                <option value="3">宣传页面跳转</option>
                                <option value="4">新主题会场跳转</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                );
            });
        }
        return output
    }

    render() {
        const {index} = this.props
        let list = window._.getControls() || []
        const data = list.length ? list[index].BannerControl : this.state.BannerControl
        console.log("list", list)
        const List = list.length ? list[index].BannerControl.bannerProperty : this.state.BannerControl.bannerProperty
        return (
            <div style={{width: '95%', margin: '20px auto', padding: '10px'}}>
                <div style={{fontSize: '16px', fontWeight: '600', marginBottom: '20px'}}>banner控件配置项</div>
                <Form>
                    <Form.Group>
                        <Form.Label >是否关联楼层: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select" name="isfloor" onChange={this.handleChange.bind(this)} checked={data.isfloor}>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>图片展示方式: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select" name="picStyle" onChange={(e) => this.props.onChange(e, index, 'BannerControl')} checked={data.picStyle}>
                            <option value="1">平铺</option>
                            <option value="0">轮播</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>每行最多显示个数（Web）: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select" name="picMaxnum4Web" onChange={(e) => this.props.onChange(e, index, 'BannerControl')} value={data.picMaxnum4Web}>
                            <option value="-1">请选择</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>每行最多显示个数（App）: <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control as="select" name="picMaxnum4App"  onChange={(e) => this.props.onChange(e, index, 'BannerControl')} value={data.picMaxnum4App}>
                            <option value="-1">请选择</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>背景色： <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control 
                            as="input" 
                            name="backgroundColor" 
                            onChange={(e) => this.props.onChange(e, index, 'BannerControl')} 
                            value={data.backgroundColor}
                            maxLength={7}
                        />
                    </Form.Group>
                </Form>
                {this.bannerChildEditPanelRender(List, index)}
                <Button name="bannerControl" onClick={(e) => this.props.handleAddChildEdit(e, index)} >增加Banner配置</Button>
            </div>
        )
    }
}
