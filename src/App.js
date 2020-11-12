import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';

import 'bootstrap/dist/css/bootstrap.min.css'; //加载样式
import Layout  from  './component/Layout'
import './util/tool'

// 将 HTMLBackend 作为参数传给 DragDropContext

@DragDropContext(HTMLBackend)
class App extends Component {
  
  render() {
    return (
      <Layout/>
    )
  }
}

export default App;
