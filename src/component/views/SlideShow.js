import React, { Component } from 'react'
import './slideShow.css'

export default class SlideShow extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [
                './images/p1.jpg',
                './images/p2.jpg',
                './images/p3.jpg'
            ],
            showIndex: 0,
            timer: null,
            show: false
        }
    }

    componentDidMount(){ //一开始自动播放
        this.start();
    }
    componentWillUnmount() { //销毁前清除定时器
        this.stop();
    }
    stop = () => { //暂停
        let {timer} = this.state;
        clearInterval(timer);
    }
    start = () => { //开始
        let {timer} = this.state;
        timer = setInterval(() => {
            this.next();
        }, 2000);
        this.setState({
            timer
        })
    }
    change = (index) => { //点击下面的按钮切换当前显示的图片
        let {showIndex} = this.state;
        showIndex = index;
        this.setState({
            showIndex
        })
    }
    previous = (e) => { //上一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex <= 0){
            showIndex = imgs.length - 1;
        }else{
            showIndex --;
        }
        this.setState({
            showIndex
        })
    }
    next = (e) => { //下一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex >= imgs.length - 1){
            showIndex = 0;
        }else{
            showIndex ++;
        }
        this.setState({
            showIndex
        })
    }

    render() {
        return (
            <div className="ReactCarousel">
                <div className="contain" 
                     onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
                     onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
                >
                    <ul className="ul">
                        {
                            this.state.imgs.map((value, index) => {
                                return (
                                    <li className={index === this.state.showIndex ? 'show' : ''}
                                        key={index} 
                                    > 
                                        <img src={require(value + '')} alt="轮播图" style={{width: '100%'}}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="dots"> 
                        {
                            this.state.imgs.map((value, index) => {
                                return (
                                    <li key={index}  
                                        className={index === this.state.showIndex ? 'active' : ''} 
                                        onClick={()=>{this.change(index)}}>
                                    </li>)
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
