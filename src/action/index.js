export function addControl() {
    return {
        type: 'ADDCONTROL',
        controlProperty: {
            name: 'banner',
            type: 0
        } //要增加的控件属性
    }
}
//组件排序
export function resortControl() {
    return {
        type: 'RESORTCONTROL'
    }
}
//删除组件
export function deleteControl() {
    return {
        type: 'DELETECONTROL'
    }
}
//修改组件属性
export function changeControl() {
    return {
        type: 'CHANGECONTROL'
    }
}

// export const controlActions = {
//     addControl',
//     RESORTCONTROL: 'RESORTCONTROL',
//     DELETECONTROL: 'DELETECONTROL',
//     CHANGECONTROL: 'CHANGECONTROL'
// }