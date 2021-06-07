import React, { Component } from 'react'

import BannerControlEditPanel from './BannerControlEditPanel'
import TimeControlEditPanel from './TimeControlEditPanel'
import CommidityControlEditPanel  from './CommidityControlEditPanel'
import CouponControlEditPanel  from  './CouponControlEditPanel'
import FlashSaleControlEditPanel from './FlashSaleControlEditPanel'
import AwardControlEditPanel from './AwardControlEditPanel'

import {Form, Button} from 'react-bootstrap'
import AppContext from '../../Context'

const editList = require('../../listData/editData.json') //所有编辑项
export default class EditsLayout extends Component {
    
    constructor (props, context) {
        super(props)
        this.state = {
            editsList: []
        }
    }

    componentDidMount() {
        this.setState(old => {
            old.editsList = this.props.list
            return old
        });
    }

    handleSubmit() {

    }

    listRender(type, index) {
        console.log("type, index", type, index)
        const {controls, modal} = this.props
        const controlName = ['bannerControl', 'timeControl', 'couponControl', 'commidityControl', 'flashSaleControl', 'awardControl']
		const List = window._.getControls()
        const List = useContext(AppContext);
		const Components = [
			{
				componentName: BannerControlEditPanel, //硬编码
				name: 'banner'
			},{
				componentName: TimeControlEditPanel,
				name: 'time'
			},{
				componentName: CommidityControlEditPanel,
				name: 'coupon'
			},{
				componentName: CouponControlEditPanel,
				name: 'commidity'
			},{
				componentName: FlashSaleControlEditPanel,
				name: 'falshSale'                
			},{
				componentName: AwardControlEditPanel,
				name: 'award'
			},
		]
        const ComponentName = Components[type].componentName
        return  <ComponentName 
                    name= {Components[type].name}
                    onChange={this.props.onChange}  //修改控件属性
                    handleAddChildEdit={this.props.handleAddChildEdit} //修改具体配置项的属性
                    handleRemove={this.props.handleRemove}
                    key={index}
                    index={index}
                    type={type}
                    list={List}
				/>;
	}

    render() {
        const {list, controls, edits} = this.props
        const type = this.props.currentEdits.controlName
        const {controlName, controlIndex, index} = this.props.currentEdits

        const List = window._.getControls() //所有的编辑项数据也就是最后要提交的数据，但是每次改变都是其中一个的数据。
        return (
            <div  style={{width: '30%', backgroundColor: '#FCF3CF', padding: '1.5rem', overflowY: 'scroll', minHeight: '1000px'}}>
                <div style={{width: '95%', margin: '0 auto'}}>
                    <h3 style={{paddingLeft: '1.5rem'}}>编辑区</h3><i></i>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>活动名称： <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="input" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>店群: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="select">
                                <option>请选择</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>角标露出时间: <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="select">
                                <option>请选择</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>备注： <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="textarea" />
                        </Form.Group>
                    </Form>
                </div>
                <h4 style={{paddingLeft: '1.5rem'}}>控件属性编辑区域</h4>
                <div style={{border: '1px dashed #ddd', width: '95%', minHeight: '30%', margin: '0 auto'}}>
                    {

                        controlName == '' ?
                        <p style={{fontSize: '28px', color: '#fff', textAlign: 'center', verticalAlign: 'center'}}>点击预览区域组件可以进行编辑~</p> 
                        :
                        <div>
                            {
                                this.listRender(controlIndex, index)
                            }
                        </div>
                    }
                </div>

                <div  style={{width: '95%', margin: '20px auto', backgroundColor: '#ffffff', padding: '20px'}}>
                    <p style={{textAlign: 'center'}}><span style={{color: 'red'}}>*</span> 最少可关联2个楼层，最多可关联8个楼层</p>
                    <div>
                        <p>可添加的各类控件总数上限30个，其中：</p>
                        <p>商品控件最多可添加10个，每个商品控件内单次导入和可添加的商品总数上限500个。</p>
                        <p>限时抢购控件最多可添加4个，每个限时抢购控件最多可添加5个时段，每个时段单次导入和可添加的商品总数上限100个。</p>
                        <p>搭配套餐控件最多可添加4个，每个搭配套餐控件单次导入和可添加的套餐总数上限100个。</p>
                        <p>排行控件最多可添加2个。 </p>
                    </div>
                </div>

                <div style={{textAlign: 'center'}}>
                    <Button onClick={this.handleSubmit.bind(this)}> 提交</Button>
                </div>
            </div>
        )
    }
}
