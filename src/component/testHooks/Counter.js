import React, { useReducer } from 'react';
import myReducer from '../../reducer/hooksReducer';

const Counter = () => {
    //const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer(myReducer, {count: 0})
    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'increase'})}>+</button>
        </div>
    )
}
export default Counter;

