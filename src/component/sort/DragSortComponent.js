import React, { useState, useRef } from  'react';
import {useDrop} from 'react-dnd';
import DragSortItemComponent from './DragSortItemComponent';

const List = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
    {id: 5, name: 'e'}
]
//将列表数据替换为真实数据

const DragSortComponent = props => {
    const [list, setList] = useState(List)
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
        console.log("sortItems", sortItems)
        const { dragRow, placeRow, posi } = sortItems.current
        let _map = JSON.parse(JSON.stringify(list))
        let index1 = _map.findIndex(v => v.id === dragRow.id) // 拖拽的itemIndex
        _map.splice(index1, 1) // 先删掉拖拽的，在获取放置的，先删除被拖拽的元素
        let index = _map.findIndex(v => v.id === placeRow.id) // 放置的itemIndex
        //在
        console.log("_map", _map)
        //确实进行了移动，所以，这个时候需要重新设置列表数据
        if (index !== -1 && index1 !== -1) {
            _map.splice(posi === 'bottom' ? index + 1 : index, 0, dragRow) //在被拖拽的位置增加一个元素
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

export default DragSortComponent;