import React, { useContext } from 'react';
import AppContext from '../../Context/index';

const Message = () => {
    const {mesaage} = useContext(AppContext);
    return (
        <div>
            <p>{mesaage}</p>
        </div>
    )
}

export default Message;