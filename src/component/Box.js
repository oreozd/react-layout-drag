import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import AppContext from '../Context/index';


const style = {
    width: 200,
    height: 50,
    lineHeight: '50px',
    background: 'pink',
    margin: '30px auto'
}

const Box = () => {
    const [collectProps, drager] = useDrag({
        item: { type: 'Box', id: 1, name: 'card1', kind: 'Card' },
        // end: (item, DragSourceMonitor) => ({
        //     item,
        //     didDrop: DragSourceMonitor.didDrop()
        // })
        // end: (item, DragSourceMonitor) => {

        // },
        collect: (DragSourceMonitor) => ({
            //isOver: DragSourceMonitor.isOver(),
            item: DragSourceMonitor.getItem(),
            didDrop: DragSourceMonitor.didDrop()
        }),
        // collect: (DragSourceMonitor) => ({
        //     //end: DragSourceMonitor.end(),
            
        // }),
        // end: (DragSourceMonitor) => ({
        //     didDrop: DragSourceMonitor.didDrop() //是否放入目标框中
        // })
    });
    console.log("collectProps", collectProps)
    console.log("item", collectProps.item)
    console.log("didDrop", collectProps.didDrop)
    //console.log("didDrop-end", collectProps.end.didDrop)
    const { list } = useContext(AppContext)
    //当在目标框内放下被拖拽元素的时候就会触发添加函数
    if(collectProps.didDrop) {
        list.push(1);
    }
    
    return (
        <div ref={drager} style={style} >
            Box
        </div> 
    )
}

export default Box;