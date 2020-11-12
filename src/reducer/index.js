const editList = []

const controls = (state = editList, action) => {
    switch(action.type) {
        case 'ADDCONTROL':
            return state.push(action.controlProperty)
        case 'RESORTCONTROL':
            return {
                //重新排列控件
            }
        case 'DELETECONTROL':
            return {
                //删除控件
            }
        case 'CHANGECONTROL': 
            return {
                //修改控件属性
            }
        default:
            return state
    }
}

export default controls