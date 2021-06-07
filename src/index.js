import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import Hooks from "./Hooks";

//import DragSortComponent from './component/sort/DragSortComponent'
import Drag from './component/sort/Drag';

//引入bootstrap相关的属性
import 'bootstrap/dist/css/bootstrap.min.css';


console.log("HTML5Backend", HTML5Backend)

//ReactDOM.render(<Hooks />, document.getElementById('root'));
ReactDOM.render(
    // <DndProvider backend={HTML5Backend}>
    //     <DragSortComponent />
    // </DndProvider>, 
    <Drag />,
    document.getElementById('root')
);
//serviceWorker.unregister();


