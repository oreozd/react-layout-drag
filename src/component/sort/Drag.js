import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DragSortComponent from './DragSortComponent';

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
  
export default Drag;