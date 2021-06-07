import React, { useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const List = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'}
];

const DragSortComponent = props => {
    const [list,setList] = useState(List)
    const [itemClass, setItemClass] = useState({
        key: null,
        value: '',
    })
    // 拖拽后的值
    const sortItems = useRef({
        dragRow: {},
        placeRow: {},
        posi: '',
    })
    // 拖拽结束后的方法
    const onDrop = (item, monitor) => {
      const { dragRow, placeRow, posi } = sortItems.current
      let _map = JSON.parse(JSON.stringify(list))
      let index1 = _map.findIndex(v => v.id === dragRow.id) // 拖拽的itemIndex
      _map.splice(index1, 1) // 先删掉拖拽的，在获取放置的
      let index = _map.findIndex(v => v.id === placeRow.id) // 放置的itemIndex
      if (index !== -1 && index1 !== -1) {
        _map.splice(posi === 'bottom' ? index + 1 : index, 0, dragRow)
        setList(() => _map)
      }
    }
    // DragSortItemComponent组件是通用排序组件，所以需要在父组件在定义一个useDrop,来改变数据 必须挂载在父级div
    const [, drop] = useDrop({
      accept: 'sort', // 必须和拖拽的accept一致
      drop: onDrop,
      collect: monitor => ({
        isOver: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
      }),
    })
    const onItemDragClass = (key, value) => {
      if (itemClass.value !== value) {
        setItemClass(() => {
          let data = { key, value }
          return data
        })
      }
    }
    const onSortItemChange = (dragRow, placeRow, posi) => {
      sortItems.current = { dragRow, placeRow, posi }
    }
    return (
      <div className="drag-sort-component-wrapper" ref={drop}>
        {
          list.map(v => (
            <DragSortItemComponent
              key={v.id}
              row={v}
              onItemDragClass={onItemDragClass}
              onSortItemChange={onSortItemChange}
              keyName="id"
            >
              <div className={['drag-item ',itemClass.key === v.id ? itemClass.value : ''].join(' ')}>{v.name}</div>
            </DragSortItemComponent>
          ))
        }
      </div>
    )
}



// type IProps = {
//     row,
//     onItemDragClass: (key,value) => void,
//     onSortItemChange: (dragRow, placeRow, posi) => void // 排序后
//     keyName
// }

const DragSortItemComponent = props => {
    const { row,onItemDragClass,onSortItemChange,keyName } = props
    const ref = useRef(null)
    /**
     * 拖拽容器
     */
    const [, drop] = useDrop({
      // 定义拖拽的类型
      accept: 'sort',
      drop: (item, monitor) => {
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
      },
      canDrop: (item, mointor) => {
        // 阻止默认拖拽释放
        onItemDragClass(row[keyName], '')
        return false
      },
      hover: (item, monitor) => {
        const didHover = monitor.isOver({ shallow: true })
        if (didHover) {
          // 拖拽目标的id
          const dragIndex = item[keyName]
          // 放置目标id  可以用index | id 只要是number，数据里唯一的就可以
          const hoverIndex = row[keyName]
          // 如果一样不处理
          if (dragIndex === hoverIndex) {
            onItemDragClass(row[keyName], '')
            return
          }
          // 获取放置的位置
          const hoverBoundingRect = ref.current.getBoundingClientRect();
          // 获取放置的Y轴中点
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          // 获取拖拽目标偏移量
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = clientOffset.y - hoverBoundingRect.top
          if (dragIndex !== hoverIndex) {
            if (hoverMiddleY < hoverClientY) {
              onItemDragClass(row[keyName], 'bottom')
            } else {
              onItemDragClass(row[keyName], 'top')
            }
            // 如果不做成通用拖拽容器，把参数存起来，把这个放在useDrag的end方法里,
            onSortItemChange(item, row, hoverMiddleY < hoverClientY ? 'bottom' : 'top')
          }
        }
      },
      collect: monitor => ({
        isOver: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
      }),
    })
    /**
     * 定义拖拽
     * isDragging 是否拖拽
     */
    const [{ isDragging }, drag] = useDrag({
      item: { ...row, type: 'sort'},
      end: () => {
        // onSortItemChange(item, row, hoverMiddleY < hoverClientY ? 'bottom' : 'top')
      },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        didDrop: monitor.isDragging(),
      }),
    })
    drop(drag(ref))
    return (
      <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
        {props.children}
      </div>
    )
}

const Drag = props => {
    return (
      <div className="drag-wrapper">
        {/* DndProvider组件提供了react-dnd的功能，必须通过backend绑定HTML5Backend*/}
        <DndProvider backend={HTML5Backend}>
          <DragSortComponent/>
        </DndProvider>
      </div>
    )
  }
  
export default Drag