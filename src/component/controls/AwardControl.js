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

		// canDrag() //是否可以被拖拽。如果没有正在进行拖动操作，则返回 true
		// isDragging()  //是否正在被拖动。如果正在进行拖动操作，则返回 true
		// getItemType()//返回标识当前拖动项的类型的字符串或ES6符号。 如果没有拖动项目，则返回 null
		// getItem()//返回表示当前拖动项的普通对象。 每个拖动源都必须通过从其beginDrag（）方法返回一个对象来指定它。 如果没有拖动项目，则返回 null
		// getDropResult()//返回表示最后记录的放置 drop result 对象
		// didDrop()//如果某个 drop target 处理了 drop 事件，则返回 true，否则返回 false。即使 target 没有返回 drop 结果，didDrop() 也会返回true。 在 endDrag() 中使用它来测试任何放置目标是否已处理掉落。 如果在 endDrag() 之外调用，则返回 false
		// getInitialClientOffset()///返回当前拖动操作开始时指针的{x，y} client 偏移量。 如果没有拖动项目，则返回 null
		// getInitialSourceClientOffset()//返回当前拖动操作开始时 drag source 组件的根DOM节点的{x，y}client 偏移量。 如果没有拖动项目，则返回 null
		// getClientOffset()//拖动操作正在进行时，返回指针的最后记录的{x，y}client 偏移量。 如果没有拖动项目，则返回 null
		// getDifferenceFromInitialOffset()//返回当前拖动操作开始时鼠标的最后记录 client 偏移量与 client 偏移量之间的{x，y}差异。 如果没有拖动项目，则返回 null
		// getSourceClientOffset()//返回 drag source 组件的根DOM节点的预计{x，y} client 偏移量，基于其在当前拖动操作开始时的位置以及移动差异。 如果没有拖动项目，则返回 null

		const item = monitor.getItem();
		const dropResult = monitor.getDropResult();
		const didDrop = monitor.didDrop()

		if (dropResult) {
			
		}

		if (didDrop) {
			List.push({"name": "award控件", "funcIndex": 5})
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
class AwardControl extends React.Component {

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

export default AwardControl;