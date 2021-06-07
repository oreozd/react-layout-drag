const hooksReducer = (state, action) => {
    switch(action.type) {
        case 'increase': 
            return {
                ...state, 
                count: state.count + 1
            }
        default: 
            return state;
    }
}

export default hooksReducer;