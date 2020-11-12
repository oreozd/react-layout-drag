import React, { Component } from 'react'
import BannerControl  from  './BannerControl'
import CommidityControl from './CommidityControl'
import CouponControl from './CouponControl'
import TimeControl from './TimeControl'
import FlashSaleControl from './FlashSaleControl'
import AwardControl from './AwardControl'
import Controls from './Controls'

export default class ControlsLayout extends Component {
    render() {
        const controls = [
            // {name: "banner控件", id: "0"},
            // {name: "计时器控件", id: "0"},
            // {name: "优惠券控件", id: "0"},
            // {name: "商品控件", id: "0"},
            // {name: "限时抢购控件", id: "0"},
            // {name: "抽奖控件", id: "0"}
            "banner控件",
            "计时器控件",
            "优惠券控件",
            "商品控件", 
            "限时抢购控件", 
            "抽奖控件",
        ]
        return (
            <div  style={{width: '10%', backgroundColor: '#E8DAEF', position: 'fixed', left: '0px', height: '1000px'}}>
                <h4 style={{paddingLeft: '1.5rem', height: '60px', backgroundColor: '#ddd', lineHeight: '60px', marginTop: '0px'}}>控件区</h4>
                {
                    // <div style={{marginBottom: '30px', clear: 'both'}}>
                    //     <BannerControl name="banner控件" id="0"/>
                    //     <TimeControl name="计时器控件" id="1"/>
                    //     <CouponControl name="优惠券控件" id="2"/>
                    //     <CommidityControl name="商品控件" id="3"/>
                    //     <FlashSaleControl name="限时抢购控件" id="4"/>
                    //     <AwardControl name="抽奖控件" id="5"/>
                    // </div>
                } 
                {
                    controls.map((item, index) => {
                        return <Controls name={item} id={index} />
                    })
                }
            </div>
        )
    }
}
