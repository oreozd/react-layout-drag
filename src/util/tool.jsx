
window._= {
    /**
     * 存储localStorage
     */
    init:() =>{
        window.localStorage.setItem("edits", JSON.stringify([]));
    },

    addControl: function (item) {
        let edits = JSON.parse(window.localStorage.getItem("edits"))
        edits.push(item)
        window.localStorage.setItem("edits", JSON.stringify(edits)); //增加一条control信息
    },

    changeControl: function (index, item) {
        console.log("index, item", index, item)
        let edits = JSON.parse(window.localStorage.getItem("edits")); //获取最新信息
        edits[index] = item 
        console.log("最新list", JSON.parse(window.localStorage.getItem("edits")))
        return window.localStorage.setItem("edits", JSON.stringify(edits));
    },

    //改变某个编辑项的属性值，但是在一个的组件已经渲染的时候应该怎样
    changeAttribute: function (index, controlname, name, value) {
        console.log("index, controlname, name, value", index, controlname, name, value)
        let edits = JSON.parse(window.localStorage.getItem("edits")); //获取最新信息
        edits[index][controlname][name] = value 
        console.log("最新list", JSON.parse(window.localStorage.getItem("edits")))
        return window.localStorage.setItem("edits", JSON.stringify(edits));
    }, 

    getControls: function() {
        //window.localStorage.setItem("edits", JSON.stringify([])); //有问题就清空
        //console.log("List", window.localStorage.getItem("edits"))
        return JSON.parse(window.localStorage.getItem("edits")); //获取所有的
    },

    //上移和下移有问题，先不看
    moveOnControl(index) {
        let edits = JSON.parse(window.localStorage.getItem("edits"))
        let tmp = edits[index]
        edits.splice(index, 1) 
        edits.splice(index - 1, 0, tmp) 
        window.localStorage.setItem("edits", JSON.stringify(edits));
    },
    
    moveDownControl(index) {
        let edits = JSON.parse(window.localStorage.getItem("edits"))
        let tmp = edits[index]
        edits.splice(index, 1) 
        edits.splice(index + 1, 0, tmp) 
        window.localStorage.setItem("edits", JSON.stringify(edits));
    }, 

    deleteControl: function(index) {
        let edits = JSON.parse(window.localStorage.getItem("edits"))
        console.log("edits", edits)
        edits.splice(index, 1)
        window.localStorage.setItem("edits", JSON.stringify(edits));
    }
}
