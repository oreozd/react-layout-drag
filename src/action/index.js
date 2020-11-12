export function addControl() {
    return {
        type: 'ADDCONTROL',
        controlProperty: {
            name: 'banner',
            type: 0
        } //要增加的控件属性
    }
}

export function resortControl() {
    return {
        type: 'RESORTCONTROL'
    }
}

export function deleteControl() {
    return {
        type: 'DELETECONTROL'
    }
}

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