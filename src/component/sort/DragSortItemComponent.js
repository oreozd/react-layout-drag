import React, { useRef } from "react";
import { useDrop, useDrag } from 'react-dnd';

const DragSortItemComponent = props => {
    const { row, onItemDragClass, onSortItemChange, keyName } = props
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
        })
    })

    drop(drag(ref))
    console.log("props", props.children)
    return (
        <div ref={ref} style={{ opacity: isDragging ? 0 : 1 }}>
            {props.children}
        </div>
    )
}

export default DragSortItemComponent;