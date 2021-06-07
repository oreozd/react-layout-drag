import React, { Component } from 'react';
//import { DragDropContext } from 'react-dnd';
//import HTMLBackend from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css'; //加载样式
//import Layout  from  './component/Layout'
import './util/tool'
import AppContext from './Context/index';
import controlData from './listData/controlsData.json';

import Box from './component/Box';
import Dustbin from './component/Dustbin';
import ControlsLayout from './component/controls/ControlsLayout';
import ViewLayout1 from './component/views/ViewLayout1';
import EditsLayout1 from './component/edits/EditsLayout1';
// 将 HTMLBackend 作为参数传给 DragDropContext

// // @DragDropContext(HTMLBackend)
// class App extends Component {
  
//   render() {
//     return (
//       <Layout/>
//     )
//   }
// }

// const App = () => {
// 	const data = JSON.stringify(controlData);
//     return (
// 		<AppContext.Provider value={
// 			data
// 		}>
// 			<Layout/>
// 		</AppContext.Provider>
// 	)
// }

const App = () => {
	//let data = JSON.stringify(controlData);
	let list = [];
	return (
		<AppContext.Provider value={{
			list
		}}>
			<ControlsLayout />
			<ViewLayout1 />
			<EditsLayout1 />
		</AppContext.Provider>
	)
}

export default App;
