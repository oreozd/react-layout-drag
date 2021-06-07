import React, { useContext } from 'react';
import AppContext from '../Context/index';


const List = () => {
    const { list } = useContext(AppContext);
    console.log("List-list", list)
    const listRender = (item) => {
        return (
            <div>
                {item.name}
            </div>
        )
    }
    return (
        list.map(item => listRender(item))
    )
}

export default List;