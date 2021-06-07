import React, { useState } from 'react'; 
import AppContext from './Context/index';
import Navbar from './component/testHooks/Navbar';
import Message from './component/testHooks/Message';
import Counter from './component/testHooks/Counter';

//useState(), useContext(), useReducer(), useEffect()
//函数组件加上一些特定的钩子，
const Hooks = () => {
    //const [state, setstate] = useState(initialState) const [状态， 设置状态函数怒] = useState(状态值初始化);
    const [buttonText, setButtonText] = useState('click') 
    function handleClick() {
        console.log("click");
        return setButtonText("thanks, been clicked");
    }

    // return <div>
    //     <button onClick={handleClick}>{buttonText}</button>
    // </div>
    return <AppContext.Provider value={{
        username: 'test',
        age: 19,
        mesaage: 'hahhaha'
    }}>
        <div>
           <Counter />
        </div>
    </AppContext.Provider>
}

export default Hooks;

// Q
// 1. 为什么如果是有多个state，就是要写很多个useState吗。目前看来是这样的
// 2. context是创建了一个变量的池子，有往数据池中创建数据的一方，也就是父组件，也有使用数据池中的数据的一方，叫做子组件
// 创建数据使用 <AppContext.Provider value={{}}></AppContext.Provider>这个高阶组价去包装需要的组件，
// 在子组件中就可以使用 useContext去解析对应的变量

// <Navbar />
// <Message />