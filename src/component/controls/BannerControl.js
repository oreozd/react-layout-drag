import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

// import { connect } from 'react-redux'
// import {addControl} from '../../action/index'


import ItemTypes from '../types';



const List = require('../../listData/viewData.json')

//样式
const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	margin: '0.5rem 1.5rem 0.5rem 1.5rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		const didDrop = monitor.didDrop()
		if (didDrop) {
			const item = {
				name: 'banner',
				funcIndex: 0,
				BannerControl: {
					isfloor: false,
					floorName: '', 
					picStyle: 1, //图片展示方式，平铺和轮播形式 0是轮播，1是平铺
					picMaxnum4Web: 1,
					picMaxnum4App: 1,
					backgroundColor: '',
					bannerProperty: []
				}
			}
			window._.addControl(item)
		}
	},
}

@DragSource(
	ItemTypes.TEST,
	boxSource,
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}),
)
class BannerControl extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired
	}

	render() {
		const { connectDragSource } = this.props
		const { name } = this.props

		return connectDragSource && connectDragSource(
			<div style={{ ...style }}>
				{name}
			</div>
		);
	}
}

export default BannerControl;