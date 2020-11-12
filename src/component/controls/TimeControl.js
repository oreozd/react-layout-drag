import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import { Navbar, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';

import ItemTypes from '../types';

const List = require('../../listData/viewData.json')

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

		if (dropResult) {
			
		}

		if (didDrop) {
			//List.push({"name": "time控件", "funcIndex": 1})

			const item = {
				name: 'time',
				funcIndex: 1,
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
class TimeControl extends React.Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired
	}

	render() {
		const { isDragging, connectDragSource, dropResult } = this.props
		const { name } = this.props
		//const opacity = isDragging ? 0.4 : 1
		//const visibility = isDragging ? 'hidden' : 'visible' //移动起来就隐藏元素

		return connectDragSource && connectDragSource(
				<div style={{ ...style }}>
					{name}
				</div>

			);
	}
}

export default TimeControl;