import React, { useContext, useReducer } from 'react';
import AppContext from '../../Context/index';

const Navbar = () => {
    const {username, age} = useContext(AppContext);
    //const [state, dispatch] = useReducer(reducer, initialState, init); //使用方式
    return (
        <div>
            <p>AwesomeSite</p>
            <p>{username}</p>
            <p>{age}</p>
        </div>
    )
}

export default Navbar;